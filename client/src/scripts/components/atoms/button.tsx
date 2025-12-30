// react
import React from 'react'
// material
import Button from '@mui/material/Button'
// styles
import styles from '@/styles/components/atoms/button.module.sass'

type Props = {
    children: string,
    handleSubmit: () => void,
}

export default (props: Props): React.JSX.Element  => {

    return (
        <div>
            <Button onClick={
                (): void => {
                    props.handleSubmit()
                }
            }
            variant='contained'
            fullWidth
            >{props.children}</Button>
        </div>
    )
}