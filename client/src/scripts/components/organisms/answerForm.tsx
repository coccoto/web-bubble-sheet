// react
import React from 'react'
// material
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
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
            <Card className={styles.card} variant={'outlined'}>
                <CardContent className={styles.cardContent}>
                    <Typography variant={'h6'} color={'primary'} sx={{ fontWeight: 'bold' }}>回答フォーム</Typography>
                    {
                        Array.from({length: context.answerFormStatus.questionNum}, (_, index: number) => {
                            return <AnswerLine
                                key={index + context.answerFormStatus.keyCount}
                                index={index}
                                bubbleNum={context.answerFormStatus.bubbleNum}
                            ></AnswerLine>
                        })
                    }
                </CardContent>
            </Card>
        </div>
    )
}