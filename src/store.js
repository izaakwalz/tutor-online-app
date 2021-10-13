import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
	subjectDetailsReducer,
	subjectListReducer,
	tutorSubjectsReducer,
} from './reducer/subject.reducers';
import { userLoginReducer, userRegisterReducer } from './reducer/auth.reducers';
import {
	listProgressReducer,
	progressDetailsReducer,
	recordGradeReducer,
	becomeATutor,
	upGradeLevel,
} from './reducer/users.reducer';

const reducer = combineReducers({
	subjectList: subjectListReducer,
	subjectDetails: subjectDetailsReducer,
	userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
	scoreDetails: progressDetailsReducer,
	recordScore: recordGradeReducer,
	userGrade: listProgressReducer,
	requestTutor: becomeATutor,
	changeLevel: upGradeLevel,
	topic: tutorSubjectsReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
