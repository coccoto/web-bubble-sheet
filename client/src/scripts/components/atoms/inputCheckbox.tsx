// react
import React from 'react'
// utils
import numberToAlphabet from '@/scripts/utils/numberToAlphabet'
// material
import {
    FormControlLabel,
    Checkbox,
} from '@mui/material'

type Props = {
    index: number,
    label: React.ReactNode
}

export default (props: Props): JSX.Element  => {

    const getLabel = (): React.ReactNode => {
        return props.label === 'isAlphabet' ? numberToAlphabet(props.index) : props.label
    }

    return (
        <div>
            <FormControlLabel
                control={<Checkbox size={'small'}></Checkbox>}
            label={getLabel()}></FormControlLabel>
        </div>
    )
}