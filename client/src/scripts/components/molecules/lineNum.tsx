// react
import React from 'react'
// atoms
import InputControl from '@/scripts/components/atoms/inputControl'
// material
import Checkbox from '@mui/material/Checkbox'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
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
                        sx={{padding: '0 9px'}}
                        icon={<EmojiFlagsIcon></EmojiFlagsIcon>}
                        checkedIcon={<EmojiFlagsIcon color={'warning'}></EmojiFlagsIcon>}
                    ></Checkbox>
                }
            ></InputControl>
            <RadioGroup row>
                <InputControl
                    index={0}
                    label={'OK'}
                    control={
                        <Radio
                            size={'small'}
                            color={'success'}
                            sx={{padding: '0 9px'}}
                        ></Radio>
                    }
                ></InputControl>
                <InputControl
                    index={0}
                    label={'REVIEW'}
                    control={
                        <Radio
                            size={'small'}
                            color={'success'}
                            sx={{padding: '0 9px'}}
                        ></Radio>
                    }
                ></InputControl>
            </RadioGroup>
        </div>
    )
}