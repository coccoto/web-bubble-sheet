// react
import React from 'react'
// material
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

type Props = {
    children: string,
    handleSubmit: () => void,
}

export default (props: Props): JSX.Element  => {

    return (
        <Box>
            <Button onClick={
                (): void => {
                    props.handleSubmit()
                }
            }
            variant="contained"
            >{props.children}</Button>
        </Box>
    )
}