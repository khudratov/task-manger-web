import { Box, Typography } from '@mui/material';
import SignInForm from './components/SignInForm';

const SignInPage = () => {
	return (
		<Box
			display="flex"
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			height="100vh"
			bgcolor="#f5f5f5"
			padding={4}
		>
			<Typography variant="h4" gutterBottom>
				Sign In
			</Typography>
			<SignInForm />
		</Box>
	);
};

export default SignInPage;
