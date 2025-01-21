import styles from "./ProductCard.module.css"
import { Link } from "react-router-dom";

function ProductCard({product}) {
    return (
      <Link to={`/product/${product.id}`}>
        <div className={styles['product-card']}>
          <div className={styles['card-image-container']}>
              <img src={product.fotoSrc} alt={product.name} />
          </div>
          <div className={styles['card-text-container']}>
              <h3 className={styles['title']}>{product.name}</h3>
  
          </div>
        </div>
      </Link>
    );
  }
  
  export default ProductCard;