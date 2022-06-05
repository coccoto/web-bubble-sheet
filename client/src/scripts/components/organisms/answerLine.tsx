// react
import React from 'react'
// molecules
import IndexPart from '@/scripts/components/molecules/indexPart'
import BubblePart from '@/scripts/components/molecules/bubblePart'
// material
import {
    TextField,
} from '@mui/material'
// styles
import styles from '@/styles/components/organisms/answerLine.module.sass'

type Props = {
    checkboxNum: number,
    index: number
}

export default (props: Props): JSX.Element  => {

    return (
        <div>
            <IndexPart
                index={props.index}
            ></IndexPart>
            <BubblePart
                checkboxNum={props.checkboxNum}
            ></BubblePart>
            <TextField
                size={'small'}
                type={'text'}
                label={'MEMO'}
            ></TextField>
        </div>
    )
}
