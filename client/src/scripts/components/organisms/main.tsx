// react
import React from 'react'
// molecules
import OptionForm from '@/scripts/components/molecules/optionForm'
// organisms
import AnswerSheet from '@/scripts/components/organisms/answerSheet'
// contexts
import Context from '@/scripts/contexts/context'
// styles
import styles from '@/styles/components/organisms/main.module.sass'

export default () => {

    return (
        <div className={styles['container']}>
            <Context.Provider>
                <OptionForm></OptionForm>
                <AnswerSheet></AnswerSheet>
            </Context.Provider>
        </div>
    )
}