// react
import React from 'react'
// material
import {
    Button
} from '@mui/material'

type Props = {
    children: string,
    handleSubmit: () => void,
}

export default (props: Props): JSX.Element  => {

    return (
        <div>
            <Button onClick={
                (): void => {
                    props.handleSubmit()
                }
            }
            variant='contained'
            disableElevation
            >{props.children}</Button>
        </div>
    )
}