// react
import React from 'react'
// organisms
import AnswerLine from '@/scripts/components/organisms/answerLine'
// contexts
import Context from '@/scripts/contexts/context'
// hooks
import useElementDuplication from '@/scripts/hooks/useElementDuplication'
// styles
import styles from '@/styles/components/organisms/answerForm.module.sass'

export default (): JSX.Element => {

    const context = React.useContext(Context.Context)

    const elementDuplication = useElementDuplication()

    return (
        <div className={styles['container']}>
            {
                elementDuplication.generalDuplicate(
                    <AnswerLine
                        checkboxNum={context.bubble.checkboxNum}
                        index={0}
                    ></AnswerLine>,
                    context.bubble.lineNum,
                )
            }
        </div>
    )
}