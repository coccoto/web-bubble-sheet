// react
import React from 'react'
// atoms
import InputControl from '@/scripts/components/atoms/inputControl'
// material
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
// contexts
import Context from '@/scripts/contexts/context'
// styles
import styles from '@/styles/components/molecules/answerHeader.module.sass'

type Props = {
    index: number
}

export default (props: Props): React.JSX.Element  => {

    const context = React.useContext(Context.Context)

    const [checkedRadio, setCheckedRadio] = React.useState('')

    const selectLabel = (): string => {
        const index = props.index + 1
        return 'QUESTION ' + String(index)
    }

    const handleOnChange_radio = (event: React.ChangeEvent<HTMLInputElement>) => {
        const checkedElem = event.target

        // PASS が選択された場合
        if (checkedElem.value === 'PASS') {
            // 初選択の場合
            if (checkedRadio === '') {
                context.setAnswerFormStatus(currentBubble => ({
                    ...currentBubble,
                    passNum: context.answerFormStatus.passNum + 1,
                }))
            // 前選択が FAIL の場合
            } else if (checkedRadio === 'FAIL') {
                context.setAnswerFormStatus(currentBubble => ({
                    ...currentBubble,
                    passNum: context.answerFormStatus.passNum + 1,
                    failNum: context.answerFormStatus.failNum - 1,
                }))
            } else {
                console.error('error')
            }
        // FAIL が選択された場合
        } else if (checkedElem.value === 'FAIL') {
            // 初選択の場合
            if (checkedRadio === '') {
                context.setAnswerFormStatus(currentBubble => ({
                    ...currentBubble,
                    failNum: context.answerFormStatus.failNum + 1,
                }))
            // 前選択が PASS の場合
            } else if (checkedRadio === 'PASS') {
                context.setAnswerFormStatus(currentBubble => ({
                    ...currentBubble,
                    passNum: context.answerFormStatus.passNum - 1,
                    failNum: context.answerFormStatus.failNum + 1,
                }))
            } else {
                console.error('error')
            }
        } else {
            console.error('error')
        }
        setCheckedRadio(checkedElem.value)
    }

    const handleOnChange_checkbox = (event: React.ChangeEvent<HTMLInputElement>) => {
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
                <RadioGroup row>
                    <InputControl
                        index={0}
                        label={'PASS'}
                        control={<Radio onChange={handleOnChange_radio} size={'small'} color={'success'}></Radio>}
                    ></InputControl>
                    <InputControl
                        index={0}
                        label={'FAIL'}
                        control={<Radio onChange={handleOnChange_radio} size={'small'} color={'error'}></Radio>}
                    ></InputControl>
                </RadioGroup>
                <InputControl
                    index={0}
                    label={'REVIEW'}
                    control={<Checkbox onChange={handleOnChange_checkbox} size={'small'} color={'secondary'}></Checkbox>}
                ></InputControl>
            </div>
        </div>
    )
}