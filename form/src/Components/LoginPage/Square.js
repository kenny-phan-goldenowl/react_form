import styles from './Square.module.scss'
import clsx from 'clsx';

function Square({left, right}) {

    const classes = clsx(styles.square, {
        [styles.topRight]:right,
        [styles.bottomLeft]:left
    })

    return (
        <div className={classes}></div>
    )
}

export default Square;