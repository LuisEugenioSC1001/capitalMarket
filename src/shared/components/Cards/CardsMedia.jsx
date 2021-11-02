import * as React from 'react'
import Grid from '@mui/material/Grid';
import ViewsProducUser from '../Views/ViewsProducUser';


function CardsMedia () {
    return (
    <Grid container> 
        <Grid item xs = {12} sm = {6} md ={4}>
            <ViewsProducUser/>
        </Grid> 
        <Grid item xs = {12} sm = {6} md ={4}>
            <ViewsProducUser/>
        </Grid> 
        <Grid item xs = {12} sm = {6} md ={4}>
            <ViewsProducUser/>
        </Grid> 
        <Grid item xs = {12} sm = {6} md ={4}>
            <ViewsProducUser/>
        </Grid> 
        <Grid item xs = {12} sm = {6} md ={4}>
            <ViewsProducUser/>
        </Grid> 
        <Grid item xs = {12} sm = {6} md ={4}>
            <ViewsProducUser/>
        </Grid> 
    </Grid> 
    );
}

export default CardsMedia;