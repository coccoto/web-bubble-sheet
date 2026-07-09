// react
import React from 'react'
// material
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
// styles
import styles from '@/styles/components/atoms/inputSelect.module.sass'

type Option = {
    value: string,
    label: string,
}

type Props = {
    label: string,
    value: string,
    options: Option[],
    handleChange: (value: string) => void,
}

export default (props: Props): React.JSX.Element  => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        props.handleChange(event.target.value)
    }

    const selectOptions = (): React.JSX.Element[] => {
        return props.options.map((option) => (
            <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
        ))
    }

    return (
        <div className={styles.container}>
            <TextField
                select
                size={'small'}
                value={props.value}
                label={props.label}
                onChange={handleChange}
                fullWidth
            >{selectOptions()}</TextField>
        </div>
    )
}
