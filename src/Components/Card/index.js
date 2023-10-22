import styles from './Card.module.scss'
import React from 'react';

function Card(props) {
  const [isAdded , isTheAdded] = React.useState(false);

  const onClickPluse = () => {
    isTheAdded(!isAdded)
  }
  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={props.onFavorit}>
        <img src="/img/unliked.svg" />
      </div>
      <img className="d-flex justify-between" width={173} height={149} src={props.imageUrl}></img>
      <p>{props.title}</p>
      <div className="d-flex justify-between">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price}р</b>
        </div>
        <img className={styles.plus} onClick={onClickPluse} width={30} height={30} src={isAdded ?"/img/btn-checked.svg" : "/img/btn-plus.svg"}></img>
      </div>
    </div>
  );
}

export default Card;