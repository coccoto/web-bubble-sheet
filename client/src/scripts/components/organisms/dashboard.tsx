// react
import React from 'react'
// molecules
import OptionForm from '@/scripts/components/molecules/optionForm'
import Grading from '@/scripts/components/molecules/grading'
// styles
import styles from '@/styles/components/organisms/dashboard.module.sass'

export default (): React.ReactElement => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <OptionForm></OptionForm>
                
                <Grading></Grading>
            </div>
        </div>
    )
}