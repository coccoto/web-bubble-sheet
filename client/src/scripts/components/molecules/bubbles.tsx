// react
import React from 'react'
// atoms
import InputControl from '@/scripts/components/atoms/inputControl'
// material
import Checkbox from '@mui/material/Checkbox'
// contexts
import Context from '@/scripts/contexts/context'
// styles
import styles from '@/styles/components/molecules/bubbles.module.sass'

type Props = {
    bubbleNum: number,
}

export default (props: Props): React.JSX.Element  => {
    const context = React.useContext(Context.Context)

    return (
        <div className={styles.container}>
            {
                Array.from({ length: props.bubbleNum }, (_, index) => {
                    return <InputControl
                        key={index}
                        index={index}
                        label={'isAlphabet'}
                        control={<Checkbox size={'medium'} disabled={context.isGradingMode}></Checkbox>}
                    ></InputControl>
                })
            }
        </div>
    )
}
