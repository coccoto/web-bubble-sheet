// react
import React from 'react'
// utils
import numberToAlphabet from '@/scripts/utils/numberToAlphabet'

type Props = {
    index: number,
    label: React.ReactNode
}

export default (props: Props): JSX.Element  => {

    return (
        <div>
            <input type='checkbox'></input>
            <label>
                {
                    props.label === '' ? numberToAlphabet(props.index) : props.label
                }
            </label>
        </div>
    )
}