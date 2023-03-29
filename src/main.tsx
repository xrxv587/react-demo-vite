import ReactDOM from 'react-dom/client';
import 'antd/dist/reset.css';
import { BrowserRouter } from 'react-router-dom';
import RouterList from './routers';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	// <React.StrictMode>
	<Provider store={store}>
		<BrowserRouter>
			<RouterList />
		</BrowserRouter>
	</Provider>
	// </React.StrictMode>,
)
