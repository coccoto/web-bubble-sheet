// react
import React from 'react'
// molecules
import OptionForm from '@/scripts/components/molecules/optionForm'
// organisms
import AnswerForm from '@/scripts/components/organisms/answerForm'
// contexts
import Context from '@/scripts/contexts/context'
// styles
import styles from '@/styles/components/organisms/main.module.sass'

export default () => {

    return (
        <div className={styles['container']}>
            <Context.Provider>
                <OptionForm></OptionForm>
                <AnswerForm></AnswerForm>
            </Context.Provider>
        </div>
    )
}