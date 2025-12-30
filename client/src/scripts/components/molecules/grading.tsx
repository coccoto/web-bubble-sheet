// react
import React from 'react'
// material
import Typography from '@mui/material/Typography'
// atoms
import Button from '@/scripts/components/atoms/button'
// contexts
import Context from '@/scripts/contexts/context'
// styles
import styles from '@/styles/components/molecules/grading.module.sass'

export default ():React.JSX.Element  => {

    const handleSubmit = (): void => {
    }

    return (
        <div className={styles.container}>
            <Typography variant={'h6'} color={'primary'} sx={{ fontWeight: 'bold' }}>採点モード</Typography>
            <div className={styles.buttonWrapper}>
                <Button handleSubmit={handleSubmit}>
                    GRADING
                </Button>
            </div>
        </div>
    )
}