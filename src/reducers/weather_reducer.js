import { FETCH_WEATHER } from '../actions/index'

export default function (state=[], action) {
    if (action.type !== FETCH_WEATHER) {
        return state;
    }

    return [ action.payload.data, ...state ];
}
