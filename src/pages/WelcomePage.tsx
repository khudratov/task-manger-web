import { Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
	const navigate = useNavigate();

	return (
		<Box
			display="flex"
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			height="100vh"
			bgcolor="#f5f5f5"
		>
			<Typography variant="h4" gutterBottom>
				Welcome to Our Application
			</Typography>
			<Typography variant="subtitle1" color="textSecondary" gutterBottom>
				Please sign up or sign in to continue
			</Typography>
			<Box mt={4}>
				<Button
					variant="contained"
					color="primary"
					onClick={() => navigate('/sign-up')}
					sx={{ marginRight: 2 }}
				>
					Sign Up
				</Button>
				<Button
					variant="outlined"
					color="primary"
					onClick={() => navigate('/sign-in')}
				>
					Sign In
				</Button>
			</Box>
		</Box>
	);
};

export default WelcomePage;
