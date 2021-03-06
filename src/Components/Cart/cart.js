import styles from "./cart.module.css";
import Button from "../Button/button";
import Pic01 from "../Asset/pic01.png";

const Cart = (props) => {
  const cartObj = {
    img: Pic01,
    title: "Bell Pape red",
    amount: "1kg",
    price: 200,
  };
  const icon = <i class="fas fa-plus"></i>;
  return (
    <div>
      <div className={styles.cartContainer} style={props.styles}>
        <img src={cartObj.img} alt="img" />
        <p className={styles.title}>{cartObj.title}</p>
        <p className={styles.text}>
          {cartObj.amount}
          <span>pricing</span>
        </p>
        <p className={styles.price}>${cartObj.price}</p>
        <Button
          icon={icon}
          title="Add to Cart"
          styles={{ fontSize: "14px", height: "40px", marginTop: "50px" }}
        />
      </div>
    </div>
  );
};

export default Cart;
