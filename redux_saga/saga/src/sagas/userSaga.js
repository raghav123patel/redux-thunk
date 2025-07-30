import apiFetching from "../api/fetchApi";
import { USER_FETCH_REQUESTED, fetchUserFailure, fetchUserSuccess } from "../action/userAction";
import { call, put, takeEvery} from "redux-saga/effects"
function* fetchUser(action) {
    try{
    const user = yield call(apiFetching);
    console.log(user);
    yield put(fetchUserSuccess(user));
    } catch(error) {
    yield put(fetchUserFailure(error))
    }
}

function* rootSaga() {
    yield takeEvery(USER_FETCH_REQUESTED, fetchUser);
}

export default rootSaga;  

