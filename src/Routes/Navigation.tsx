import { Suspense } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	NavLink,
	Navigate
} from "react-router-dom";

import logo from '../logo.svg';
import { routes } from "./routes";


export const Navigation = () => {

	return (
		<Suspense
			fallback={
				<div>
					Loading...
				</div>
			}
		>
			<Router>
				<div className="main-layout">
					<nav>
						<img src={logo} alt="react logo" />
						<ul>
							{
								routes.map(({ name, to }) => (
									<li
										key={name}
									>
										<NavLink to={to} className={({ isActive }) =>
											isActive ? 'nav-active' : ''
										} >{name}</NavLink>
									</li>
								))
							}
						</ul>
					</nav>
					<Routes>
						{
							routes.map(({ name, path, Component }) => (
								<Route key={ name } path={path} element={<Component />} />
							))
						}

						<Route path="/*" element={<Navigate to={routes[0].to} replace />} />
					</Routes>
				</div>
			</Router>
		</Suspense>
	)
}