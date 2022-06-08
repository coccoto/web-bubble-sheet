// react
import React from 'react'

type Return = {
    generalDuplicate: (element: JSX.Element, productionNum: number, isIndex: boolean) => JSX.Element[],
    duplicateMenu: (element: JSX.Element, menuData: MstMenuType) => JSX.Element[],
}

export default (): Return => {

    const generalDuplicate = (element: JSX.Element, productionNum: number, isIndex: boolean): JSX.Element[] => {
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

    const duplicateMenu = (element: JSX.Element, menuData: MstMenuType): JSX.Element[] => {
        const result: JSX.Element[] = []

        menuData.result.map((value: MstMenuValueType, i: number) => {
            element = React.cloneElement(element, {key: i, children: value['name'], href: value['url']})
            result.push(element)
        })
        return result
    }

    return {
        generalDuplicate: generalDuplicate,
        duplicateMenu: duplicateMenu,
    }
}