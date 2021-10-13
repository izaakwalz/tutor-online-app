import {
	SUBJECT_LIST_REQUEST,
	SUBJECT_LIST_SUCCESS,
	SUBJECT_LIST_FAIL,
	SUBJECT_DETAILS_REQUEST,
	SUBJECT_DETAILS_SUCCESS,
	SUBJECT_DETAILS_FAIL,
	LIST_TUTOR_SUBJECT_REQUEST,
	LIST_TUTOR_SUBJECT_SUCCESS,
	LIST_TUTOR_SUBJECT_FAIL,
} from '../constants/subject-constants';

export const subjectListReducer = (state = { subjects: [] }, action) => {
	switch (action.type) {
		case SUBJECT_LIST_REQUEST:
			return { loading: true, subjects: [] };
		case SUBJECT_LIST_SUCCESS:
			return {
				loading: false,
				subjects: action.payload.data,
			};
		case SUBJECT_LIST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const tutorSubjectsReducer = (state = { courses: [] }, action) => {
	switch (action.type) {
		case LIST_TUTOR_SUBJECT_REQUEST:
			return { loading: true, courses: [] };
		case LIST_TUTOR_SUBJECT_SUCCESS:
			return {
				loading: false,
				courses: action.payload.data,
			};
		case LIST_TUTOR_SUBJECT_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const subjectDetailsReducer = (state = { subject: {} }, action) => {
	switch (action.type) {
		case SUBJECT_DETAILS_REQUEST:
			return { ...state, loading: true };
		case SUBJECT_DETAILS_SUCCESS:
			return { loading: false, subject: action.payload.data };
		case SUBJECT_DETAILS_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
