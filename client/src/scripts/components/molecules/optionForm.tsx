// react
import React from 'react'
// atoms
import InputNumber from '@/scripts/components/atoms/inputNumber'
import Button from '@/scripts/components/atoms/button'
// contexts
import Context from '@/scripts/contexts/context'

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
            lineNum: Number(refInputText[0].current.value),
            checkboxNum: Number(refInputText[1].current.value),
        })
    }

    return (
        <div>
            <div>
                <InputNumber
                    ref={refInputText[0]}
                    label={'QUESTIONS'}
                    defaultValue={String(context.bubble.lineNum)}
                ></InputNumber>
                <InputNumber
                    ref={refInputText[1]}
                    label={'CHOICES'}
                    defaultValue={String(context.bubble.checkboxNum)}
                ></InputNumber>
            </div>
            <div>
                <Button handleSubmit={handleSubmit}>
                    CREATE
                </Button>
            </div>
        </div>
    )
}