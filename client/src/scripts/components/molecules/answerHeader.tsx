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

    const incrementLabel = (): string => {
        const index = props.index + 1
        return 'QUESTION ' + String(index)
    }

    const handleOnChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
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
                console.error('ERROR')
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
                console.error('ERROR')
            }

        } else {
            console.error('ERROR')
        }
        setCheckedRadio(checkedElem.value)
    }

    const handleOnChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
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
                {incrementLabel()}
            </Typography>
            <div className={styles['wrapper']}>
                <RadioGroup row>
                    <InputControl
                        index={0}
                        label={'OK'}
                        control={<Radio onChange={handleOnChangeRadio} size={'small'} color={'success'}></Radio>}
                    ></InputControl>
                    <InputControl
                        index={0}
                        label={'NG'}
                        control={<Radio onChange={handleOnChangeRadio} size={'small'} color={'success'}></Radio>}
                    ></InputControl>
                </RadioGroup>
                <InputControl
                    index={0}
                    label={'FLAG'}
                    control={<Checkbox onChange={handleOnChangeCheckbox} size={'small'} color={'warning'}></Checkbox>}
                ></InputControl>
            </div>
        </div>
    )
}