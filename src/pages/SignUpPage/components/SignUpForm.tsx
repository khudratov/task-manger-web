import { useState } from 'react';
import { TextField, Button, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignUpForm = () => {
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
			.matches(/[a-z]/, 'Password must contain at least one lowercase letter')
			.matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
			.matches(/[0-9]/, 'Password must contain at least one number')
			.matches(
				/[!@#$%^&*]/,
				'Password must contain at least one special character',
			)
			.required('Password is required'),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref('password'), undefined], 'Passwords must match')
			.required('Confirm Password is required'),
	});

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			confirmPassword: '',
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
			<TextField
				fullWidth
				margin="normal"
				id="confirmPassword"
				name="confirmPassword"
				label="Confirm Password"
				type={showPassword ? 'text' : 'password'}
				value={formik.values.confirmPassword}
				onChange={formik.handleChange}
				error={
					formik.touched.confirmPassword &&
					Boolean(formik.errors.confirmPassword)
				}
				helperText={
					formik.touched.confirmPassword && formik.errors.confirmPassword
				}
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
				Sign Up
			</Button>
		</form>
	);
};

export default SignUpForm;
