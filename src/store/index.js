
import { createStore, applyMiddleware, compose } from 'redux' // 引入 createStore 方法 / compose 增强函数
import thunk from 'redux-thunk'
import reducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
	? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
	: compose
const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore(
	reducer,
	enhancer
	// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
) // 创建数据存储仓库 / Redux Dev Tools插件(意思就是看window里有没有这个方法，有则执行这个方法)

export default store


/**
 * 仓库虽说已建立好，但是需要一个管理能力的模块来管理仓库，这就是 Reducers
 */

 /**
	* 引入并创建 Redux-saga , 没有测试成功
	*/
/*
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import mySaga from './saga'
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware() // 创建 saga 中间件

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
	? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
	: compose
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

const store = createStore(reducer, enhancer)

sagaMiddleware.run(mySaga)

export default store
*/
