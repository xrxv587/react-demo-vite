import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Col, Form, FormItemProps, Input, Modal, Row, Space } from "antd";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoItem } from "../apis/types";
import '../assets/style/TodoPanel.less';
import { RootState } from "../store";
import { AddTodo } from '../store/todo/todoSlice';

const TodoPanel = () => {
	const dispatch = useDispatch();
	const [open, setOpen] = useState<boolean>(false);
	const [form] = Form.useForm();

	const title = <div className="todo-title">
		<span>My Todos</span>
		<Button type="link" onClick={() => { setOpen(true); }}>添加</Button>
	</div>

	const footer = <div className="modal-footer">
		<Space size={10} direction="horizontal">
			<Button type="primary" htmlType="submit" size="middle">确定</Button>
			<Button size="middle" onClick={() => { setOpen(false) }}>取消</Button>
		</Space>
	</div>
	const formLabelLayout: FormItemProps = {
		labelCol: { span: 5 },
		wrapperCol: { span: 18, offset: 1 }
	}
	const handleFinish = (values: TodoItem) => {
		console.log(values);
		dispatch(AddTodo(values));
		form.resetFields();
		setOpen(false);
	}
	// 获取todolist
	const todoList = useSelector((state: RootState) => state.todo);
	return <Fragment>
		<Row>
			<Col span={12}>
				<Card
					className="todo-list"
					title={title}>
					<Modal
						forceRender
						open={open}
						getContainer={false}
						title={'添加'}
						footer={null}>
						<Form form={form}
							name="addForm"
							labelAlign="right"
							onFinish={handleFinish}>
							<Form.Item name="item" {...formLabelLayout} label="事项">
								<Input placeholder="输入待办事项" />
							</Form.Item>
							<Form.Item name="isDone" valuePropName="checked" {...formLabelLayout} label="是否完成">
								<Checkbox />
							</Form.Item>
							<Form.Item>
								{footer}
							</Form.Item>
						</Form>
					</Modal>
					{
						todoList.map((item: TodoItem) =>
							<div key={item.item} className="todo-item">
								<span>{item.item}</span>
								<span>
									{
										item.isDone ?
											<Button type="text" danger size="small" icon={<CloseOutlined />} />
											:
											<Button type="text" size="small" icon={<CheckOutlined />} />
									}
								</span>
							</div>
						)
					}
				</Card>
			</Col>
			<Col span={12}>2</Col>
		</Row>
	</Fragment>
};

export default TodoPanel;