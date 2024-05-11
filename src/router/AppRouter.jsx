import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../Navbar';
import {
	HomePage,
	DashboardPage,
	LoginPage,
	RegisterPage,

	InfoPage,
	ImgPage,
	ContactoPage,
	
	AjustesPage,
	SubirImgPage,
	PerfilPage,
} from '../pages';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Navbar />}>
					<Route index element={<HomePage />} />
					<Route path='login' element={<LoginPage />} />
					<Route path='register' element={<RegisterPage />} />
					
					<Route path='info' element={<InfoPage />} />
					<Route path='imagenes' element={<ImgPage />} />
					<Route path='contacto' element={<ContactoPage />} />

					<Route
						path='dashboard'
						element={
							<PrivateRoute>
								<DashboardPage />
							</PrivateRoute>
						}
					/>
					<Route
						path='ajustes'
						element={
							<PrivateRoute>
								<AjustesPage />
							</PrivateRoute>
						}
					/>
					<Route
						path='subirImagenes'
						element={
							<PrivateRoute>
								<SubirImgPage />
							</PrivateRoute>
						}
					/>
					<Route
						path='perfil'
						element={
							<PrivateRoute>
								<PerfilPage />
							</PrivateRoute>
						}
					/>
				</Route>
			</Routes>
		</>
	);
};
