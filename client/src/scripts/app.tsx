import React from 'react'
import { Routes, Route } from 'react-router-dom'
// organisms
import Main from '@/scripts/components/organisms/main'
// templates
import Header from '@/scripts/components/templates/header'
import Footer from '@/scripts/components/templates/footer'
// constants
import { ROUTES } from '@/constants'
// styles
import styles from '@/styles/app.module.sass'

export default () => {

    const appLayout = (
        <div>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </div>
    )

    return (
        <Routes>
            <Route path={ROUTES.INDEX} element={appLayout}></Route>
            <Route path={ROUTES.GRADING} element={appLayout}></Route>
        </Routes>
    )
}
