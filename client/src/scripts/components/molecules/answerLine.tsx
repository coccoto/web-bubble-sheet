// react
import React from 'react'
import { useLocation } from 'react-router-dom'
// molecules
import AnswerHeader from '@/scripts/components/molecules/answerHeader'
import Bubbles from '@/scripts/components/molecules/bubbles'
// material
import TextField from '@mui/material/TextField'
// utils
import { isGradingMode } from '@/scripts/utils/isGradingMode'
// styles
import styles from '@/styles/components/molecules/answerLine.module.sass'

type Props = {
    bubbleNum: number,
    index: number,
}

export default (props: Props): React.JSX.Element  => {
    const location = useLocation()
    const gradingMode = isGradingMode(location.pathname)

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
                disabled={gradingMode}
            ></TextField>
        </div>
    )
}
