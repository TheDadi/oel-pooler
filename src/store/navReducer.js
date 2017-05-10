import {NAV_PEEK, NAV_ACTIVATE, NAV_ENABLE, NAV_RESPONSIVE } from 'actions/actions';

const initialState = {
  active: false, // start with nav active
  enabled: true, // start with nav disabled
  responsive: 'multiple',
  peek: false,
  items: [
    { path: '/dashboard', label: 'Dashboard',
      excludeRole: 'virtualization user' },
    { path: '/virtual-machines', label: 'Virtual Machines' },
    { path: '/activity', label: 'Activity' },
    { path: '/utilization', label: 'Utilization' },
    { path: '/images', label: 'Images', excludeRole: 'virtualization user' },
    { path: '/virtual-machine-sizes', label: 'Sizes',
      excludeRole: 'virtualization user' },
    { path: '/settings/edit', label: 'Settings',
      excludeRole: 'virtualization user' }
  ]
};

const handlers = {

  [NAV_PEEK]: (_, action) => ({ peek: action.peek }),

  [NAV_ACTIVATE]: (_, action) => (
    { active: action.active, activateOnMultiple: null }
  ),

  [NAV_ENABLE]: (_, action) => (
    { enabled: action.enabled }
  ),

  [NAV_RESPONSIVE]: (state, action)  => {
    let result = { responsive: action.responsive };
    if ('single' === action.responsive && state.active) {
      result.active = false;
      result.activateOnMultiple = true;
    } else if ('multiple' === action.responsive && state.activateOnMultiple) {
      result.active = true;
    }
    return result;
  }
};

export default function navReducer (state = initialState, action) {
  let handler = handlers[action.type];
  if (!handler) return state;
  return { ...state, ...handler(state, action) };
}
