// react
import React from 'react'
// atoms
import InputCheckbox from '@/scripts/components/atoms/inputCheckbox'
// hooks
import useElementDuplication from '@/scripts/hooks/useElementDuplication'

type Props = {
    checkboxNum: number
    , index: number
}

export default (props: Props): JSX.Element  => {

    const elementDuplication = useElementDuplication()

    return (
        <div>
            <div>
                {props.index + 1}
            </div>
            <div>
                {
                    elementDuplication.duplicate(
                        <InputCheckbox
                            index={0}
                            label={''}
                        ></InputCheckbox>
                        , props.checkboxNum
                        , true
                    )
                }
            </div>
            <div>
                <input type='text'></input>
            </div>
            <div>
                <InputCheckbox
                    index={0}
                    label={'OK'}
                ></InputCheckbox>
            </div>
        </div>
    )
}
