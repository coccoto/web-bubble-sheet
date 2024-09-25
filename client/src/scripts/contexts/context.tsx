// react
import React from 'react'

type ContextType = {
    answerFormStatus: {
        questionNum: number,
        bubbleNum: number,
        okNum: number,
        ngNum: number,
        flagNum: number,
    },
    setAnswerFormStatus: React.Dispatch<React.SetStateAction<{
        questionNum: number,
        bubbleNum: number,
        okNum: number,
        ngNum: number,
        flagNum: number,
    }>>,
}

type Props = {
    children: React.ReactNode;
}

const Context = React.createContext<ContextType>({
    answerFormStatus: {
        questionNum: 5,
        bubbleNum: 4,
        okNum: 0,
        ngNum: 0,
        flagNum: 0,
    },
    setAnswerFormStatus: () => {},
})

const ContextProvider = (props: Props): JSX.Element => {
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