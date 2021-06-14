import './settings.scss';
import MainLayout from './components/MainLayout/MainLayout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter>
			<MainLayout>
				<Switch>
					<Route exact path='/' component={MainLayout} />
				</Switch>
			</MainLayout>
		</BrowserRouter>
	);
};

export default App;
