// react
import React from 'react'
// material
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
// atoms
import Button from '@/scripts/components/atoms/button'
// contexts
import Context from '@/scripts/contexts/context'
// styles
import styles from '@/styles/components/organisms/grading.module.sass'

export default ():React.JSX.Element  => {

    const handleSubmit = (): void => {
    }

    return (
        <div className={styles.container}>
            <Card className={styles.card} variant={'outlined'}>
                <CardContent className={styles.cardContent}>
                    <Typography variant={'h6'} color={'primary'} sx={{ fontWeight: 'bold' }}>GRADE ANSWERS</Typography>
                    <div className={styles.buttonWrapper}>
                        <Button handleSubmit={handleSubmit}>
                            GRADING
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}