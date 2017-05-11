import { handleActions } from 'redux-actions'
import {
  inputChanged,
  optionSelected,
  inputError,
  setDates,
  closeModal,
  openModal,
  checkItemAdded,
  checkItemChanged,
  checkItemRemoved,
  checkItemPrefil,
  setDataItems
} from './actions'


const initialState = {
  isModalOpen: false,
  radios: {
    currentValue: 'Heizöl extra-leicht',
    options: [
      {
        label: 'Heizöl extra-leicht',
        value: 'Heizöl extra-leicht'
      },
      {
        label: 'Heizöl öko schwefelarm',
        value: 'Heizöl öko schwefelarm'
      }
      ,
      {
        label: 'Heizöl Dieselqualität',
        value: 'Heizöl Dieselqualität'
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
    lastDate: new Date(),
    items: []
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
        ...state.data,
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
      isModalOpen: false,
      data: {
        ...state.data,
        items: []
      }
    }),
    [checkItemChanged]: (state, { payload }) => ({
      ...state,
      data: {
        ...state.data,
        items: [...state.data.items.map((item, index) => {
          console.log('test', payload.index, index)
          if (payload.index === index) {
            return {
              ...item,
            [payload.name]:{
              ...item[payload.name],
              value: payload.value
            }
            }
          }
          return item
        })
        ]
      }
    }),
    [checkItemRemoved]: (state, { payload }) => ({
      ...state,
      data: {
        ...state.data,
        items: state.data.items.filter((item, index) => index !== payload.index)
      }
    }),
    [setDataItems]: (state, { payload }) => ({
      ...state,
      data: {
        ...state.data,
        items: payload
      }
    }),
    [checkItemAdded]: (state, { payload }) => ({
      ...state,
      data: {
        ...state.data,
        items: [...state.data.items, {
          numberOf: {
            value: '1',
            error: null
          },
          howMuch: {
            value: '',
            error: null
          },
          what: {
            value: '',
            error: null
          },
          where: {
            value: '',
            error: null
          }
        }]
      }
    }),
    [checkItemPrefil]: (state, { payload }) => ({
      ...state,
      data: {
        ...state.data,
        items: [...state.data.items, {
          numberOf: {
            value: '1',
            error: null
          },
          howMuch: {
            value: payload.howMuch,
            error: null
          },
          what: {
            value: payload.what,
            error: null
          },
          where: {
            value: payload.where,
            error: null
          }
        }]
      }
    })
  },
  initialState);

export default reducer;
