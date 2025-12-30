// react
import React from 'react'
// organisms
import AnswerLine from '@/scripts/components/molecules/answerLine'
// contexts
import Context from '@/scripts/contexts/context'
// styles
import styles from '@/styles/components/organisms/answerForm.module.sass'

export default (): React.JSX.Element => {

    const context = React.useContext(Context.Context)

    return (
        <div className={styles.container}>
            {
                Array.from({length: context.answerFormStatus.questionNum}, (_, index: number) => {
                    return <AnswerLine
                        key={index + context.answerFormStatus.keyCount}
                        index={index}
                        bubbleNum={context.answerFormStatus.bubbleNum}
                    ></AnswerLine>
                })
            }
        </div>
    )
}