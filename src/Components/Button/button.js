import styles from "./button.module.css";

const Button = (props) => {
  const { onCanceled, onClicked, icon, title, img } = props;
  return (
    <div className={styles.customButton}>
      <button
        onClick={onCanceled ? onCanceled : onClicked}
        className="text-capitalize"
      >
        <span>{icon ? icon : ""}</span>
        {title} 
      </button>
    </div>
  );
};
export default Button;
