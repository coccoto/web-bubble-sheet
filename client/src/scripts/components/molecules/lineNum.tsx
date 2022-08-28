// react
import React from 'react'
// atoms
import InputControl from '@/scripts/components/atoms/inputControl'
// material
import Checkbox from '@mui/material/Checkbox'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
// styles
import styles from '@/styles/components/molecules/lineNum.module.sass'

type Props = {
    index: number
}

export default (props: Props): JSX.Element  => {

    const getLabel = (): string => {
        const index = props.index + 1
        return 'QUESTION ' + String(index)
    }

    return (
        <div className={styles['container']}>
            <InputControl
                index={0}
                label={getLabel()}
                control={
                    <Checkbox
                        size={'small'}
                        color={'success'}
                    ></Checkbox>
                }
            ></InputControl>
            <RadioGroup row>
                <InputControl
                    index={0}
                    label={'TRUE'}
                    control={
                        <Radio size={'small'} color={'secondary'}></Radio>
                    }
                ></InputControl>
                <InputControl
                    index={0}
                    label={'FALSE'}
                    control={
                        <Radio size={'small'} color={'secondary'}></Radio>
                    }
                ></InputControl>
            </RadioGroup>
        </div>
    )
}