import React from 'react'
import Portal from './Portal'
import { IconButton } from '@mui/material'
import { Close } from '@mui/icons-material'
const styles = {
    wrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    window: {
        position: 'relative',
        background: '#fff',
        borderRadius: 5,
        padding: 15,
        boxShadow: '2px 2px 10px rgba(0,0,0,0.3)',
        zIndex: 10,
    },
    closeBtn: {
        margin:'5px',
        position: 'absolute',
        top: 0,
        right: 0
    },
    background:{
        position:'absolute',
        width:'100%',
        height:'100%',
        top:0,
        left:0,
        background:'#000',
        opacity:0.5,
    }
}

export default function Modal(props) {
    const { children, toggle, active } = props
    return (
        <Portal>
            {active && (
                <div style={styles.wrapper}>
                    <div style={styles.window}>
                        <IconButton variant='contained' color='Red' style={styles.closeBtn} onClick={toggle} children={<Close/>}/>
                        <div>{children}</div>
                    </div>
                    <div onClick={toggle} style={styles.background}/>
                </div>
            )}
        </Portal>
    )
}
