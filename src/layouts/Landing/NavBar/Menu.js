import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import useStyles from './styles';
import MenuIcon from '@material-ui/icons/Menu';
import { Assessment as AssessmentIcon } from '@material-ui/icons';
// import { Assessment as AssessmentIcon, PeopleOutline as PeopleIcon } from '@material-ui/icons';

const StyledMenu = withStyles({
	paper: {
		border: '1px solid #d3d4d5',
	},
})((props) => (
	<Menu
		elevation={0}
		getContentAnchorEl={null}
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'center',
		}}
		transformOrigin={{
			vertical: 'top',
			horizontal: 'center',
		}}
		{...props}
	/>
));

const StyledMenuItem = withStyles((theme) => ({
	root: {
		marginBottom: 5,
		'&:focus': {
			backgroundColor: theme.palette.primary.main,
			'& .MuiListItemIcon-root, & .MuiListItemText-primary': {
				color: theme.palette.common.white,
			},
		},
	},
}))((props) => <MenuItem component={Link} {...props} />);

const NavMenu = ({ logoutHandler }) => {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);

	const userInfo = JSON.parse(localStorage.getItem('userInfo'));

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<Button
				aria-controls='customized-menu'
				aria-haspopup='true'
				variant='contained'
				color='primary'
				style={{ marginLeft: '20px' }}
				onClick={handleClick}
			>
				<MenuIcon />
			</Button>
			<StyledMenu
				id='customized-menu'
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<StyledMenuItem to='/app'>
					<ListItemIcon>
						<AssessmentIcon fontSize='small' />
					</ListItemIcon>
					<ListItemText primary='COURSES' />
				</StyledMenuItem>
				{userInfo.role === 'tutor' && (
					<StyledMenuItem to='/instructor'>
						<ListItemIcon>
							<AssessmentIcon fontSize='medium' />
						</ListItemIcon>
						<ListItemText primary='My Courses' />
					</StyledMenuItem>
				)}
				<Button variant='contained' className={classes.logout} color='secondary' onClick={logoutHandler}>
					Logout
				</Button>
			</StyledMenu>
		</div>
	);
};

export default NavMenu;
