// react
import React from 'react'
// hooks
import useElementDuplication from '@/scripts/hooks/useElementDuplication'
// utils
import FetchApi from '@/scripts/utils/fetchApi'
// material
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
// styles
import styles from '@/styles/components/templates/header.module.sass'

export default (): JSX.Element  => {

    const [menu, setMenu] = React.useState({
        result: [{name: '', url: ''}]
    })

    React.useEffect(() => {
        const fetchApi = async () => {
            const data = await FetchApi('/api/getMstMenu')
            await setMenu(data)
        }
        fetchApi()
    }, [])

    const elementDuplication = useElementDuplication()

    return (
        <AppBar position={'static'}>
            <Toolbar>
                <Typography variant={'h6'}>
                    Web Bubble Sheet
                </Typography>
                <div className={styles['menu']}>
                    {
                        elementDuplication.duplicateMenu(
                            <Button sx={{ color: 'white' }}></Button>,
                            menu
                        )
                    }
                </div>
            </Toolbar>
        </AppBar>
    )
}