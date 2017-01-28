import { FETCH_WEATHER } from '../action/index'

export default function (state=[]], action) {
    switch(action.type) {
        case: FETCH_WEATHER:
            return [ action.payload.data, ...state ];
    }
    console.log('Action', action);
    return state;
}
