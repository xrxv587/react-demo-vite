import { Button, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { FC } from "react";
import '../assets/style/login.less';
import { LoginType } from "../apis/types";
import { login } from "../apis/login";
import { useNavigate } from "react-router-dom";

const Login: FC = () => {
	const navigate = useNavigate();
	const handleFinish = (loginInfo: LoginType) => {
		console.log('finish values are =>', loginInfo);
		// TODO 登录逻辑
		// login(loginInfo);
		navigate('/');
	}
	return (
		<div className="container">
			<div className="login">
				<h1>TODO List</h1>
				<Form onFinish={handleFinish} className="inputs">
					<Form.Item name='username' rules={[{ required: true, message: '请输入用户名' }]}>
						<Input prefix={<UserOutlined />} placeholder="username" />
					</Form.Item>
					<Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
						<Input.Password prefix={<LockOutlined />} placeholder="password" />
					</Form.Item>
					<Form.Item>
						<Button className="login-btn" htmlType="submit" type="primary">login</Button>
					</Form.Item>
					<p className="opts">
						<a href="#">log up!</a>
						<a href="#">forget?</a>
					</p>
				</Form>
			</div>
		</div>
	)
}

export default Login;