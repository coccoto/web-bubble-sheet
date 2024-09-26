// react
import React from 'react'
// molecules
import AnswerHeader from '@/scripts/components/molecules/answerHeader'
import Bubbles from '@/scripts/components/molecules/bubbles'
// material
import TextField from '@mui/material/TextField'
// styles
import styles from '@/styles/components/organisms/answerLine.module.sass'

type Props = {
    bubbleNum: number,
    index: number,
}

export default (props: Props): JSX.Element  => {

    return (
        <div>
            <AnswerHeader
                index={props.index}
            ></AnswerHeader>
            <Bubbles
                bubbleNum={props.bubbleNum}
            ></Bubbles>
            <TextField
                size={'small'}
                fullWidth
            ></TextField>
        </div>
    )
}
