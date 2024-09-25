// react
import React from 'react'
// contexts
import Context from '@/scripts/contexts/context'
// material
import Typography from '@mui/material/Typography'
// styles
import styles from '@/styles/components/organisms/scoreboard.module.sass'

type Props = {
}

export default (props: Props): JSX.Element  => {

    const context = React.useContext(Context.Context)

    const calculatePercent = (part: number, total: number): number => {
        if (total === 0) {
            return 0
        }
        const percent = (part / total) * 100
        return Math.round(percent)
    }

    const assembleScoreItem = (label: string, part: number, total: number): React.JSX.Element => {
        return (
            <div className={styles['wrapper']}>
                <span>{label}</span>
                <div className={styles['score']}>
                    <span>{part}/{total}</span>
                    <span>({calculatePercent(part, total)}%)</span>
                </div>
            </div>
        )
    }

    return (
        <div className={styles['container']}>
            {assembleScoreItem('OK', context.answerFormStatus.okNum, context.answerFormStatus.questionNum)}
            {assembleScoreItem('NG', context.answerFormStatus.ngNum, context.answerFormStatus.questionNum)}
            {assembleScoreItem('FLAG', context.answerFormStatus.flagNum, context.answerFormStatus.questionNum)}
        </div>
    )
}
