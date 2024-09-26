// react
import React from 'react'
// organisms
import AnswerLine from '@/scripts/components/molecules/answerLine'
// contexts
import Context from '@/scripts/contexts/context'
// styles
import styles from '@/styles/components/organisms/answerForm.module.sass'

export default (): JSX.Element => {

    const context = React.useContext(Context.Context)

    return (
        <div className={styles['container']}>
            {
                Array.from({length: context.answerFormStatus.questionNum}, (_, index: number) => {
                    return <AnswerLine
                        // key の index に context.answerFormStatus.keyCount を加算している理由
                        // index だけでは、マークシートの再作成時に key が重複し <AnswerLine> が再レンダリングされない
                        // この事象を解消するため、index に乱数を加算し key の重複を防いでいる
                        key={index + context.answerFormStatus.keyCount}
                        index={index}
                        bubbleNum={context.answerFormStatus.bubbleNum}
                    ></AnswerLine>
                })
            }
        </div>
    )
}