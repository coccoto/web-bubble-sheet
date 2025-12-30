// react
import React from 'react'

type ContextType = {
    answerFormStatus: {
        keyCount: number,
        questionNum: number,
        bubbleNum: number,
        passNum: number,
        failNum: number,
        reviewNum: number,
    },
    setAnswerFormStatus: React.Dispatch<React.SetStateAction<{
        keyCount: number,
        questionNum: number,
        bubbleNum: number,
        passNum: number,
        failNum: number,
        reviewNum: number,
    }>>,
}

type Props = {
    children: React.ReactNode;
}

const Context = React.createContext<ContextType>({
    answerFormStatus: {
        keyCount: 0,
        questionNum: 5,
        bubbleNum: 4,
        passNum: 0,
        failNum: 0,
        reviewNum: 0,
    },
    setAnswerFormStatus: () => {},
})

const ContextProvider = (props: Props):React.JSX.Element => {
    const context: ContextType = React.useContext(Context)
    const [answerFormStatus, setAnswerFormStatus] = React.useState(context.answerFormStatus)
    const shareContext = {answerFormStatus, setAnswerFormStatus}

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