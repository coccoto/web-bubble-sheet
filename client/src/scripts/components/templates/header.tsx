// react
import React from 'react'
// lib
import fetchRequest from '@/scripts/lib/fetchRequest'
// material
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
// types
import { MenuListType } from '@/types'
// styles
import styles from '@/styles/components/templates/header.module.sass'

export default ():React.JSX.Element  => {

    const [menuList, setMenuList] = React.useState<MenuListType>({
        result: []
    })

    React.useEffect(() => {
        const postRequest = async () => {
            const response = await fetchRequest<MenuListType>('/api/menu-list', { method: 'post' })
            if (response && Array.isArray(response.result)) {
                setMenuList(response)
            } else {
                setMenuList({ result: [] })
            }
        }
        postRequest()
    }, [])

    return (
        <AppBar position={'static'}>
            <Toolbar>
                <Typography variant={'h6'} sx={{ fontWeight: 'bold' }}>
                    Web Bubble Sheet
                </Typography>
                <div className={styles.menu}>
                    {
                        menuList.result.map((value, index) => {
                            return <Button
                                sx={{ color: 'white' }}    
                                key={value['id']}
                                href={value['origin'] + value['path']}
                            >{value['app_name']}</Button>
                        })
                    }
                </div>
            </Toolbar>
        </AppBar>
    )
}