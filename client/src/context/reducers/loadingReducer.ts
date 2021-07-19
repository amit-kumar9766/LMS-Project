import * as ACTION_TYPES from '../actions/actionTypes'

export const loadingReducer = (state: any, action: any) => {
  switch (action.type) {
    case ACTION_TYPES.LOADING:
      return {
        ...state,
        loading: action.payload,
      }
    default:
      return state
  }
}
