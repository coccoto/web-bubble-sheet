// react
import React from 'react'
// molecules
import AnswerLineHeader from '@/scripts/components/molecules/answerLineHeader'
import Bubbles from '@/scripts/components/molecules/bubbles'
// material
import TextField from '@mui/material/TextField'
// styles
import styles from '@/styles/components/organisms/answerLine.module.sass'

type Props = {
    bubbleNum: number,
    index: number
}

export default (props: Props): JSX.Element  => {

    return (
        <div>
            <AnswerLineHeader
                index={props.index}
            ></AnswerLineHeader>
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
