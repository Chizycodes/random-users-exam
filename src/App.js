import UsersList from './pages/usersList';
import Home from './pages/home';
import Error404 from './pages/error404';
import Login from './pages/login';
import Nav from './components/Nav';
import ErrorBoundaryTest from './pages/error-boundary';

import { AuthContextProvider } from './context/AuthContext';
import { Route, Routes } from 'react-router-dom';
import PrivateRoutes from './routes/PrivateRoutes';

export default function App() {
	return (
		<div>
			<AuthContextProvider>
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />

					<Route path="login" element={<Login />} />
					<Route path="error-boundary" element={<ErrorBoundaryTest />} />
					<Route
						path="users"
						element={
							<PrivateRoutes>
								<UsersList />
							</PrivateRoutes>
						}
					/>
					<Route path="*" element={<Error404 />} />
				</Routes>
			</AuthContextProvider>
		</div>
	);
}
