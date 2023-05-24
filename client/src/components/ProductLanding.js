import React from "react";
import styles from "./ProductLanding.module.css";
const ProductLanding = ({ onClose }) => {
  return (
    <div className={styles.productLanding}>
      <div className={styles.dropdownBox}>
        <div>
          <div className={styles.selectLabel}>
            <b className={styles.product}>Product</b>
          </div>
          <img className={styles.arrowUpIcon} alt="" />
        </div>
        <div className={styles.itemList}>
          <div className={styles.item}>
            <div className={styles.label6}>
              <div className={styles.label1}>Honey</div>
            </div>
            <img
              className={styles.itemHovervariant5Icon}
              alt=""
              src="/item-hovervariant5.svg"
            />
          </div>
          <div className={styles.item1}>
            <div className={styles.label6}>
              <div className={styles.label1}>Wax</div>
            </div>
            <img
              className={styles.itemHovervariant5Icon}
              alt=""
              src="/item-hovervariant51.svg"
            />
          </div>
          <div className={styles.item2}>
            <div className={styles.label6}>
              <div className={styles.label1}>Pollen</div>
            </div>
            <img
              className={styles.itemHovervariant5Icon}
              alt=""
              src="/item-hovervariant52.svg"
            />
          </div>
          <div className={styles.item3}>
            <div className={styles.label6}>
              <div className={styles.label1}>Royal Jelly</div>
            </div>
            <img
              className={styles.itemHovervariant5Icon}
              alt=""
              src="/item-hovervariant53.svg"
            />
          </div>
          <div className={styles.item4}>
            <div className={styles.label6}>
              <div className={styles.label1}>Candles</div>
            </div>
            <img className={styles.itemHovervariant5Icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLanding;
