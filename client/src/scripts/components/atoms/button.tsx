// react
import React from 'react'

type Props = {
    handleSubmit: () => void
}

export default (props: Props): JSX.Element  => {

    return (
        <div>
            <div onClick={
                (): void => {
                    props.handleSubmit()
                }
            }>button</div>
        </div>
    )
}