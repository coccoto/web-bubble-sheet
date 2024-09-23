// react
import React from 'react'

type ContextType = {
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

const Context = React.createContext<ContextType>({
    bubble: {
        lineNum: 5,
        checkboxNum: 4,
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