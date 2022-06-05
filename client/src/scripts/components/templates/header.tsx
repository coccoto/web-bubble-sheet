// react
import React from 'react'
// material
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
} from '@mui/material'
import {
    Menu
} from '@mui/icons-material'

export default (): JSX.Element  => {

    const headerTitle: React.ReactNode = 'Web Bubble Sheet'

    return (
        <AppBar position={'static'}>
            <Toolbar>
                <IconButton
                    edge={'start'}
                    color={'inherit'}
                sx={{mr: '1rem'}}>
                    <Menu></Menu>
                </IconButton>
                <Typography variant={'h6'}>
                    {headerTitle}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}