// react
import React from 'react'
// atoms
import InputNumber from '@/scripts/components/atoms/inputNumber'
import Button from '@/scripts/components/atoms/button'
// contexts
import Context from '@/scripts/contexts/context'
// styles
import styles from '@/styles/components/organisms/optionForm.module.sass'

export default (): JSX.Element  => {

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
            okNum: 0,
            ngNum: 0,
            flagNum: 0,
        })
    }

    return (
        <div className={styles['container']}>
            <div className={styles['wrapper']}>
                <div className={styles['input-wrapper']}>
                    <InputNumber
                        ref={refInputText[0]}
                        label={'QUESTIONS'}
                        defaultValue={String(context.answerFormStatus.questionNum)}
                    ></InputNumber>
                    <InputNumber
                        ref={refInputText[1]}
                        label={'BUBBLES'}
                        defaultValue={String(context.answerFormStatus.bubbleNum)}
                    ></InputNumber>
                </div>
                <div>
                    <Button handleSubmit={handleSubmit}>
                        CREATE
                    </Button>
                </div>
            </div>
        </div>
    )
}