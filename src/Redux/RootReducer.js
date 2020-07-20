import { combineReducers } from 'redux';

import comprehensionReducer from './ComprehensionData/ComprehensionReducer';

export default combineReducers({
    comprehension: comprehensionReducer
});