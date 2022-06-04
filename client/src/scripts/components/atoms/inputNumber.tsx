// react
import React from 'react'
// material
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';

type Props = {
    label: string,
    defaultValue: string
}

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLInputElement>): JSX.Element  => {

    return (
        <Box>
            <TextField
                type={'number'}
                inputRef={ref}
                defaultValue={props.defaultValue}
                label={props.label}
            ></TextField>
        </Box>
    )
})