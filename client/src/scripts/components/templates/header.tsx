// react
import React from 'react'
// material
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/icons-material/Menu'

export default (): JSX.Element  => {

    const headerTitle: React.ReactNode = 'Web Bubble Sheet'

    return (
        <AppBar position={'static'}>
            <Toolbar>
                <IconButton
                    edge={'start'}
                    color={'inherit'}
                    sx={{mr: '1rem'}}
                ><Menu></Menu></IconButton>
                <Typography variant={'h6'}>
                    {headerTitle}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}