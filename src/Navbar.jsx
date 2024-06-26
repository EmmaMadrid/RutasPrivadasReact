import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
	const { state } = useLocation();
	const navigate = useNavigate();

	console.log(state);

	const onLogout = () => {
		navigate('/login', {
			replace: true,
		});
	};

	return (
		<>
			<header>

				<h1>
					<Link to='/'>
					<img src='https://i.ibb.co/g45q5yH/duff.png' alt='Logo' className='logo-icon' />
					DuffTeam!
					</Link>
				</h1>

				{state?.logged ? (
					<div className='user'>
						<span className='username'>{state?.name}</span>
						<button className='btn-logout' onClick={onLogout}>
							Cerrar sesión
						</button>
					</div>
				) : (
					<nav>
						<Link to='/login'>Iniciar sesión</Link>
						<Link to='/register'>Registrarse</Link>
						<Link to='/info'>Acerca de</Link>
					</nav>
				)}
			</header>

			<Outlet />
		</>
	);
};
