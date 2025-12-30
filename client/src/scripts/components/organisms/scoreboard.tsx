// react
import React from 'react'
// contexts
import Context from '@/scripts/contexts/context'
// types
import { Grading } from '@/types'
// styles
import styles from '@/styles/components/organisms/scoreboard.module.sass'

type Props = {
}

export default (props: Props):React.JSX.Element  => {

    const context = React.useContext(Context.Context)

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.scoreItem}>
                    <div className={styles.scoreNum}>{context.answerFormStatus.passNum}/{context.answerFormStatus.questionNum}</div>
                    <div>{Grading.PASS}</div>
                </div>
                <div className={styles.scoreItem}>
                    <div className={styles.scoreNum}>{context.answerFormStatus.failNum}/{context.answerFormStatus.questionNum}</div>
                    <div>{Grading.FAIL}</div>
                </div>
                <div className={styles.scoreItem}>
                    <div className={styles.scoreNum}>{context.answerFormStatus.reviewNum}/{context.answerFormStatus.questionNum}</div>
                    <div>REVIEW</div>
                </div>
            </div>
        </div>
    )
}
