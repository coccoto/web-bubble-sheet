// react
import React from 'react'
// organisms
import AnswerForm from '@/scripts/components/organisms/answerForm'
import OptionForm from '@/scripts/components/organisms/optionForm'
import Scoreboard from '@/scripts/components/organisms/scoreboard'
// contexts
import Context from '@/scripts/contexts/context'
// styles
import styles from '@/styles/components/organisms/main.module.sass'

export default () => {

    return (
        <div className={styles.container}>
            <Context.Provider>
                <OptionForm></OptionForm>
                <Scoreboard></Scoreboard>
                <AnswerForm></AnswerForm>
            </Context.Provider>
        </div>
    )
}