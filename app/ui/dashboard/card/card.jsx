import Image from 'next/image'
import styles from './card.module.css'
import { MdSupervisedUserCircle } from "react-icons/md";

const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle />
      <div className={styles.cardInfo}>
        <span className={styles.total}>Total Users</span>
        <span className={styles.average}>10.273</span>
        <span className={styles.details}><span className={styles.positive}>12%</span>more than previous week</span>
      </div>
    </div>
  )
}

export default Card