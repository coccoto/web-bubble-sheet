import React from 'react'
// organisms
import OptionForm from '@/scripts/components/organisms/optionForm'
import AnswerSheet from '@/scripts/components/organisms/answerSheet'
// templates
import Header from '@/scripts/components/templates/header'
import Footer from '@/scripts/components/templates/footer'

export default () => {

    return (
        <div>
            <Header></Header>
            <div>
                <OptionForm></OptionForm>
                <AnswerSheet></AnswerSheet>
            </div>
            <Footer></Footer>
        </div>
    )
}