// react
import React from 'react'
import { useLocation } from 'react-router-dom'
// atoms
import InputControl from '@/scripts/components/atoms/inputControl'
// material
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
// contexts
import Context from '@/scripts/contexts/context'
// utils
import { isGradingMode } from '@/scripts/utils/isGradingMode'
// types
import { Grading } from '@/types'
// styles
import styles from '@/styles/components/molecules/answerHeader.module.sass'

type Props = {
    index: number
}

export default (props: Props): React.JSX.Element  => {

    const context = React.useContext(Context.Context)
    const location = useLocation()
    const gradingMode = isGradingMode(location.pathname)

    const [checkedRadio, setCheckedRadio] = React.useState('')

    const selectLabel = (): string => {
        const index = props.index + 1
        return 'QUESTION ' + String(index)
    }

    const handleGradingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value as Grading

        // 前回の選択と同じ場合、処理を終了
        if (checkedRadio === newValue) return

        context.setAnswerFormStatus(current => {
            let passNum = current.passNum
            let failNum = current.failNum

            // 前回の選択を解除
            if (checkedRadio === Grading.PASS) {
                passNum -= 1
            } else if (checkedRadio === Grading.FAIL) {
                failNum -= 1
            }

            // 今回の選択を追加
            if (newValue === Grading.PASS) {
                passNum += 1
            } else if (newValue === Grading.FAIL) {
                failNum += 1
            }

            return { ...current, passNum, failNum }
        })
        setCheckedRadio(newValue)
    }

    const handleReviewChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const checkedElem = event.target

        if (checkedElem.checked) {
            context.setAnswerFormStatus(currentBubble => ({
                ...currentBubble,
                reviewNum: context.answerFormStatus.reviewNum + 1,
            }))
        } else {
            context.setAnswerFormStatus(currentBubble => ({
                ...currentBubble,
                reviewNum: context.answerFormStatus.reviewNum - 1,
            }))
        }
    }

    return (
        <div className={styles.container}>
            <Typography variant={'body1'} sx={{ fontWeight: 'bold' }}>
                {selectLabel()}
            </Typography>
            <div className={styles.wrapper}>
                {gradingMode && (
                    <RadioGroup row>
                        <InputControl
                            index={0}
                            label={Grading.PASS}
                            control={<Radio value={Grading.PASS} onChange={handleGradingChange} size={'small'} color={'success'}></Radio>}
                        ></InputControl>
                        <InputControl
                            index={0}
                            label={Grading.FAIL}
                            control={<Radio value={Grading.FAIL} onChange={handleGradingChange} size={'small'} color={'error'}></Radio>}
                        ></InputControl>
                    </RadioGroup>
                )}
                <InputControl
                    index={0}
                    label={'後で見直す'}
                    control={<Checkbox onChange={handleReviewChange} size={'small'} color={'info'}></Checkbox>}
                ></InputControl>
            </div>
        </div>
    )
}