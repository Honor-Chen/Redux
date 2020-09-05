import React, { Component } from 'react'

import store from './store'
// import * as TYPE from './store/actionTypes'
import {
	changeInputAction,
	addItemAction,
	deleteItemAction,
	getTodoList
	// getMyListAction
} from './store/actionCreators'

import TodoListUI from './TodoListUI'

// const data = [
// 	'早8点开晨会，分配今天的开发工作',
// 	'早9点和项目经理作开发需求讨论会',
// 	'晚5:30对今日代码进行review'
// ]

export default class TodoList extends Component {
	constructor (props) {
		super(props)
		/**
		 * 关键代码
		 */
		this.state = store.getState()
		// console.log(store.getState())

		this.changeInputVal = this.changeInputVal.bind(this)

		this.storeChange = this.storeChange.bind(this)
		// 按钮事件
		this.clickBtn = this.clickBtn.bind(this)
		this.deleteItem = this.deleteItem.bind(this)
		
		// 订阅 Redux 的状态
		store.subscribe(this.storeChange)
	}

	// 将 getListAction 移入 actionCreator.js 中
	// componentDidMount () {
	// 	axios.get('https://www.easy-mock.com/mock/5f52562222b6925fcfc5dbdc/redux/getList')
	// 		.then(res => {
	// 			const data = res.data
	// 			const action = getListAction(data)
	// 			store.dispatch(action)
	// 		})
	// }

	/** 使用 redux-saga 注释掉以下代码 */
	componentDidMount () {
		const action = getTodoList()
		store.dispatch(action)
	}

	/**使用 redux-saga */
	// componentDidMount () {
	// 	const action = getMyListAction()
	// 	store.dispatch(action)
	// 	// console.log('------->', action)
	// }

	render() {
		return (
			<TodoListUI
				inputValue={this.state.inputValue}
				list={this.state.list}
				changeInputVal={this.changeInputVal}
				clickBtn={this.clickBtn}
				deleteItem={this.deleteItem}
			/>
		)
	}

	changeInputVal (e) {
		// console.log(e.target.value)
		/**
		 * 创建 Action , 通过 dispatch() 方法传递给 store
		 */
		// const action = {
		// 	type: TYPE.CHANGE_INPUT,
		// 	value: e.target.value
		// }
		const action = changeInputAction(e.target.value)
		store.dispatch(action)
	}

	storeChange () {
		this.setState(store.getState())
	}

	clickBtn () {
		// console.log('Honor-Chen')
		// const action = {
		// 	type: TYPE.ADD_ITEM
		// }
		const action = addItemAction()
		store.dispatch(action)
	}

	deleteItem (index) {
		// const action = {
		// 	type: TYPE.DELETE_ITEM,
		// 	index
		// }
		const action = deleteItemAction(index)
		store.dispatch(action)
	}
}
