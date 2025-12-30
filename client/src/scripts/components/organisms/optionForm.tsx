// react
import React from 'react'
import { useNavigate } from 'react-router-dom'
// atoms
import InputNumber from '@/scripts/components/atoms/inputNumber'
import Button from '@/scripts/components/atoms/button'
// contexts
import Context from '@/scripts/contexts/context'
// styles
import styles from '@/styles/components/organisms/optionForm.module.sass'

export default ():React.JSX.Element  => {
    const navigate = useNavigate()
    const context = React.useContext(Context.Context)

    const refInputText = [
        React.useRef<HTMLInputElement>(null),
        React.useRef<HTMLInputElement>(null)
    ]

    const handleGenerate = (): void => {
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

    const handleGrading = (): void => {
        navigate('/grading')
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.generateWrapper}>
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
                    <div>
                        <Button handleSubmit={handleGenerate}>
                            GENERATE
                        </Button>
                    </div>
                </div>
                <div>
                    <Button handleSubmit={handleGrading}>
                        SELF GRADING
                    </Button>
                </div>
            </div>
        </div>
    )
}