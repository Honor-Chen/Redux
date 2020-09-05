import { takeEvery, put } from 'redux-saga/effects'
import * as TYPE from './actionTypes'
import axios from 'axios'
import { getMyListAction } from './actionCreators'

// generator 函数
function* mySaga () {
	// 等待捕获 action
	yield takeEvery(TYPE.GET_MY_LIST, getList)
}

function* getList () {
	// console.log('honor-chen')
	const res = yield axios.get('https://www.easy-mock.com/mock/5f52562222b6925fcfc5dbdc/redux/getList')
	const action = getMyListAction(res.data)
	// console.log('action--------->', action)
	yield put(action)
}

export default mySaga