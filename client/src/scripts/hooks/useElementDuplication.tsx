// react
import React from 'react'

type Return = {
    generalDuplicate: (element: JSX.Element, productionNum: number) => JSX.Element[],
    duplicateMenu: (element: JSX.Element, menuList: MenuListType) => JSX.Element[],
}

export default (): Return => {

    const generalDuplicate = (element: JSX.Element, productionNum: number): JSX.Element[] => {
        const result: JSX.Element[] = []

        for (let i = 0; i < productionNum; i ++) {
            element = React.cloneElement(element, {key: i, index: i})
            result.push(element)
        }
        return result
    }

    const duplicateMenu = (element: JSX.Element, menuList: MenuListType): JSX.Element[] => {
        const result: JSX.Element[] = []

        menuList.result.map((value: MenuListResultType) => {
            element = React.cloneElement(element, {
                key: value['id'],
                children: value['app_name'],
                href: value['origin'] + value['path']
            })
            result.push(element)
        })
        return result
    }

    return {
        generalDuplicate: generalDuplicate,
        duplicateMenu: duplicateMenu,
    }
}