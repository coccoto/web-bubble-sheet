// react
import React from 'react'
import { useLocation } from 'react-router-dom'
// organisms
import AnswerForm from '@/scripts/components/organisms/answerForm'
import OptionForm from '@/scripts/components/organisms/optionForm'
import Scoreboard from '@/scripts/components/organisms/scoreboard'
import Grading from '@/scripts/components/organisms/grading'
// utils
import { isGradingMode } from '@/scripts/utils/isGradingMode'
// styles
import styles from '@/styles/components/organisms/main.module.sass'

export default () => {
    const location = useLocation()
    const gradingMode = isGradingMode(location.pathname)

    return (
        <div className={styles.container}>
            {!gradingMode && <OptionForm></OptionForm>}
            {gradingMode && <Scoreboard></Scoreboard>}
            <AnswerForm></AnswerForm>
            <Grading></Grading>
        </div>
    )
}