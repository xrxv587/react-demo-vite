import { Link, Outlet } from "react-router-dom";

const TestPage = () => {
	return <div>
		A test page
		<Link to={'/test/demo/123'}>to Demo</Link>
		<Outlet />
	</div>
}

export default TestPage;