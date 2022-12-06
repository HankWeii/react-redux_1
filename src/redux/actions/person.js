import { ADD_PERSON, DELETE_PERSON } from "../constant";

export const createAddPersonAction = personObj=>({type: ADD_PERSON, data: personObj})
export const createDeletePersonAction = personid=>({type: DELETE_PERSON, data: personid})