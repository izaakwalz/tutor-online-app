import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { toast } from 'material-react-toastify';
import Loader from '../../components/Loader';
import { login, register } from '../../actions/auth.actions';
import useStyles from './styles';
import Input from './Input';
import Meta from '../../components/Meta';

const initialState = {
	name: '',
	email: '',
	password: '',
	confirmPassword: '',
};
/**
 * Auth Page for login and sign-up
 * @returns
 */
const SignUp = () => {
	const [form, setForm] = useState(initialState);
	const [isSignup, setIsSignup] = useState(false);
	const dispatch = useDispatch();
	const history = useNavigate();

	const classes = useStyles();

	const [showPassword, setShowPassword] = useState(false);
	const handleShowPassword = () => setShowPassword(!showPassword);

	const switchMode = () => {
		setForm(initialState);
		setIsSignup((prevIsSignup) => !prevIsSignup);
		setShowPassword(false);
	};

	const userLogin = useSelector((state) => state.userLogin);
	const { loading, error, userInfo } = userLogin;

	const userRegister = useSelector((state) => state.userRegister);
	const { loading: isLoading, error: isError, userInfo: profile } = userRegister;

	useEffect(() => {
		if (userInfo) history(`/app`);
	}, [history, userInfo, profile]);

	// console.log(form);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (isSignup) {
			if (form.password.length < 6) {
				toast.warn('Password is too short');
			} else if (form.password !== form.confirmPassword) {
				toast.warn('Password do not match');
			} else {
				dispatch(register(form.name, form.email, form.password));
			}
		} else {
			dispatch(login(form.email, form.password));
		}
	};

	const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

	return (
		<div>
			<Meta title={isSignup ? 'SIGN-UP' : 'SIGN-IN'} />
			<Container component='main' maxWidth='xs'>
				<Paper className={classes.paper} elevation={6}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						{isSignup ? 'Sign up' : 'Sign in'}
					</Typography>
					{error && toast.error(error)}
					{loading && <Loader />}
					{isError && toast.error(isError)}
					{isLoading && <Loader />}
					<form className={classes.form} autoComplete='off' onSubmit={handleSubmit}>
						<Grid container spacing={2}>
							{isSignup && <Input name='name' label='Full Name' handleChange={handleChange} autoFocus />}
							<Input name='email' label='Email Address' handleChange={handleChange} type='email' />
							<Input
								name='password'
								label='Password'
								handleChange={handleChange}
								type={showPassword ? 'text' : 'password'}
								handleShowPassword={handleShowPassword}
							/>
							{isSignup && (
								<Input
									name='confirmPassword'
									label='Repeat Password'
									handleChange={handleChange}
									type='password'
								/>
							)}
						</Grid>
						<Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
							{isSignup ? 'Sign Up' : 'Sign In'}
						</Button>

						<Grid container justify='flex-end'>
							<Grid item>
								<Button type='submit' onClick={switchMode}>
									{isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
								</Button>
							</Grid>
						</Grid>
					</form>
				</Paper>
			</Container>
		</div>
	);
};

export default SignUp;
