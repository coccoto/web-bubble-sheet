// react
import React from 'react'
// atoms
import InputCheckbox from '@/scripts/components/atoms/inputCheckbox'
// hooks
import useElementDuplication from '@/scripts/hooks/useElementDuplication'
// material
import {
    Typography,
} from '@mui/material'

type Props = {
    checkboxNum: number,
    index: number
}

export default (props: Props): JSX.Element  => {

    const elementDuplication = useElementDuplication()

    return (
        <div>
            <div>
                <Typography variant={'body1'}>
                    {props.index + 1}
                </Typography>
            </div>
            <div>
                {
                    elementDuplication.duplicate(
                        <InputCheckbox
                            index={0}
                            label={'isAlphabet'}
                        ></InputCheckbox>
                        , props.checkboxNum
                        , true
                    )
                }
            </div>
        </div>
    )
}
