import { Fragment, useEffect } from "react";
import { RouteObject, useLocation, useNavigate, useRoutes } from "react-router-dom";
import App from '../pages/App';
import Demo from "../pages/demo";
import First from "../pages/FirstLevel";
import Login from "../pages/login";
import TestPage from "../pages/Test";
import TodoPanel from "../pages/TodoPanel";

const List: Array<RouteObject> = [
	{ path: '/', element: <App/>, children: [
		// 子路由全部使用相对路径，导航组件匹配高亮时会获取到pathname再去掉'/'
		{ path: 'todo', index: true, element: <TodoPanel/> },
		{ path: 'test', element: <TestPage />, children: [
			{ path: 'demo/:id', element: <Demo/> }
		]},
		{ path: 'first', element: <First/> }
	]},
	{ path: '/login', element: <Login/> }
];
const RouterList = () => {
	const routes = useRoutes(List);
	const location = useLocation();
	const navigate = useNavigate();
	useEffect(() => {
		if (location.pathname === '/') {
			navigate('/todo', { replace: true, });
		}
		return () => {
			
		}
	}, [location.pathname]);
	return <Fragment>{ routes }</Fragment>;
}

export default RouterList;
