import classes from "./Input.module.css";

const Input = (props) => {
  let inputElement;

  switch (props.caseType) {
    case "textArea":
      inputElement = (
        <div className={classes.customTextArea}>
          {props.label ? (
            <label className="text-capitalize">{props.label}</label>
          ) : (
            ""
          )}
          <textarea onChange={props.changed} value={props.value} />
        </div>
      );
      break;
    case "border":
      inputElement = (
        <div className={classes.customInput}>
          {props.label ? (
            <label className="text-capitalize"> {props.label} </label>
          ) : (
            ""
          )}
          <input
            className={classes.border}
            placeholder={props.placeholder ? props.placeholder : ""}
            onChange={props.changed}
            value={props.value}
            type={props.type}
          />
        </div>
      );
      break;

    default:
      inputElement = (
        <div className={classes.customInput}>
          {props.label ? (
            <label className="text-capitalize"> {props.label} </label>
          ) : (
            ""
          )}
          <input
            placeholder={props.placeholder ? props.placeholder : ""}
            onChange={props.changed}
            value={props.value}
            type={props.type}
          />
        </div>
      );
  }

  return <>{inputElement}</>;
};
export default Input;
