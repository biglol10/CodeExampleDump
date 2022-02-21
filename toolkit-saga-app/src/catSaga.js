// call = allows to call url, apis
// put = allows to call our actions
// takeEvery = able to watch a function or action and trigger our function whenever that action is being called

import { call, put, takeEvery } from 'redux-saga/effects';
import { getCatsSuccess } from './catState';

// generator function
function* workGetCatsFetch() {
  const cats = yield call(() => fetch('https://api.thecatapi.com/v1/breeds'));
  const formattedCats = yield cats.json(); // wait for them to finish
  const formattedCatsShortened = formattedCats.slice(0, 10);
  yield put(getCatsSuccess(formattedCatsShortened));
}

// think of yeild as async await when you are waiting
// cats/getCatsFetch => cats = name of reducer, getCatsFetch = name of the action itself
function* catSaga() {
  yield takeEvery('cats/getCatsFetch', workGetCatsFetch);
}

// getCatsFetch will call workGetCatsFetch function

export default catSaga;
