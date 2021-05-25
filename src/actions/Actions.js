// filler file to help Github confirm file structure
import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const EDIT_CLASS = 'EDIT_CLASS';
export const DELETE_CLASS = "DELETE_CLASS";
export const ADD_CLASS = "ADD_CLASS";

export const fetchClasses = () => {
    return (dispatch => {
        dispatch({type: FETCH_START});
    
        dispatch(fetchStart());
        axios.get('https://anywhere-fitness-2021.herokuapp.com/api/classes')
          .then(res=> {
            console.log(res.data);
            dispatch({type: FETCH_SUCCESS, payload:res.data});
          })
          .catch(err=>{
            dispatch({type: FETCH_FAIL, payload:err});
          })
    });
  }

  export const fetchStart = ()=> {
    return({type: FETCH_START});
  }

  export const editClass = (editedClass) => {
    return { type: EDIT_CLASS, payload: editedClass };
  };
  
  export const addClass = c => {
    return ({type: ADD_CLASS, payload:c})
  }
  
  export const deleteClass = (id) => {
    return({type:DELETE_CLASS, payload: id})
  }