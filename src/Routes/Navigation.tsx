import { Suspense } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	NavLink,
	Navigate
} from "react-router-dom";

import logo from '../logo.svg';
import { routes } from './routes';

export const Navigation = () => {

	return (
		<Suspense fallback={null}>
			<Router>
				<div className="main-layout">
					<nav>
						<img src={logo} alt="react logo" />
						<ul>
							{
								routes.map(({ name, path }) => (
									<li
										key={name}
									>
										<NavLink
											to={path}
											className={({ isActive }) =>
												isActive ? 'nav-active' : ''
											}
										>{name}</NavLink>
									</li>
								))
							}
						</ul>
					</nav>
					<Routes>
						{
							routes.map(({ component: Component, path }) => (
								<Route
									key={path}
									path={path}
									element={<Component />}
								/>
							))
						}

						<Route
							path='*'
							element={
								<Navigate
									to={routes[0].path}
									replace={true}
								/>
							}
						/>
					</Routes>
				</div>
			</Router>
		</Suspense>
	)
}