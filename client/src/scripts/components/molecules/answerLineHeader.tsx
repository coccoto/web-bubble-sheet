// react
import React from 'react'
// atoms
import InputControl from '@/scripts/components/atoms/inputControl'
// material
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
// styles
import styles from '@/styles/components/molecules/answerLineHeader.module.sass'

type Props = {
    index: number
}

export default (props: Props): JSX.Element  => {

    const getLabel = (): string => {
        const index = props.index + 1
        return 'QUESTION ' + String(index)
    }

    return (
        <div className={styles['container']}>
            <Typography variant={'body1'}>
                {getLabel()}
            </Typography>
            <div className={styles['wrapper']}>
                <InputControl
                    index={0}
                    label={'OK'}
                    control={<Checkbox size={'small'} color={'warning'}></Checkbox>}
                ></InputControl>
                <InputControl
                    index={0}
                    label={'REVIEW LATER'}
                    control={<Checkbox size={'small'} color={'warning'}></Checkbox>}
                ></InputControl>
            </div>
        </div>
    )
}