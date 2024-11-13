import { useState } from 'react';
import { TextField, Button, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignInForm = () => {
	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword(prev => !prev);
	};

	const validationSchema = Yup.object({
		email: Yup.string()
			.email('Enter a valid email')
			.required('Email is required'),
		password: Yup.string()
			.min(8, 'Password should be at least 8 characters')
			.required('Password is required'),
	});

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: validationSchema,
		onSubmit: values => {
			console.log(values);
		},
	});

	return (
		<form
			onSubmit={formik.handleSubmit}
			style={{ width: '100%', maxWidth: '400px' }}
		>
			<TextField
				fullWidth
				margin="normal"
				id="email"
				name="email"
				label="Email"
				value={formik.values.email}
				onChange={formik.handleChange}
				error={formik.touched.email && Boolean(formik.errors.email)}
				helperText={formik.touched.email && formik.errors.email}
			/>
			<TextField
				fullWidth
				margin="normal"
				id="password"
				name="password"
				label="Password"
				type={showPassword ? 'text' : 'password'}
				value={formik.values.password}
				onChange={formik.handleChange}
				error={formik.touched.password && Boolean(formik.errors.password)}
				helperText={formik.touched.password && formik.errors.password}
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<IconButton onClick={togglePasswordVisibility} edge="end">
								{showPassword ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					),
				}}
			/>
			<Button
				color="primary"
				variant="contained"
				fullWidth
				type="submit"
				sx={{ mt: 2 }}
			>
				Sign In
			</Button>
		</form>
	);
};

export default SignInForm;
