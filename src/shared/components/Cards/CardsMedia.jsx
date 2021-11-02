import * as React from 'react'
import { makeStyles } from '@mui/styles';
import Card from "@mui/material/Card"
import { CardActions, CardContent, IconButton, Stack, Typography, CardMedia, CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AddBoxIcon from '@mui/icons-material/AddBox';
import CircleIcon from '@mui/icons-material/Circle';
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