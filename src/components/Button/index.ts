import { ReactNode } from 'react'
import styles from './styles.module.scss'

type ButtonProps = {
    children: ReactNode,
    props?: any
}

export default function Button({children , ...props}: ButtonProps) {
    return (
       <button {...props} className={styles.button}>
           {children}
       </button>
    )
}
