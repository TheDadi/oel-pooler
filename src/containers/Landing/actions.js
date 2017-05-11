import { createAction } from 'redux-actions'

export const optionSelected = createAction('OPTION_SELECTED')
export const inputChanged = createAction('INPUT_CHANGED')
export const inputError = createAction('INPUT_ERROR')
export const formSubmitted = createAction('FORM_SUBMITTED')
export const setDates = createAction('SET_DATES')
export const closeModal = createAction('CLOSE_MODAL')
export const openModal = createAction('OPEN_MODAL')

export const submitClicked = () => (dispatch, getState) => {
  const { landing } = getState()
  const { inputs } = landing

  let isOk = true
  let when = null;
  inputs.map(input => {
    const { value, name, error } = input

    if(name === 'when'){
      when = value
    }
    if (!value) {
      isOk = false
      dispatch(inputError({ name, error: 'Dieser Wert sollte nicht leer sein.' }))
    } else {
      if (name === 'howMuch' && parseInt(value) < 800) {
        isOk = false
        dispatch(inputError({ name, error: 'Mindestmenge pro Lieferung beträgt 800 Liter' }))
      } else if(error) {
        dispatch(inputError({ name, error: null }))
      }
    }
  })
  if (isOk) {
    const today = new Date();
    const todayClone = new Date(today)
    if(when === '3 days'){
      todayClone.setDate(todayClone.getDate() + 3)
      dispatch(setDates({first: today, last: todayClone}))
    }else{
      todayClone.setMonth(todayClone.getMonth() + 3)
      dispatch(setDates({first: today, last: todayClone}))
    }

    dispatch(formSubmitted())
    dispatch(openModal())
  }
}
