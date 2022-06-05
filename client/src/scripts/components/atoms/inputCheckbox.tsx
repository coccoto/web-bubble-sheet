// react
import React from 'react'
// utils
import numberToAlphabet from '@/scripts/utils/numberToAlphabet'
// material
import FormControlLabel from '@mui/material/FormControlLabel'

type Props = {
    index: number,
    label: React.ReactNode,
    control: JSX.Element
}

export default (props: Props): JSX.Element  => {

    const getLabel = (): React.ReactNode => {
        return props.label === 'isAlphabet' ? numberToAlphabet(props.index) : props.label
    }

    return (
        <div>
            <FormControlLabel
                control={props.control}
                label={getLabel()}
            ></FormControlLabel>
        </div>
    )
}