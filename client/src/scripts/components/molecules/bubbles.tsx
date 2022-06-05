// react
import React from 'react'
// atoms
import InputCheckbox from '@/scripts/components/atoms/inputCheckbox'
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
                elementDuplication.duplicate(
                    <InputCheckbox
                        index={0}
                        label={'isAlphabet'}
                        control={<Checkbox size={'small'}></Checkbox>}
                    ></InputCheckbox>
                    , props.checkboxNum
                    , true
                )
            }
        </div>
    )
}
