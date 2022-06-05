// react
import React from 'react'
// molecules
import AnswerLine from '@/scripts/components/molecules/answerLine'
// contexts
import Context from '@/scripts/contexts/context'
// hooks
import useElementDuplication from '@/scripts/hooks/useElementDuplication'

export default (): JSX.Element => {

    const context = React.useContext(Context.Context)

    const elementDuplication = useElementDuplication()

    return (
        <div>
            {
                elementDuplication.duplicate(
                    <AnswerLine
                        checkboxNum={context.bubble.checkboxNum}
                        index={0}
                    ></AnswerLine>,
                    context.bubble.lineNum,
                    true
                )
            }
        </div>
    )
}