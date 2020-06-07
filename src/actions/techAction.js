import {
  GET_TECHS, 
  ADD_TECH,
  DELETE_TECH,
  TECHS_ERROR,
  SET_LOADING }from '../actions/types';

  export const getTechs = () => async dispatch => {
    try {
      const res = await fetch('techs');
      const data = await res.json();
    
      dispatch({
        type: GET_TECHS,
        payload: data
      })
    }
  
    catch(err) {
      dispatch({
        type: TECHS_ERROR,
        payload: err.response.statusText
      })
    }
  }

  export const addTech = (tech) => async (dispatch) => {
    try {
      const res = await fetch(`/logs`, {
        method: 'POST',
        body: JSON.stringify(tech),
        headers: {
          'content-type': 'application/json'
        }
      });
      const data = res.json();
      dispatch({
        type: ADD_TECH,
        payload: data
      });
    }
    catch (err) {
      dispatch({
        type: TECHS_ERROR,
        payload: err.response.statusText
      })
    }
  }
 
  export const setLoading = () => {
    return {
      type: SET_LOADING
    }
  }

  export const deleteTech = (id) => async (dispatch) => {
    try {
      await fetch(`/logs/${id}`, {
        method: 'DELETE',
      });
      dispatch({
        type: DELETE_TECH,
        payload: id
      })
    }
    catch(err) {
      dispatch({
        type: TECHS_ERROR,
        payload: err.response.statusText
      })
    }
  }
  


  