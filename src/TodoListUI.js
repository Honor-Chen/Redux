// import React, { Component } from 'react'
import React from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

/*
class TodoListUI extends Component {
	render () {
		return (
			<div style={{ margin: '20px 50px' }}>
				<div>
					<Input
						placeholder={ this.props.inputValue }
						style={{ width: '260px' }}
						onChange={ this.props.changeInputVal }
						value={ this.props.inputValue }/>
					<Button type="primary" onClick={ this.props.clickBtn }>增加</Button>
				</div>
				<div style={{ margin: '10px', width: '300px' }}>
					<List
						bordered
						dataSource={ this.props.list }
						renderItem={ (item, index) => (
							<List.Item onClick={ () => this.props.deleteItem(index) }>{ item }</List.Item>
						) }></List>
				</div>
			</div>
		)
	}
}
*/

/**
 * 将 class 组件修改为 无状态组件
 */
const TodoListUI = props => {
	return (
		<div style={{ margin: '20px 50px' }}>
			<div>
				<Input
					placeholder={ props.inputValue }
					style={{ width: '260px' }}
					onChange={ props.changeInputVal }
					value={ props.inputValue }/>
				<Button type="primary" onClick={ props.clickBtn }>增加</Button>
			</div>
			<div style={{ margin: '10px', width: '300px' }}>
				<List
					bordered
					dataSource={ props.list }
					renderItem={ (item, index) => (
						<List.Item onClick={ () => props.deleteItem(index) }>{ item }</List.Item>
					) }></List>
			</div>
		</div>
	)
}

export default TodoListUI