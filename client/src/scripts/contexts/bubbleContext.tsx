// react
import React from 'react'

type BubbleContextType = {
    bubble: {
        lineNum: number,
        checkboxNum: number,
    },
    setBubble: React.Dispatch<React.SetStateAction<{
        lineNum: number;
        checkboxNum: number;
    }>>
}

type Props = {
    children: React.ReactNode;
}

const BubbleContext = React.createContext<BubbleContextType>({
    bubble: {
        lineNum: 5,
        checkboxNum: 4,
    },
    setBubble: () => {}
})

const BubbleContextProvider = (props: Props): JSX.Element => {
    const context: BubbleContextType = React.useContext(BubbleContext)
    const [bubble, setBubble] = React.useState(context.bubble)
    const shareContext = {bubble, setBubble}

    return (
        <BubbleContext.Provider value={shareContext}>
            {props.children}
        </BubbleContext.Provider>
    )
}

export default {
    Context: BubbleContext,
    Provider: BubbleContextProvider,
}