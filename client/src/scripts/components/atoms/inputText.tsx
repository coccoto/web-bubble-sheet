// react
import React from 'react'

type Props = {
    label: string,
    defaultValue: string
}

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLInputElement>): JSX.Element  => {

    return (
        <div>
            <label>
                {props.label}
            </label>
            <input
                type='text'
                ref={ref}
                defaultValue={props.defaultValue}
            ></input>
        </div>
    )
})