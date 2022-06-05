// react
import React from 'react'
// atoms
import InputCheckbox from '@/scripts/components/atoms/inputCheckbox'
// material
import {
    Checkbox,
} from '@mui/material'
// styles
import styles from '@/styles/components/molecules/lineNum.module.sass'

type Props = {
    index: number
}

export default (props: Props): JSX.Element  => {

    const getLabel = (): string => {
        const index = props.index + 1
        return 'QUESTION ' + String(index)
    }

    return (
        <div>
            <InputCheckbox
                index={0}
                label={getLabel()}
                control={
                    <Checkbox
                        size={'small'}
                        color={'success'}
                    ></Checkbox>
                }
            ></InputCheckbox>
        </div>
    )
}