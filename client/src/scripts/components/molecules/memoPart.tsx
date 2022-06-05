// react
import React from 'react'
// atoms
import InputCheckbox from '@/scripts/components/atoms/inputCheckbox'
// material
import {
    TextField,
} from '@mui/material'
// styles
import styles from '@/styles/components/molecules/memoPart.module.sass'

export default (): JSX.Element  => {

    return (
        <div className={styles['container']}>
            <div>
                <TextField
                    size={'small'}
                    type={'text'}
                    label={'MEMO'}
                ></TextField>
            </div>
            <div>
                <InputCheckbox
                    index={0}
                    label={'CORRECT'}
                ></InputCheckbox>
            </div>
        </div>
    )
}
