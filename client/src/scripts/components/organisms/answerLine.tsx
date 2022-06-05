// react
import React from 'react'
// molecules
import LineNum from '@/scripts/components/molecules/lineNum'
import Bubbles from '@/scripts/components/molecules/bubbles'
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
            <LineNum
                index={props.index}
            ></LineNum>
            <Bubbles
                checkboxNum={props.checkboxNum}
            ></Bubbles>
            <TextField
                size={'small'}
                label={'MEMO'}
                fullWidth
            ></TextField>
        </div>
    )
}
