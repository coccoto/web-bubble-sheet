// react
import React from 'react'
// atoms
import InputCheckbox from '@/scripts/components/atoms/inputCheckbox'
// hooks
import useElementDuplication from '@/scripts/hooks/useElementDuplication'
// material
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

type Props = {
    checkboxNum: number
    , index: number
}

export default (props: Props): JSX.Element  => {

    const elementDuplication = useElementDuplication()

    return (
        <Stack
            direction={'row'}
            justifyContent={'flex-start'}
            alignItems={'center'}
            spacing={2}
        >
            <Box>
                <Typography variant={'body1'}>
                    {props.index + 1}
                </Typography>
            </Box>
            <Stack
                direction={'row'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                {
                    elementDuplication.duplicate(
                        <InputCheckbox
                            index={0}
                            label={'isAlphabet'}
                        ></InputCheckbox>
                        , props.checkboxNum
                        , true
                    )
                }
            </Stack>
            <Box>
                <TextField
                    type={'text'}
                    label={'MEMO'}
                ></TextField>
            </Box>
            <Box>
                <InputCheckbox
                    index={0}
                    label={'CORRECT'}
                ></InputCheckbox>
            </Box>
        </Stack>
    )
}
