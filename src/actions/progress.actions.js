import { api } from '../api/api';
import {
  PROGRESS_DETAILS_REQUEST,
  PROGRESS_DETAILS_SUCCESS,
  PROGRESS_DETAILS_FAIL,
  RECORD_GRADE_REQUEST,
  RECORD_GRADE_SUCCESS,
  RECORD_GRADE_FAIL,
  USER_GRADE_REQUEST,
  USER_GRADE_SUCCESS,
  USER_GRADE_FAIL,
} from '../constants/progress-constants';
import { logout } from './auth-actions';

export const GetTestScore = (id) => async (dispatch) => {
  try {
    dispatch({ type: PROGRESS_DETAILS_REQUEST });

    // const {
    //   userLogin: { userInfo },
    // } = getState();

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

    const { data } = await api.post(`/api/v1/progress/${id}`, score, config);

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

    const { data } = await api.get(`/api/v1/users`, config);

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
