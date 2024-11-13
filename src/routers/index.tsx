import { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import WelcomePage from '../pages/WelcomePage.tsx';
import SignUpPage from '../pages/SignUpPage';
import SignInPage from '../pages/SignInPage';

export const MainRouter: FC = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<WelcomePage />} />
				<Route path="/sign-up" element={<SignUpPage />} />
				<Route path="/sign-in" element={<SignInPage />} />
			</Routes>
		</Router>
	);
};
