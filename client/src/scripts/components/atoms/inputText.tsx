// react
import React from 'react'

type Props = {
    label: string
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
            ></input>
        </div>
    )
})