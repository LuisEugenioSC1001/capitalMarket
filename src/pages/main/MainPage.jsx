import React from 'react'
import NavigatioBar from '../../shared/components/NavigatioBar';
import UserCard from '../../shared/components/UserCard';
import { Box, Grid, CssBaseline } from '@mui/material/'


export default function MainPage() {

    return (
        <>
            <NavigatioBar />
            <CssBaseline/>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} md={6}>
                        <UserCard />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
