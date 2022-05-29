// react
import React from 'react'
// atoms
import InputText from '@/scripts/components/atoms/inputText'

export default (): JSX.Element  => {

    return (
        <div>
            <InputText
                label={'Questions'}
            ></InputText>
            <InputText
                label={'Answer choices'}
            ></InputText>
        </div>
    )
}