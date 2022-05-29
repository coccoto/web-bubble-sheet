// react
import React from 'react'

type Return = {
    duplicate: (element: JSX.Element, productionNum: number, isIndex: boolean) => JSX.Element[]
}

export default (): Return => {

    const duplicate = (element: JSX.Element, productionNum: number, isIndex: boolean): JSX.Element[] => {
        const result: JSX.Element[] = []

        for (let i = 0; i < productionNum; i ++) {
            element = React.cloneElement(element, {key: i})

            if (isIndex) {
                element = React.cloneElement(element, {index: i})
            }
            result.push(element)
        }
        return result
    }

    return {
        duplicate: duplicate
    }
}