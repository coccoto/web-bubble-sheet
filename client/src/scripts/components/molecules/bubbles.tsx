// react
import React from 'react'
// atoms
import InputControl from '@/scripts/components/atoms/inputControl'
// hooks
import useElementDuplication from '@/scripts/hooks/useElementDuplication'
// material
import Checkbox from '@mui/material/Checkbox'
// styles
import styles from '@/styles/components/molecules/bubbles.module.sass'

type Props = {
    checkboxNum: number,
}

export default (props: Props): JSX.Element  => {

    const elementDuplication = useElementDuplication()

    return (
        <div className={styles['container']}>
            {
                elementDuplication.generalDuplicate(
                    <InputControl
                        index={0}
                        label={'isAlphabet'}
                        control={<Checkbox size={'small'}></Checkbox>}
                    ></InputControl>
                    , props.checkboxNum
                    , true
                )
            }
        </div>
    )
}
