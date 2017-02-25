import { Actions } from 'react-native-router-flux';
import { NOVEL_FECTH_SUCCESS } from './types';

export const novelsFetch = () => {
    return (dispatch) => {
      fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then((responseJson) => {
            dispatch({ type: NOVEL_FECTH_SUCCESS, payload: responseJson });
         });
    };
};
