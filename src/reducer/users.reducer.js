import {
	CHANGE_USER_LEVEL_REQUEST,
	CHANGE_USER_LEVEL_SUCCESS,
	CHANGE_USER_LEVEL_FAIL,
	MAKE_ME_A_TUROR_REQUEST,
	MAKE_ME_A_TUROR_SUCCESS,
	MAKE_ME_A_TUROR_FAIL,
	PROGRESS_DETAILS_REQUEST,
	PROGRESS_DETAILS_SUCCESS,
	PROGRESS_DETAILS_FAIL,
	RECORD_GRADE_REQUEST,
	RECORD_GRADE_SUCCESS,
	RECORD_GRADE_FAIL,
	RECORD_GRADE_RESET,
	USER_GRADE_REQUEST,
	USER_GRADE_SUCCESS,
	USER_GRADE_FAIL,
} from '../constants/user-contants';

export const progressDetailsReducer = (state = { score: {} }, action) => {
	switch (action.type) {
		case PROGRESS_DETAILS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case PROGRESS_DETAILS_SUCCESS:
			return {
				loading: false,
				score: action.payload.data,
			};
		case PROGRESS_DETAILS_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const recordGradeReducer = (state = {}, action) => {
	switch (action.type) {
		case RECORD_GRADE_REQUEST:
			return {
				loading: true,
			};
		case RECORD_GRADE_SUCCESS:
			return {
				loading: false,
				// success: true,
				grade: action.payload.data,
			};
		case RECORD_GRADE_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case RECORD_GRADE_RESET:
			return {};
		default:
			return state;
	}
};

export const becomeATutor = (state = {}, action) => {
	switch (action.type) {
		case MAKE_ME_A_TUROR_REQUEST:
			return {
				loading: true,
			};
		case MAKE_ME_A_TUROR_SUCCESS:
			return {
				loading: false,
				tutor: action.payload.data,
			};
		case MAKE_ME_A_TUROR_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const upGradeLevel = (state = {}, action) => {
	switch (action.type) {
		case CHANGE_USER_LEVEL_REQUEST:
			return {
				loading: true,
			};
		case CHANGE_USER_LEVEL_SUCCESS:
			return {
				loading: false,
				upgrade: action.payload.data,
			};
		case CHANGE_USER_LEVEL_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const listProgressReducer = (state = { grades: [] }, action) => {
	switch (action.type) {
		case USER_GRADE_REQUEST:
			return {
				...state,
				loading: true,
			};
		case USER_GRADE_SUCCESS:
			return {
				loading: false,
				grades: action.payload.data,
			};
		case USER_GRADE_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
