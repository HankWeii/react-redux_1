import { ADD_PERSON } from "../constant";

const initState = [{id:'01', name:'Hank', age:25}];

export default function personReducer(prevState=initState, action) {
    const {type, data} = action;
    switch(type) {
        case ADD_PERSON :
            return [data, ...prevState];
        default :
            return prevState;
    }
}