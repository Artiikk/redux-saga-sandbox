import { showAlert } from './actions';
import { CREATE_POST } from './types';

const forbidden = ['fuck', 'spam']

export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === CREATE_POST) {
        const found = forbidden.filter(el => action.payload.title.includes(el))
        if (found.length) {
          return dispatch(showAlert('Not valid'))
        }
      }

      return next(action)
    }
  }
}