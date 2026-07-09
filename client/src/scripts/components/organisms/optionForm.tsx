// react
import React from 'react'
// material
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
// atoms
import InputNumber from '@/scripts/components/atoms/inputNumber'
import InputSelect from '@/scripts/components/atoms/inputSelect'
import Button from '@/scripts/components/atoms/button'
// contexts
import Context from '@/scripts/contexts/context'
// types
import { ChoiceType } from '@/types'
// styles
import styles from '@/styles/components/organisms/optionForm.module.sass'

const choiceTypeOptions = [
    { value: ChoiceType.ALPHABET, label: 'A B C ...' },
    { value: ChoiceType.NUMBER, label: '1 2 3 ...' },
    { value: ChoiceType.KATAKANA, label: 'ア イ ウ ...' },
]

const MAX_BUBBLE_NUM = 16

export default ():React.JSX.Element  => {

    const context = React.useContext(Context.Context)

    const refInputText = [
        React.useRef<HTMLInputElement>(null),
        React.useRef<HTMLInputElement>(null)
    ]

    const [choiceType, setChoiceType] = React.useState<ChoiceType>(context.answerFormStatus.choiceType)

    const handleSubmit = (): void => {
        if (refInputText[0].current === null || refInputText[1].current === null) {
            console.error('error')
            return
        }

        const bubbleNum = Number(refInputText[1].current.value)
        if (bubbleNum > MAX_BUBBLE_NUM) {
            window.alert(`選択肢数は ${MAX_BUBBLE_NUM} 以下にしてください。`)
            return
        }

        const isConfirm = window.confirm(
            '現在の回答がリセットされます。シートの作成を続行しますか？'
        )
        if (! isConfirm) {
            return
        }

        context.setAnswerFormStatus({
            keyCount: Math.random(),
            questionNum: Number(refInputText[0].current.value),
            bubbleNum: bubbleNum,
            choiceType: choiceType,
            passNum: 0,
            failNum: 0,
            reviewNum: 0,
        })
    }

    return (
        <div className={styles.container}>
            <Card className={styles.card} variant={'outlined'}>
                <CardContent className={styles.cardContent}>
                    <Typography variant={'h6'} color={'primary'} sx={{ fontWeight: 'bold' }}>設定</Typography>
                    <div className={styles.inputWrapper}>
                        <InputNumber
                            ref={refInputText[0]}
                            label={'問題数'}
                            defaultValue={String(context.answerFormStatus.questionNum)}
                        ></InputNumber>
                        <InputNumber
                            ref={refInputText[1]}
                            label={'選択肢数'}
                            defaultValue={String(context.answerFormStatus.bubbleNum)}
                        ></InputNumber>
                        <InputSelect
                            label={'選択形式'}
                            value={choiceType}
                            options={choiceTypeOptions}
                            handleChange={(value) => setChoiceType(value as ChoiceType)}
                        ></InputSelect>
                    </div>
                    <div className={styles.buttonWrapper}>
                        <Button handleSubmit={handleSubmit}>
                            シートを作成
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}