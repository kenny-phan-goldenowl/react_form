import styles from './Square.module.scss'
import clsx from 'clsx';

function Square({left, right}) {

    const classes = clsx(styles.square, {
        [styles.top__right]:right,
        [styles.bottom__left]:left
    })

    return (
        <div className={classes}></div>
    )
}

export default Square;