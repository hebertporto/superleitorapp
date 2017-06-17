import { Actions } from 'react-native-router-flux';
import {
  NOVEL_FECTH_SUCCESS,
  NOVEL_FECTH_CHAPTERS_SUCCESS,
  CHAPTER_FECTH_SUCCESS,
  TOGGLE_SUCCESS
 } from './types';

export const novelsFetch = () => {
    return (dispatch) => {
      fetch('https://stark-beach-53351.herokuapp.com/api/novels')
        .then(response => response.json())
        .then((responseJson) => {
            dispatch({ type: TOGGLE_SUCCESS, payload: false });
            dispatch({ type: NOVEL_FECTH_SUCCESS, payload: responseJson.data });
         });
    };
};

export const novelsChaptersFetch = ({ id }) => {
    return (dispatch) => {
      fetch(`https://stark-beach-53351.herokuapp.com/api/chaptertitles/${id}`)
        .then(response => response.json())
        .then((responseJson) => {
            dispatch({ type: NOVEL_FECTH_CHAPTERS_SUCCESS, payload: responseJson.data });
         });
    };
};

export const chapterFetch = ({ id }) => {
    return (dispatch) => {
      fetch(`https://stark-beach-53351.herokuapp.com/api/chapter/${id}`)
        .then(response => response.json())
        .then((responseJson) => {
            dispatch({ type: CHAPTER_FECTH_SUCCESS, payload: responseJson.data[0] });
         })
         .catch(error => console.log('error chapterFecth', error));
    };
};
