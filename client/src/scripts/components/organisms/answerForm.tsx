// react
import React from 'react'
// organisms
import AnswerLine from '@/scripts/components/organisms/answerLine'
// contexts
import Context from '@/scripts/contexts/context'
// styles
import styles from '@/styles/components/organisms/answerForm.module.sass'

export default (): JSX.Element => {

    const context = React.useContext(Context.Context)

    return (
        <div className={styles['container']}>
            {
                Array.from({ length: context.bubble.questionNum }, (_, index) => {
                    return <AnswerLine
                        key={index}
                        index={index}
                        bubbleNum={context.bubble.bubbleNum}
                    ></AnswerLine>
                })
            }
        </div>
    )
}