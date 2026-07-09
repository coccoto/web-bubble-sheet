// react
import React from 'react'
// utils
import numberToLabel from '@/scripts/utils/numberToLabel'
// material
import FormControlLabel from '@mui/material/FormControlLabel'
// types
import { ChoiceType } from '@/types'
// styles
import styles from '@/styles/components/atoms/inputControl.module.sass'

type Props = {
    index: number,
    label: string | ChoiceType,
    control:React.JSX.Element
}

const isChoiceType = (label: string | ChoiceType): label is ChoiceType => {
    return label === ChoiceType.ALPHABET || label === ChoiceType.NUMBER || label === ChoiceType.KATAKANA
}

export default (props: Props): React.JSX.Element  => {

    const selectLabel = (): string => {
        return isChoiceType(props.label) ? numberToLabel(props.index, props.label) : props.label
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