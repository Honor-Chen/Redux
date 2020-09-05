import * as TYPE from './actionTypes'
import axios from 'axios'

export const changeInputAction = value => ({
	type: TYPE.CHANGE_INPUT,
	value
})

export const addItemAction = () => ({
	type: TYPE.ADD_ITEM
})

export const deleteItemAction = index => ({
	type: TYPE.DELETE_ITEM,
	index
})

export const getListAction = data => ({
	type: TYPE.GET_LIST,
	data
})

export const getTodoList = () => {
	return dispatch => {
		axios.get('https://www.easy-mock.com/mock/5f52562222b6925fcfc5dbdc/redux/getList')
			.then(res => {
				const data = res.data
				const action = getListAction(data)
				dispatch(action)
			})
	}
}

export const getMyListAction = _ => ({
	type: TYPE.GET_MY_LIST
})

