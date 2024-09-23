// react
import React from 'react'

type ContextType = {
    bubble: {
        questionNum: number,
        bubbleNum: number,
    },
    setBubble: React.Dispatch<React.SetStateAction<{
        questionNum: number;
        bubbleNum: number;
    }>>
}

type Props = {
    children: React.ReactNode;
}

const Context = React.createContext<ContextType>({
    bubble: {
        questionNum: 5,
        bubbleNum: 4,
    },
    setBubble: () => {},
})

const ContextProvider = (props: Props): JSX.Element => {
    const context: ContextType = React.useContext(Context)
    const [bubble, setBubble] = React.useState(context.bubble)
    const shareContext = {bubble, setBubble}

    return (
        <Context.Provider value={shareContext}>
            {props.children}
        </Context.Provider>
    )
}

export default {
    Context: Context,
    Provider: ContextProvider,
}