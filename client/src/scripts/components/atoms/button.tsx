// react
import React from 'react'

type Props = {
    handleSubmit: () => void,
    label: string
}

export default (props: Props): JSX.Element  => {

    return (
        <div>
            <div onClick={
                (): void => {
                    props.handleSubmit()
                }
            }>{props.label}</div>
        </div>
    )
}