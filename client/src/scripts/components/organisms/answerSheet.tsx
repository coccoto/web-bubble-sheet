// react
import React from 'react'
// molecules
import BubbleLine from '@/scripts/components/molecules/bubbleLine'
// contexts
import BubbleContext from '@/scripts/contexts/bubbleContext'
// hooks
import useElementDuplication from '@/scripts/hooks/useElementDuplication'

export default (): JSX.Element => {

    const bubbleContext = React.useContext(BubbleContext.Context)

    const elementDuplication = useElementDuplication()

    return (
        <div>
            <div>
                {
                    elementDuplication.duplicate(
                        <BubbleLine
                            checkboxNum={bubbleContext.bubble.checkboxNum}
                            index={0}
                        ></BubbleLine>,
                        bubbleContext.bubble.lineNum,
                        true
                    )
                }
            </div>
        </div>
    )
}