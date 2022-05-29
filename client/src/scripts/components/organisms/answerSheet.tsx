// react
import React from 'react'
// molecules
import BubbleLine from '@/scripts/components/molecules/bubbleLine'
// hooks
import useElementDuplication from '@/scripts/hooks/useElementDuplication'

export default (): JSX.Element => {

    const elementDuplication = useElementDuplication()

    const [bubble, setBubble] = React.useState({
        lineNum: 5,
        checkboxNum: 5
    })

    return (
        <div>
            <div>
                {
                    elementDuplication.duplicate(
                        <BubbleLine
                            checkboxNum={bubble.checkboxNum}
                            index={0}
                        ></BubbleLine>,
                        bubble.lineNum,
                        true
                    )
                }
            </div>
        </div>
    )
}