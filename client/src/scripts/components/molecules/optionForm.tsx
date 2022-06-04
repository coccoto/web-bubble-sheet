// react
import React from 'react'
// atoms
import InputNumber from '@/scripts/components/atoms/inputNumber'
import Button from '@/scripts/components/atoms/button'
// contexts
import BubbleContext from '@/scripts/contexts/bubbleContext'
// material
import Box from '@mui/material/Box'

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
        <Box>
            <Box sx={{ display: 'flex' }}>
                <InputNumber
                    ref={refInputText[0]}
                    label={'QUESTIONS'}
                    defaultValue={String(bubbleContext.bubble.lineNum)}
                ></InputNumber>
                <InputNumber
                    ref={refInputText[1]}
                    label={'CHOICES'}
                    defaultValue={String(bubbleContext.bubble.checkboxNum)}
                ></InputNumber>
            </Box>
            <Box>
                <Button
                    handleSubmit={handleSubmit}
                >CREATE</Button>
            </Box>
        </Box>
    )
}