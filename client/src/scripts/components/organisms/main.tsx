// react
import React from 'react'
// molecules
import OptionForm from '@/scripts/components/molecules/optionForm'
// organisms
import AnswerSheet from '@/scripts/components/organisms/answerSheet'
// contexts
import BubbleContext from '@/scripts/contexts/bubbleContext'

export default () => {

    return (
        <BubbleContext.Provider>
            <OptionForm></OptionForm>
            <AnswerSheet></AnswerSheet>
        </BubbleContext.Provider>
    )
}