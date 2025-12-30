// react
import React from 'react'
import { useNavigate } from 'react-router-dom'
// material
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
// atoms
import Button from '@/scripts/components/atoms/button'
// contexts
import Context from '@/scripts/contexts/context'
// constants
import { ROUTES } from '@/constants'
// styles
import styles from '@/styles/components/organisms/grading.module.sass'

export default ():React.JSX.Element  => {

    const navigate = useNavigate()

    const handleSubmit = (): void => {
        navigate(ROUTES.GRADING)
    }

    return (
        <div className={styles.container}>
            <Card className={styles.card} variant={'outlined'}>
                <CardContent className={styles.cardContent}>
                    <Typography variant={'h6'} color={'primary'} sx={{ fontWeight: 'bold' }}>CHECK ANSWERS</Typography>
                    <div className={styles.buttonWrapper}>
                        <Button handleSubmit={handleSubmit}>
                            START GRADING
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}