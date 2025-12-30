// react
import React from 'react'
import { useLocation } from 'react-router-dom'
// atoms
import InputControl from '@/scripts/components/atoms/inputControl'
// material
import Checkbox from '@mui/material/Checkbox'
// utils
import { isGradingMode } from '@/scripts/utils/isGradingMode'
// styles
import styles from '@/styles/components/molecules/bubbles.module.sass'

type Props = {
    bubbleNum: number,
}

export default (props: Props): React.JSX.Element  => {
    const location = useLocation()
    const gradingMode = isGradingMode(location.pathname)

    return (
        <div className={styles.container}>
            {
                Array.from({ length: props.bubbleNum }, (_, index) => {
                    return <InputControl
                        key={index}
                        index={index}
                        label={'isAlphabet'}
                        control={<Checkbox size={'medium'} disabled={gradingMode}></Checkbox>}
                    ></InputControl>
                })
            }
        </div>
    )
}
