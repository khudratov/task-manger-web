import { Box, Typography } from '@mui/material';
import SignUpForm from './components/SignUpForm.tsx';

const SignUpPage = () => {
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
				Sign Up
			</Typography>
			<SignUpForm />
		</Box>
	);
};

export default SignUpPage;
