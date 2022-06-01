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

const BubbleContext = React.createContext<BubbleContextType>({
    bubble: {
        lineNum: 5,
        checkboxNum: 4,
    },
    setBubble: () => {}
})

const BubbleContextProvider = ({children}: any): JSX.Element => {
    const context: BubbleContextType = React.useContext(BubbleContext)
    const [bubble, setBubble] = React.useState(context.bubble)
    const shareContext = {bubble, setBubble}

    return (
        <BubbleContext.Provider value={shareContext}>
            {children}
        </BubbleContext.Provider>
    )
}

export default {
    Context: BubbleContext,
    Provider: BubbleContextProvider,
}