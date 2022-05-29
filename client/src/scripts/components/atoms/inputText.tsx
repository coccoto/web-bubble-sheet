// react
import React from 'react'

type Props = {
    label: string
}

export default (props: Props): JSX.Element  => {

    return (
        <div>
            <label>{props.label}</label>
            <input type='text'></input>
        </div>
    )
}