import styles from './styles.module.scss'

type InputProps = {
    label: string,
    type: string,
    onChange: (target: any) => void,
    value: string,
    validate: () => boolean,
    onBlur: () => void,
    erro: string
}

export default function Input(props: InputProps) {
    return (
        <label className={styles.container}>
            {props.label}
            <input 
                onChange={props.onChange}
                onBlur={props.onBlur}
                value={props.value} 
                type={props.type}  
            />
            { props.erro && <p className={styles.error}>{props.erro}</p>}
        </label>
    )
}
