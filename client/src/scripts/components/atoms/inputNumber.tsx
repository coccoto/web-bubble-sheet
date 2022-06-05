// react
import React from 'react'
// material
import TextField from '@mui/material/TextField'
// styles
import styles from '@/styles/components/atoms/inputNumber.module.sass'

type Props = {
    label: string,
    defaultValue: string
}

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLInputElement>): JSX.Element  => {

    return (
        <div>
            <TextField
                type={'number'}
                size={'small'}
                inputRef={ref}
                defaultValue={props.defaultValue}
                label={props.label}
            ></TextField>
        </div>
    )
})