import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PetsIcon from '@material-ui/icons/Pets';
import Box from '@material-ui/core/Box'
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';
import Register from 'features/Auth/components/Register';
import { AccountCircle, Close } from '@material-ui/icons'
import Login from 'features/Auth/components/Login';
import { useDispatch, useSelector } from 'react-redux';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { logout } from 'features/Auth/userSlice';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        textDecoration: 'none',
        color: 'white',
    },
    closeButton: {
        position: 'absolute',
        top: theme.spacing(1),
        right: theme.spacing(1),
        color: theme.palette.grey[500],
        zIndex: 999,
    }
}));

const MODE = {
    LOGIN: 'login',
    REGISTER: 'register'
}

export default function ButtonAppBar() {
    const dispatch = useDispatch()
    const loggedInUser = useSelector(state => state.user.current);
    const isLoggedIn = !!loggedInUser.id;
    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState(MODE.LOGIN)
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null)

    }

    const handleUserClick = (e) => {
        setAnchorEl(e.currentTarget)
    }


    const handleLogoutClick = () => {
        const action = logout()
        dispatch(action)
        handleCloseMenu()
    }

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <PetsIcon className={classes.menuButton} />
                    <Typography variant="h6" className={classes.title}>
                        <Link className={classes.link} to='/'>Shiba Shop</Link>
                    </Typography>
                    <NavLink className={classes.link} to='todos'><Button color="inherit">Todo</Button></NavLink>
                    <NavLink className={classes.link} to='albums'><Button color="inherit">Albums</Button></NavLink>

                    {!isLoggedIn && (
                        <Button color="inherit" onClick={handleClickOpen}>Login</Button>
                    )}
                    {isLoggedIn && (
                        <IconButton color="inherit" onClick={handleUserClick}>
                            <AccountCircle></AccountCircle>
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>
            <Menu
                keepMounted
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}

                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                getContentAnchorEl={null}
            >
                <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
                <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
            </Menu>

            <Dialog disableEscapeKeyDown disableBackdropClick open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <IconButton className={classes.closeButton} onClick={handleClose}>
                    <Close />
                </IconButton>

                <DialogContent>

                    {mode === MODE.REGISTER && (
                        <>
                            <Register closeDialog={handleClose} />

                            <Box textAlign='center'>
                                <Button color='primary' onClick={() => setMode(MODE.LOGIN)}>
                                    Already have an account. Login here.
                                </Button>
                            </Box>
                        </>
                    )}
                    {mode === MODE.LOGIN && (
                        <>
                            <Login closeDialog={handleClose} />

                            <Box textAlign='center'>
                                <Button color='primary' onClick={() => setMode(MODE.REGISTER)}>
                                    Don't have an account? Create a new one here!
                                </Button>
                            </Box>
                        </>
                    )}

                </DialogContent>

            </Dialog>
        </div>
    );
}
