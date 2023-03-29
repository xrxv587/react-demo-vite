import { PoweroffOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import '../assets/style/App.less';
import SideNav from "./components/nav";
const { Sider, Header, Content, Footer } = Layout;

const App = () => {
	const [contentHeight, setContentHeight] = useState<number>(0);
	const siderBarWidth = useRef(0);
	useEffect(() => {
		const { clientHeight } = document.documentElement;
		const headerHeight = 64;
		setContentHeight(clientHeight - headerHeight);
		siderBarWidth.current = (document.querySelector('.sider') as HTMLElement).clientWidth;
		window.onresize = () => {
			const { clientHeight } = document.documentElement;
			setContentHeight(clientHeight - headerHeight);
		}
		return () => {
			window.onresize = null;
		}
	}, []);
	return (
		<Layout className="app-container">
			<Header className="app-header">
				<div className="title" style={{width: siderBarWidth.current + 'px'}}>My Todos</div>
				<div className="header-nav" style={{width: `calc(100% - ${siderBarWidth.current}px)`}}>
					<PoweroffOutlined className="logout"/>
				</div>
			</Header>
			<Layout>
				<Layout style={{ minHeight: `${contentHeight}px` }}>
					<Sider className="sider">
						<SideNav className="todo-nav" />
					</Sider>
					<Content className="app-panel">
						<Outlet />
					</Content>
				</Layout>
			</Layout>
		</Layout>
	)
}

export default App;