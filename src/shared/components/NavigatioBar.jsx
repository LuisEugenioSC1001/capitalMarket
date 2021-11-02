import React, { useState } from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import { ShoppingCart, Settings, Logout, AccountCircle, Search, Menu as MenuIcon } from '@mui/icons-material/';
import { Menu, MenuItem, Divider, Grid, Tooltip, Avatar, IconButton, Box, AppBar } from '@mui/material/';
import Logo from '../../shared/img/Logo2.png'

export default function NavigatioBar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box>
            <AppBar position="static">
                <Grid container p={0.5} sx={{ justifyContent: 'space-between' }}>
                    <Grid item container xs={4} justifyContent="start">
                        <IconButton >
                            <MenuIcon fontSize='large' color='White' />
                        </IconButton>
                        <IconButton >
                            <Search fontSize='large' color='White' />
                        </IconButton>
                    </Grid>
                    <Grid item container justifyContent="center" xs={4} >
                        <Avatar alt="Logo" src={Logo} sx={{ width: 56, height: 56, alignSelf: 'center' }} />
                    </Grid>
                    <Grid item container xs={4} justifyContent="end">
                        <IconButton >
                            <ShoppingCart fontSize='large' color='White' />
                        </IconButton>
                        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                            <Tooltip title="Account settings">
                                <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                                    <AccountCircle color='White' sx={{ width: 32, height: 32 }} />
                                </IconButton>
                            </Tooltip>
                        </Box>
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&:before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <MenuItem>
                                <Avatar /> Profile
                            </MenuItem>
                            <MenuItem>
                                <Avatar /> My account
                            </MenuItem>
                            <Divider />
                            <MenuItem>
                                <ListItemIcon>
                                    <Settings fontSize="small" />
                                </ListItemIcon>
                                Settings
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </Menu>
                    </Grid>
                </Grid>

            </AppBar>
        </Box>
    );
}