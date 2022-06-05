// react
import React from 'react'
// molecules
import OptionForm from '@/scripts/components/molecules/optionForm'
// organisms
import AnswerSheet from '@/scripts/components/organisms/answerSheet'
// contexts
import Context from '@/scripts/contexts/context'

export default () => {

    return (
        <Context.Provider>
            <div>
                <OptionForm></OptionForm>
                <AnswerSheet></AnswerSheet>
            </div>
        </Context.Provider>
    )
}