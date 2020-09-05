import * as TYPE from './actionTypes'

const defaultState = {
	inputValue: 'write something',
	// list: [
	// 	'早上4点起床，锻炼身体',
	// 	'中午下班游泳一小时'
	// ]
	list: []
}

/**
 * Reducer 必须是纯函数：如果函数的调用参数相同，则永远返回相同的结果。它不依赖于程序执行期间函数外部任何状态或数据的变化，必须只依赖于其输入参数。
 * 记住：Reducer里只能接收state，不能改变state。
 * 在 Reducer 中调用异步 ajax 函数，获取到后端接口数据后，再返回，这是不允许的。（new Date() / Math.random() 都是不允许的）
 */
export default (state = defaultState, action) => {
	// state 是整个项目中需要管理的数据信息
	/**
	 * state: 指的是原始仓库里的状态。
		 action: 指的是action新传递的状态。
	 */
	// console.log(state, action)
	if (action.type === TYPE.CHANGE_INPUT) {
		let newState = JSON.parse(JSON.stringify(state))
		newState.inputValue = action.value
		return newState
	}
	if (action.type === TYPE.ADD_ITEM) {
		let newState = JSON.parse(JSON.stringify(state))
		newState.list.push(newState.inputValue)
		newState.inputValue = ''
		return newState
	}
	if (action.type === TYPE.DELETE_ITEM) {
		let newState = JSON.parse(JSON.stringify(state))
		newState.list.splice(action.index, 1)
		return newState
	}
	// 后台获取数据
	if (action.type === TYPE.GET_LIST) {
		let newState = JSON.parse(JSON.stringify(state))
		newState.list = action.data.data.list
		return newState
	}
	return state
}
