// react
import React from 'react'
// atoms
import InputCheckbox from '@/scripts/components/atoms/inputCheckbox'
// material
import {
    TextField,
} from '@mui/material'

export default (): JSX.Element  => {

    return (
        <div>
            <div>
                <TextField
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
