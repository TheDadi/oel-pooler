import { handleActions } from 'redux-actions'
import { inputChanged, optionSelected, inputError, setDates, closeModal, openModal } from './actions'


const initialState = {
  isModalOpen: true,
  radios: {
    currentValue: 'extra-light',
    options: [
      {
        label: 'Heizöl extra-leicht',
        value: 'extra-light'
      },
      {
        label: 'Heizöl extra-leicht',
        value: 'suslfur-low'
      }
      ,
      {
        label: 'Heizöl extra-leicht',
        value: 'diesel-quality'
      }
    ]
  },
  inputs: [
    {
      name: 'howMuch',
      label: 'Wieviel?',
      value: '',
      error: null,
      placeHolder: '2500 Liter',
    },
    {
      name: 'when',
      label: 'Wann?',
      value: '',
      options: [
        {
          label: 'innert ca. 3 Tagen',
          value: '3 days'
        },
        {
          label: 'innert ca. 3 Wochen',
          value: '3 weeks'
        }
      ],
      error: null,
      placeHolder: 'Auswählen'
    },
    {
      name: 'where',
      label: 'Wohin?',
      value: '',
      error: null,
      placeHolder: '8400',
    }
  ],
  data: {
    firstDate: new Date(),
    lastDate: new Date()
  }
};


const reducer = handleActions({
  [inputChanged]: (state, { payload }) => ({
    ...state,
    inputs: [...state.inputs.map((input) => {
      if (payload.name === input.name) {
        return {
          ...input,
          value: payload.value
        }
      }
      return input
    })
    ]
  }),
  [inputError]: (state, { payload }) => ({
    ...state,
    inputs: [...state.inputs.map((input) => {
      if (payload.name === input.name) {
        return {
          ...input,
          error: payload.error
        }
      }
      return input
    })
    ]
  }),
  [optionSelected]: (state, { payload }) => ({
    ...state,
    radios: {
      ...state.radios,
      currentValue: payload
    }
  }),
  [setDates]: (state, { payload:{ first, last } }) => ({
    ...state,
    data: {
      firstDate: first,
      lastDate: last
    }
  }),
  [openModal]: (state, { payload }) => ({
    ...state,
    isModalOpen: true
  }),
  [closeModal]: (state, { payload }) => ({
    ...state,
    isModalOpen: false
  })
}, initialState);

export default reducer;
