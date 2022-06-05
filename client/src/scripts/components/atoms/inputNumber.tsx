// react
import React from 'react'
// material
import {
    TextField
} from '@mui/material';

type Props = {
    label: string,
    defaultValue: string
}

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLInputElement>): JSX.Element  => {

    return (
        <div>
            <TextField
                type={'number'}
                inputRef={ref}
                defaultValue={props.defaultValue}
                label={props.label}
            ></TextField>
        </div>
    )
})