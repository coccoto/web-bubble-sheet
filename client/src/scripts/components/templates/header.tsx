// react
import React from 'react'
// hooks
import useElementDuplication from '@/scripts/hooks/useElementDuplication'
// utils
import fetchApi from '@/scripts/utils/fetchApi'
// material
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
// styles
import styles from '@/styles/components/templates/header.module.sass'

export default (): JSX.Element  => {

    const [menuList, setMenuList] = React.useState<MenuListType>({
        result: []
    })

    React.useEffect(() => {
        const postRequest = async () => {
            const response = await fetchApi<MenuListType>('/api/fetch/menu-list', { method: 'post' })
            await setMenuList(response)
        }
        postRequest()
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
                            menuList
                        )
                    }
                </div>
            </Toolbar>
        </AppBar>
    )
}