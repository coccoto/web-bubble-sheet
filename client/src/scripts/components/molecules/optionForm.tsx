// react
import React from 'react'
// material
import Typography from '@mui/material/Typography'
// atoms
import InputNumber from '@/scripts/components/atoms/inputNumber'
import Button from '@/scripts/components/atoms/button'
// contexts
import Context from '@/scripts/contexts/context'
// styles
import styles from '@/styles/components/molecules/optionForm.module.sass'

export default ():React.JSX.Element  => {

    const context = React.useContext(Context.Context)

    const refInputText = [
        React.useRef<HTMLInputElement>(null),
        React.useRef<HTMLInputElement>(null)
    ]

    const handleSubmit = (): void => {
        if (refInputText[0].current === null || refInputText[1].current === null) {
            console.error('error')
            return
        }
        context.setAnswerFormStatus({
            keyCount: Math.random(),
            questionNum: Number(refInputText[0].current.value),
            bubbleNum: Number(refInputText[1].current.value),
            passNum: 0,
            failNum: 0,
            reviewNum: 0,
        })
    }

    return (
        <div className={styles.container}>
            <Typography variant={'h6'} color={'primary'} sx={{ fontWeight: 'bold' }}>マークシート作成</Typography>
            <div className={styles.inputWrapper}>
                <InputNumber
                    ref={refInputText[0]}
                    label={'QUESTIONS'}
                    defaultValue={String(context.answerFormStatus.questionNum)}
                ></InputNumber>
                <InputNumber
                    ref={refInputText[1]}
                    label={'CHOICES'}
                    defaultValue={String(context.answerFormStatus.bubbleNum)}
                ></InputNumber>
            </div>
            <div className={styles.buttonWrapper}>
                <Button handleSubmit={handleSubmit}>
                    GENERATE
                </Button>
            </div>
        </div>
    )
}