// react
import React from 'react'
// material
import Button from '@mui/material/Button'

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
            >{props.children}</Button>
        </div>
    )
}