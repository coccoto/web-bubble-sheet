// react
import React from 'react'
// contexts
import Context from '@/scripts/contexts/context'
// styles
import styles from '@/styles/components/organisms/scoreboard.module.sass'

type Props = {
}

export default (props: Props):React.JSX.Element  => {

    const context = React.useContext(Context.Context)

    return (
        <div className={styles.container}>
            <div className={styles.barWrapper}>
                SCORE
            </div>
            <div className={styles.scoreWrapper}>
                <div className={styles.scoreItems}>
                    <div className={styles.scoreNum}>{context.answerFormStatus.passNum}/{context.answerFormStatus.questionNum}</div>
                    <div className={styles.scoreName}>PASS</div>
                </div>
                <div className={styles.scoreItems}>
                    <div className={styles.scoreNum}>{context.answerFormStatus.failNum}/{context.answerFormStatus.questionNum}</div>
                    <div className={styles.scoreName}>FAIL</div>
                </div>
                <div className={styles.scoreItems}>
                    <div className={styles.scoreNum}>{context.answerFormStatus.reviewNum}/{context.answerFormStatus.questionNum}</div>
                    <div className={styles.scoreName}>REVIEW</div>
                </div>
            </div>
        </div>
    )
}
