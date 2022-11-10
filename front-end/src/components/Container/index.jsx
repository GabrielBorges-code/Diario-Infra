import styles from './styles.module.css';

export default function Container(props) {
    return (    
        <div className={`${styles.container} ${styles[props.customClass]}`}>
            {props.children}
        </div>

    );
}
