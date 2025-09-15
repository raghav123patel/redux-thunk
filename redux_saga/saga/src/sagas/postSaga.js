import postApi from "../api/postApi";
import { POST_USER, postUserSuccess, postUserFailure } from "../action/postAction";
import { call, put, takeEvery} from "redux-saga/effects"

function* postUser() {
    try{
    const newData = yield call(postApi);
    console.log(newData);
    yield put(postUserSuccess(newData));  
} catch(error){
    
    yield put(postUserFailure(error));          
}
}     





function* postSaga() {
    yield takeEvery(POST_USER, postUser);
}

export default postSaga;  