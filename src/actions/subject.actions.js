import { api } from '../api/api';
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

import { logout } from './auth.actions';

/**
 * @ list product details, requires param
 * @param keyword for serch query,
 * @param pageNumber for pagination
 */
export const listSubjects = async (dispatch) => {
	try {
		dispatch({ type: SUBJECT_LIST_REQUEST });

		const { data } = await api.get('/api/v1/subjects');

		dispatch({ type: SUBJECT_LIST_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: SUBJECT_LIST_FAIL,
			payload: error.response && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};

export const subjectRelated = async (dispatch) => {
	try {
		dispatch({ type: SUBJECT_LIST_REQUEST });

		const user = JSON.parse(localStorage.getItem('userInfo'));

		const config = { headers: { Authorization: `Bearer ${user.token}` } };

		const { data } = await api.get('/api/v1/subjects/level', config);

		dispatch({ type: SUBJECT_LIST_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: SUBJECT_LIST_FAIL,
			payload: error.response && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};

export const ListTutorsubjects = async (dispatch) => {
	try {
		dispatch({ type: LIST_TUTOR_SUBJECT_REQUEST });

		const user = JSON.parse(localStorage.getItem('userInfo'));

		const config = { headers: { Authorization: `Bearer ${user.token}` } };

		const { data } = await api.get('/api/v1/subjects/tutor', config);

		dispatch({ type: LIST_TUTOR_SUBJECT_SUCCESS, payload: data });
	} catch (error) {
		const message = error.response && error.response.data.message ? error.response.data.message : error.message;
		if (message === 'Unauthorized access: Token  expired' || message === 'Unauthorized access: Token not found') {
			dispatch(logout());
		}
		dispatch({
			type: LIST_TUTOR_SUBJECT_FAIL,
			payload: message,
		});
	}
};

export const subjectInfo = (slug) => async (dispatch) => {
	try {
		dispatch({ type: SUBJECT_DETAILS_REQUEST });

		const { data } = await api.get(`/api/v1/subjects/${slug}`);

		dispatch({ type: SUBJECT_DETAILS_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: SUBJECT_DETAILS_FAIL,
			payload: error.response && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};
