import { Actions } from 'react-native-router-flux';
import { NOVEL_FECTH_SUCCESS } from './types';

export const novelsFetch = () => {
    return (dispatch) => {
      fetch('https://stark-beach-53351.herokuapp.com/api/novels')
        .then(response => response.json())
        .then((responseJson) => {
            dispatch({ type: NOVEL_FECTH_SUCCESS, payload: responseJson.data });
         });
    };
};

// fetch('https://jsonplaceholder.typicode.com/photos')
