import React from 'react'
// organisms
import Main from '@/scripts/components/organisms/main'
// templates
import Header from '@/scripts/components/templates/header'
import Footer from '@/scripts/components/templates/footer'
// styles
import '@/styles/index.module.sass'

export default () => {

    return (
        <div>
            <Header></Header>
            <div>
                <Main></Main>
            </div>
            <Footer></Footer>
        </div>
    )
}