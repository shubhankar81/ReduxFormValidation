import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { submitUserDetail,REGISTER_USER, FETCH_MOVIE, receiveMovieData } from "../Action/userActions";
import { fetchMovieData } from '../ApiRequest/app';
function* submitUser(action){
    try{
        const data = yield call(fetchMovieData)
        yield put(receiveMovieData(data))
    }catch(e){
        console.log(e)
    }
}

export default function* sagaExample(){
    yield takeLatest(FETCH_MOVIE, submitUser);
}