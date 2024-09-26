// react
import React from 'react'
// utils
import numberToAlphabet from '@/scripts/utils/numberToAlphabet'
// material
import FormControlLabel from '@mui/material/FormControlLabel'
// styles
import styles from '@/styles/components/atoms/inputControl.module.sass'

type Props = {
    index: number,
    label: string,
    control: JSX.Element
}

export default (props: Props): JSX.Element  => {

    const selectLabel = (): string => {
        return props.label === 'isAlphabet' ? numberToAlphabet(props.index) : props.label
    }

    return (
        <div>
            <FormControlLabel
                control={props.control}
                label={selectLabel()}
                value={selectLabel()}
            ></FormControlLabel>
        </div>
    )
}