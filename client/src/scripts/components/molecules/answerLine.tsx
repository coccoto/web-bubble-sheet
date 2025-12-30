// react
import React from 'react'
// molecules
import AnswerHeader from '@/scripts/components/molecules/answerHeader'
import Bubbles from '@/scripts/components/molecules/bubbles'
// material
import TextField from '@mui/material/TextField'
// styles
import styles from '@/styles/components/molecules/answerLine.module.sass'

type Props = {
    bubbleNum: number,
    index: number,
}

export default (props: Props): React.JSX.Element  => {

    return (
        <div className={styles.container}>
            <AnswerHeader
                index={props.index}
            ></AnswerHeader>
            <Bubbles
                bubbleNum={props.bubbleNum}
            ></Bubbles>
            <TextField
                size={'small'}
                fullWidth
                placeholder={'記述問題の解答欄'}
            ></TextField>
        </div>
    )
}
