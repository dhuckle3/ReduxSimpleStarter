import { combineReducers } from 'redux';
import { WeatherReducer } from './weather_reducer';

const rootReducer = combineReducers({
    // weather: WeatherReducer
    state: (state = {}) => state
});

export default rootReducer;
