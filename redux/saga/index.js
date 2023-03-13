import { takeEvery, put } from 'redux-saga/effects'


async function getPeople() {
    const request = await fetch('https://swapi.dev/api/people/')
    const data = await request.json()
    return data
}

export function* workerSaga() {
    const data = yield getPeople()
    yield put({ type: "SET_PEOPLE", payload: data.results })
}

export function* watchClickSaga() {
    yield takeEvery('FIRST_LOAD', workerSaga);
}

export default function* rootSaga() {
    yield watchClickSaga()
}