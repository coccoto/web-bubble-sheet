// react
import React from 'react'
// utils
import numberToAlphabet from '@/scripts/utils/numberToAlphabet'
// material
import Box from '@mui/material/Box'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

type Props = {
    index: number,
    label: React.ReactNode
}

export default (props: Props): JSX.Element  => {

    const getLabel = (): React.ReactNode => {
        return props.label === 'isAlphabet' ? numberToAlphabet(props.index) : props.label
    }

    return (
        <Box>
            <FormControlLabel control={<Checkbox></Checkbox>} label={getLabel()}></FormControlLabel>
        </Box>
    )
}