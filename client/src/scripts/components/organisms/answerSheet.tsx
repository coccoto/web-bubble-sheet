// react
import React from 'react'
// molecules
import AnswerLine from '@/scripts/components/molecules/answerLine'
// contexts
import Context from '@/scripts/contexts/context'
// hooks
import useElementDuplication from '@/scripts/hooks/useElementDuplication'
// styles
import styles from '@/styles/components/organisms/answerSheet.module.sass'

export default (): JSX.Element => {

    const context = React.useContext(Context.Context)

    const elementDuplication = useElementDuplication()

    return (
        <div className={styles['container']}>
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