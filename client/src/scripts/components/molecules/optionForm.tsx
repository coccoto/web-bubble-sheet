// react
import React from 'react'
// atoms
import InputNumber from '@/scripts/components/atoms/inputNumber'
import Button from '@/scripts/components/atoms/button'
// contexts
import Context from '@/scripts/contexts/context'
// styles
import styles from '@/styles/components/molecules/optionForm.module.sass'

export default (): JSX.Element  => {

    const context = React.useContext(Context.Context)

    const refInputText = [
        React.useRef<HTMLInputElement>(null),
        React.useRef<HTMLInputElement>(null)
    ]

    const handleSubmit = (): void => {
        if (refInputText[0].current === null || refInputText[1].current === null) {
            throw new Error()
        }
        context.setBubble({
            questionNum: Number(refInputText[0].current.value),
            bubbleNum: Number(refInputText[1].current.value),
        })
    }

    return (
        <div className={styles['container']}>
            <div className={styles['wrapper']}>
                <div className={styles['input-wrapper']}>
                    <InputNumber
                        ref={refInputText[0]}
                        label={'QUESTIONS'}
                        defaultValue={String(context.bubble.questionNum)}
                    ></InputNumber>
                    <InputNumber
                        ref={refInputText[1]}
                        label={'BUBBLES'}
                        defaultValue={String(context.bubble.bubbleNum)}
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