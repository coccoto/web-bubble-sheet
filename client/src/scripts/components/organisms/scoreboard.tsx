// react
import React from 'react'
// contexts
import Context from '@/scripts/contexts/context'
// material
import IconButton from '@mui/material/IconButton'
import Add from '@mui/icons-material/Add'
import Remove from '@mui/icons-material/Remove'
// styles
import styles from '@/styles/components/organisms/scoreboard.module.sass'

type Props = {
}

export default (props: Props): JSX.Element  => {

    const context = React.useContext(Context.Context)

    const [isOpen, setIsOpen] = React.useState<boolean>(false)

    const handleScoreboard = () => {
        setIsOpen(! isOpen)
    }

    return (
        <div className={isOpen ? styles['container--open'] : styles['container--close']}>
            <div className={styles['bar-wrapper']}>
                <div>SCORE</div>
                <div>
                    <IconButton onClick={handleScoreboard} size={'small'}>
                        {isOpen ? <Remove htmlColor={'#888888'}></Remove> : <Add htmlColor={'#888888'}></Add>}
                    </IconButton>
                </div>   
            </div>
            <div className={styles['score-wrapper']}>
                <div className={styles['score-items']}>
                    <div>OK</div>
                    <div>{context.answerFormStatus.okNum}/{context.answerFormStatus.questionNum}</div>
                </div>
                <div className={styles['score-items']}>
                    <div>NG</div>
                    <div>{context.answerFormStatus.ngNum}/{context.answerFormStatus.questionNum}</div>
                </div>
                <div className={styles['score-items']}>
                    <div>FLAG</div>
                    <div>{context.answerFormStatus.flagNum}/{context.answerFormStatus.questionNum}</div>
                </div>
            </div>
        </div>
    )
}
