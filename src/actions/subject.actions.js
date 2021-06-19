import { api } from '../api/api';
import {
  SUBJECT_LIST_REQUEST,
  SUBJECT_LIST_SUCCESS,
  SUBJECT_LIST_FAIL,
  SUBJECT_DETAILS_REQUEST,
  SUBJECT_DETAILS_SUCCESS,
  SUBJECT_DETAILS_FAIL,
} from '../constants/subject-constants';
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
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
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
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
