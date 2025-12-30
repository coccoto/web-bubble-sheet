// react
import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
// material
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
// atoms
import Button from '@/scripts/components/atoms/button'
// utils
import { isGradingMode } from '@/scripts/utils/isGradingMode'
// constants
import { ROUTES } from '@/constants'
// styles
import styles from '@/styles/components/organisms/grading.module.sass'

export default ():React.JSX.Element  => {

    const navigate = useNavigate()
    const location = useLocation()
    const gradingMode = isGradingMode(location.pathname)

    const handleSubmit = (): void => {
        if (gradingMode) {
            navigate(ROUTES.INDEX)
        } else {
            navigate(ROUTES.GRADING)
        }
    }

    return (
        <div className={styles.container}>
            <Card className={styles.card} variant={'outlined'}>
                <CardContent className={styles.cardContent}>
                    <Typography variant={'h6'} color={'primary'} sx={{ fontWeight: 'bold' }}>採点</Typography>
                    <div className={styles.buttonWrapper}>
                        <Button handleSubmit={handleSubmit}>
                            {gradingMode ? '採点を終了' : '採点を開始'}
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}