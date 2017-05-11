import { createAction } from 'redux-actions'
import { browserHistory } from 'react-router'

export const optionSelected = createAction('OPTION_SELECTED')
export const inputChanged = createAction('INPUT_CHANGED')
export const inputError = createAction('INPUT_ERROR')
export const formSubmitted = createAction('FORM_SUBMITTED')
export const setDates = createAction('SET_DATES')
export const closeModal = createAction('CLOSE_MODAL')
export const openModal = createAction('OPEN_MODAL')
export const checkItemChanged = createAction('CHECK_ITEM_CHANGED')
export const checkItemAdded = createAction('CHECK_ITEM_ADDED')
export const checkItemPrefil = createAction('CHECK_ITEM_PREFIL')
export const checkItemRemoved = createAction('CHECK_ITEM_REMOVED')
export const setDataItems = createAction('SET_DATA_ITEMS')

export const submitClicked = () => (dispatch, getState) => {
  const { landing } = getState()
  const { inputs, radios } = landing

  let isOk = true
  let when = null;
  inputs.map(input => {
    const { value, name, error } = input

    if (name === 'when') {
      when = value
    }
    if (!value) {
      isOk = false
      dispatch(inputError({ name, error: 'Dieser Wert sollte nicht leer sein.' }))
    } else {
      if (name === 'howMuch' && parseInt(value) < 800) {
        isOk = false
        dispatch(inputError({ name, error: 'Mindestmenge pro Lieferung beträgt 800 Liter' }))
      } else if (error) {
        dispatch(inputError({ name, error: null }))
      }
    }
  })
  if (isOk) {
    const today = new Date();
    const todayClone = new Date(today)
    if (when === '3 days') {
      todayClone.setDate(todayClone.getDate() + 3)
      dispatch(setDates({ first: today, last: todayClone }))
    } else {
      todayClone.setDate(todayClone.getDate() + 21)
      dispatch(setDates({ first: today, last: todayClone }))
    }
    let values = {}
    inputs.forEach(input => {
      const { value, name, error } = input
      values[name] = value
    })
    console.log(values)
    const { howMuch, where } = values;
    dispatch(checkItemPrefil({ howMuch, where, what: radios.currentValue }))
    dispatch(formSubmitted())
    dispatch(openModal())
  }
}


export const compareClicked = () => (dispatch, getState) => {
  const { landing } = getState()
  const { data: { items } } = landing

  let isOk = true
  let when = null;
  let testedItems = items.map((item, index) => {
    const { numberOf, howMuch, what, where } = item

    numberOf.error= ''
    howMuch.error= ''
    what.error= ''
    where.error= ''

    if (!numberOf.value) {
      isOk = false
      numberOf.error = 'Dieser Wert sollte nicht leer sein.'
    }
    if (!howMuch.value) {
      isOk = false
      howMuch.error = 'Dieser Wert sollte nicht leer sein.'
    }
    if( parseInt(howMuch.value) < 800){
        isOk = false
        howMuch.error = 'Mindestmenge pro Lieferung beträgt 800 Liter'
    }
    if (!what.value) {
      isOk = false
      what.error = 'Dieser Wert sollte nicht leer sein.'
    }
    if (!where.value) {
      isOk = false
      where.error = 'Dieser Wert sollte nicht leer sein.'
    }
    return { numberOf, howMuch, what, where }
  })

  if (isOk) {
    browserHistory.push('/compare');
  }else{
    dispatch(setDataItems(testedItems))
  }
}
