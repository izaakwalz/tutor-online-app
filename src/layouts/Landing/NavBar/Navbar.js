import React from 'react';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import NavMenu from './Menu';

import { logout } from '../../../actions/auth.actions';
import { MakeMeATutor } from '../../../actions/user.actions';

import useStyles from './styles';

const Navbar = () => {
	const classes = useStyles();
	const theme = useTheme();

	const dispatch = useDispatch();

	const userInfo = JSON.parse(localStorage.getItem('userInfo'));

	const changeRoleHandler = () => {
		const role = JSON.stringify({ role: 'tutor' });
		dispatch(MakeMeATutor(role));
		toast.success('Success: You are now an instructur');
	};

	const logoutHandler = () => {
		dispatch(logout());
	};

	return (
		<AppBar className={classes.appBar} position='static' color='inherit'>
			<Link to='/' className={classes.brandContainer}>
				<img
					component={Link}
					to='/'
					src={theme.palette.type === 'dark' ? '/images/tutor-o-white.png' : '/images/tutor-o-black.png'}
					alt='logo'
					height='45px'
				/>
			</Link>
			<Toolbar className={classes.toolbar}>
				{userInfo ? (
					<div className={classes.profile}>
						{userInfo.role !== 'tutor' && (
							<Button
								size='small'
								variant='outlined'
								className={classes.logout}
								color='secondary'
								onClick={changeRoleHandler}
							>
								Become a Tutor
							</Button>
						)}
						{userInfo.role === 'tutor' && (
							<Button size='small' variant='outlined' className={classes.logout} color='secondary'>
								INSTRUCTOR
							</Button>
						)}
						<Avatar className={classes.purple} alt={userInfo.name}>
							{userInfo.name.charAt(0)}
						</Avatar>
						<Typography className={classes.userName} color='textPrimary' variant='h5'>
							{userInfo.name.toUpperCase()}
						</Typography>
						{userInfo && <NavMenu logoutHandler={logoutHandler} />}
					</div>
				) : (
					<Button component={Link} to='/auth' variant='contained' color='primary'>
						Sign In
					</Button>
				)}
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
