import styles from "../Input/Input.module.css";
import FormField from "../FormField/FormField";

const Textarea = ({label, id, error, ...props}) => {
  return (
      <FormField id={id} label={label} error={error} >
          <textarea className={styles.textarea} id={id} {...props} />
      </FormField>
  )
}

export default Textarea;
