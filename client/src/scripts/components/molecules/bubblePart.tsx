// react
import React from 'react'
// atoms
import InputCheckbox from '@/scripts/components/atoms/inputCheckbox'
// hooks
import useElementDuplication from '@/scripts/hooks/useElementDuplication'
// material
import {
    Typography,
} from '@mui/material'
// styles
import styles from '@/styles/components/molecules/bubblePart.module.sass'

type Props = {
    checkboxNum: number,
    index: number
}

export default (props: Props): JSX.Element  => {

    const elementDuplication = useElementDuplication()

    return (
        <div className={styles['container']}>
            <Typography variant={'body1'}>
                NO {props.index + 1}
            </Typography>
            <div className={styles['input']}>
                {
                    elementDuplication.duplicate(
                        <InputCheckbox
                            index={0}
                            label={'isAlphabet'}
                        ></InputCheckbox>
                        , props.checkboxNum
                        , true
                    )
                }
            </div>
        </div>
    )
}
