// react
import React from 'react'
// styles
import styles from '@/styles/components/templates/footer.module.sass'

export default (): JSX.Element  => {

    return (
        <footer className={styles['container']}>
            <p>© 2022 coccoto</p>
        </footer>
    )
}