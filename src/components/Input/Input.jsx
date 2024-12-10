import styles from "../Input/Input.module.css";
import FormField from "../FormField/FormField.jsx";

const Input = ({label, id, error, ...props}) => {
    return (
        <FormField id={id} label={label} error={error} >
            <input className={styles.input} id={id} {...props} />
        </FormField>
    )
}

export default Input;
