import React, { useState } from 'react'
import NavigatioBar from '../../shared/components/NavigatioBar';
import UserCard from '../../shared/components/UserCard';
import { Box, Grid, Paper, CssBaseline } from '@mui/material/'
import { styled } from '@mui/material/styles';
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function MainPage() {

    return (
        <>
            <NavigatioBar />
            <CssBaseline/>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <UserCard />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
