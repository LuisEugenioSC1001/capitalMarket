import React from 'react'
import NavigatioBar from '../../shared/components/NavigatioBar';
import { Box, CssBaseline } from '@mui/material/'
import GridUserCard from './components/GridUserCard';
import GridSellerCard from './components/GridSellerCard';
import GridAdminCard from './components/GridAdmin';

export default function MainPage() {
    
    
    const role = sessionStorage.getItem('User') === null ? JSON.parse(localStorage.getItem('User')).role : JSON.parse(sessionStorage.getItem('User')).role;
    const SwitchGrid = () => {
        switch (role) {
            case "User":   
                return <GridUserCard/>
            case "Admin":
                return <GridAdminCard />
            case "Seller":
                return <GridSellerCard />
        }
    }
    return (
        <>
            <NavigatioBar />
            <CssBaseline />
            <Box sx={{ width: '100%' }}>
                {SwitchGrid()}
            </Box>
        </>
    )
}
