// react
import React from 'react'
// material
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Typography from '@mui/material/Typography'

export default (): JSX.Element  => {

    return (
        <Box>
            <AppBar position={'static'}>
                <Toolbar>
                    <IconButton
                        edge={'start'}
                        color={'inherit'}
                        sx={{mr: 2}}
                    >
                        <MenuIcon></MenuIcon>
                    </IconButton>
                    <Typography
                        variant={'h6'}
                    >
                        Web Bubble Sheet
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}