// react
import React from 'react'
// material
import IconButton from '@mui/material/IconButton'
import Add from '@mui/icons-material/Add'
import Remove from '@mui/icons-material/Remove'
// contexts
import Context from '@/scripts/contexts/context'
// styles
import styles from '@/styles/components/organisms/scoreboard.module.sass'

type Props = {
}

export default (props: Props):React.JSX.Element  => {

    const context = React.useContext(Context.Context)

    const [isOpen, setIsOpen] = React.useState<boolean>(true)

    const handleScoreboard = () => {
        setIsOpen(! isOpen)
    }

    return (
        <div className={isOpen ? styles.containerOpen : styles.containerClose}>
            <div className={styles.barWrapper}>
                <div>SCORE</div>
                <div>
                    <IconButton onClick={handleScoreboard} size={'small'}>
                        {isOpen ? <Remove htmlColor={'#888888'}></Remove> : <Add htmlColor={'#888888'}></Add>}
                    </IconButton>
                </div>   
            </div>
            <div className={styles.scoreWrapper}>
                <div className={styles.scoreItems}>
                    <div>OK</div>
                    <div>{context.answerFormStatus.okNum}/{context.answerFormStatus.questionNum}</div>
                </div>
                <div className={styles.scoreItems}>
                    <div>NG</div>
                    <div>{context.answerFormStatus.ngNum}/{context.answerFormStatus.questionNum}</div>
                </div>
                <div className={styles.scoreItems}>
                    <div>FLAG</div>
                    <div>{context.answerFormStatus.flagNum}/{context.answerFormStatus.questionNum}</div>
                </div>
            </div>
        </div>
    )
}
