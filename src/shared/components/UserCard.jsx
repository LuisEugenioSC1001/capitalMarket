import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import {grey} from '@mui/material/colors';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';


export default function UserCard() {
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: grey[500] }} aria-label="recipe">
                        M
                    </Avatar>
                }
                action={
                    <>
                        <IconButton>
                            <EditRoundedIcon />
                        </IconButton>
                        <IconButton>
                            < DeleteRoundedIcon color='Red'  />
                        </IconButton></>

                }
                title="NOMBRE DEL USUARIO"

            />

        </Card>
    );
}