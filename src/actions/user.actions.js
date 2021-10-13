import { api } from '../api/api';
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
	USER_GRADE_REQUEST,
	USER_GRADE_SUCCESS,
	USER_GRADE_FAIL,
} from '../constants/user-contants';
import { logout } from './auth.actions';

export const ChangeLevel = (level) => async (dispatch) => {
	try {
		dispatch({ type: CHANGE_USER_LEVEL_REQUEST });

		let user = JSON.parse(localStorage.getItem('userInfo'));

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${user.token}`,
			},
		};

		const { data } = await api.put(`/api/v1/users`, level, config);
		dispatch({ type: CHANGE_USER_LEVEL_SUCCESS, payload: data });

		let userObj = { ...user, level: data.data.level };
		localStorage.setItem('userInfo', JSON.stringify(userObj));
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;
		if (
			message === 'Unauthorized access: Token  expired' ||
			message === 'Unauthorized access: Token not found'
		) {
			dispatch(logout());
		}
		dispatch({
			type: CHANGE_USER_LEVEL_FAIL,
			payload: message,
		});
	}
};

export const MakeMeATutor = (tutor) => async (dispatch) => {
	try {
		dispatch({ type: MAKE_ME_A_TUROR_REQUEST });

		let user = JSON.parse(localStorage.getItem('userInfo'));

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${user.token}`,
			},
		};

		const { data } = await api.put(
			`/api/v1/users/make-me-a-tutor`,
			tutor,
			config,
		);

		dispatch({ type: MAKE_ME_A_TUROR_SUCCESS, payload: data });

		let userObj = { ...user, role: data.data.role };
		localStorage.setItem('userInfo', JSON.stringify(userObj));
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;
		if (
			message === 'Unauthorized access: Token  expired' ||
			message === 'Unauthorized access: Token not found'
		) {
			dispatch(logout());
		}
		dispatch({
			type: MAKE_ME_A_TUROR_FAIL,
			payload: message,
		});
	}
};

export const GetTestScore = (id) => async (dispatch) => {
	try {
		dispatch({ type: PROGRESS_DETAILS_REQUEST });

		const user = JSON.parse(localStorage.getItem('userInfo'));

		const config = { headers: { Authorization: `Bearer ${user.token}` } };

		const { data } = await api.get(`/api/v1/progress/${id}`, config);

		dispatch({ type: PROGRESS_DETAILS_SUCCESS, payload: data });
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;
		if (
			message === 'Unauthorized access: Token  expired' ||
			message === 'Unauthorized access: Token not found'
		) {
			dispatch(logout());
		}
		dispatch({
			type: PROGRESS_DETAILS_FAIL,
			payload: message,
		});
	}
};

export const recordGrade = (id, score) => async (dispatch) => {
	try {
		dispatch({ type: RECORD_GRADE_REQUEST });

		const user = JSON.parse(localStorage.getItem('userInfo'));

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${user.token}`,
			},
		};

		const { data } = await api.post(`/api/v1/users/grade/${id}`, score, config);

		dispatch({ type: RECORD_GRADE_SUCCESS, payload: data });
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;
		if (
			message === 'Unauthorized access: Token  expired' ||
			message === 'Unauthorized access: Token not found'
		) {
			dispatch(logout());
		}
		dispatch({
			type: RECORD_GRADE_FAIL,
			payload: message,
		});
	}
};

export const listGrade = async (dispatch) => {
	try {
		dispatch({ type: USER_GRADE_REQUEST });

		const user = JSON.parse(localStorage.getItem('userInfo'));

		const config = { headers: { Authorization: `Bearer ${user.token}` } };

		const { data } = await api.get(`/api/v1/users/grade`, config);

		dispatch({ type: USER_GRADE_SUCCESS, payload: data });
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;
		if (
			message === 'Unauthorized access: Token  expired' ||
			message === 'Unauthorized access: Token not found'
		) {
			dispatch(logout());
		}
		dispatch({
			type: USER_GRADE_FAIL,
			payload: message,
		});
	}
};
