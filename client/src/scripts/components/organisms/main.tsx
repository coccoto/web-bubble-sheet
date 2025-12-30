// react
import React from 'react'
import { useLocation } from 'react-router-dom'
// organisms
import AnswerForm from '@/scripts/components/organisms/answerForm'
import OptionForm from '@/scripts/components/organisms/optionForm'
import Scoreboard from '@/scripts/components/organisms/scoreboard'
import Grading from '@/scripts/components/organisms/grading'
// contexts
import Context from '@/scripts/contexts/context'
// constants
import { ROUTES } from '@/constants'
// styles
import styles from '@/styles/components/organisms/main.module.sass'

export default () => {
    const location = useLocation()
    const context = React.useContext(Context.Context)

    React.useEffect(() => {
        const isGrading = location.pathname === ROUTES.GRADING
        context.setIsGradingMode(isGrading)
    }, [location.pathname])

    return (
        <div className={styles.container}>
            {! context.isGradingMode && <OptionForm></OptionForm>}
            {context.isGradingMode && <Scoreboard></Scoreboard>}
            <AnswerForm></AnswerForm>
            {! context.isGradingMode && <Grading></Grading>}
        </div>
    )
}