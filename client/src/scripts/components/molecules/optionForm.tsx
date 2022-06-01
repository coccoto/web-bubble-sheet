// react
import React from 'react'
// atoms
import InputText from '@/scripts/components/atoms/inputText'
import Button from '@/scripts/components/atoms/button'
// contexts
import BubbleContext from '@/scripts/contexts/bubbleContext'

export default (): JSX.Element  => {

    const bubbleContext = React.useContext(BubbleContext.Context)

    const refInputText = [
        React.useRef<HTMLInputElement>(null),
        React.useRef<HTMLInputElement>(null)
    ]

    const handleSubmit = (): void => {
        if (refInputText[0].current === null || refInputText[1].current === null) {
            throw new Error()
        }
        bubbleContext.setBubble({
            lineNum: Number(refInputText[0].current.value),
            checkboxNum: Number(refInputText[1].current.value),
        })
    }

    return (
        <div>
            <InputText
                ref={refInputText[0]}
                label={'questions'}
            ></InputText>
            <InputText
                ref={refInputText[1]}
                label={'choices'}
            ></InputText>
            <Button
                handleSubmit={handleSubmit}
            ></Button>
        </div>
    )
}