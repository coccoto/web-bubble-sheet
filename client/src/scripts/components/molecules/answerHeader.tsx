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

export default (props: Props): JSX.Element  => {

    const context = React.useContext(Context.Context)

    const [checkedRadio, setCheckedRadio] = React.useState('')

    const selectLabel = (): string => {
        const index = props.index + 1
        return 'QUESTION ' + String(index)
    }

    const handleOnChange_radio = (event: React.ChangeEvent<HTMLInputElement>) => {
        const checkedElem = event.target

        // OK が選択された場合
        if (checkedElem.value === 'OK') {
            // 初選択の場合
            if (checkedRadio === '') {
                context.setAnswerFormStatus(currentBubble => ({
                    ...currentBubble,
                    okNum: context.answerFormStatus.okNum + 1,
                }))
            // 前選択が NG の場合
            } else if (checkedRadio === 'NG') {
                context.setAnswerFormStatus(currentBubble => ({
                    ...currentBubble,
                    okNum: context.answerFormStatus.okNum + 1,
                    ngNum: context.answerFormStatus.ngNum - 1,
                }))
            } else {
                console.error('error')
            }
        // NG が選択された場合
        } else if (checkedElem.value === 'NG') {
            // 初選択の場合
            if (checkedRadio === '') {
                context.setAnswerFormStatus(currentBubble => ({
                    ...currentBubble,
                    ngNum: context.answerFormStatus.ngNum + 1,
                }))
            // 前選択が OK の場合
            } else if (checkedRadio === 'OK') {
                context.setAnswerFormStatus(currentBubble => ({
                    ...currentBubble,
                    okNum: context.answerFormStatus.okNum - 1,
                    ngNum: context.answerFormStatus.ngNum + 1,
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
                flagNum: context.answerFormStatus.flagNum + 1,
            }))
        } else {
            context.setAnswerFormStatus(currentBubble => ({
                ...currentBubble,
                flagNum: context.answerFormStatus.flagNum - 1,
            }))
        }
    }

    return (
        <div className={styles['container']}>
            <Typography variant={'body1'}>
                {selectLabel()}
            </Typography>
            <div className={styles['wrapper']}>
                <RadioGroup row>
                    <InputControl
                        index={0}
                        label={'OK'}
                        control={<Radio onChange={handleOnChange_radio} size={'small'} color={'success'}></Radio>}
                    ></InputControl>
                    <InputControl
                        index={0}
                        label={'NG'}
                        control={<Radio onChange={handleOnChange_radio} size={'small'} color={'success'}></Radio>}
                    ></InputControl>
                </RadioGroup>
                <InputControl
                    index={0}
                    label={'FLAG'}
                    control={<Checkbox onChange={handleOnChange_checkbox} size={'small'} color={'warning'}></Checkbox>}
                ></InputControl>
            </div>
        </div>
    )
}