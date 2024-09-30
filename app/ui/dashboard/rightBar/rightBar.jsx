import Image from 'next/image'
import styles from './rightBar.module.css'
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";


const RightBar = () => {
  return (
    <div className={styles.container}>
        <CardSection />
        <CardSectionB />
    </div>
  )
}

const CardSection = ()=>{
    return(
        <div className={styles.wrapper}>
          <div className={styles.image}>
            <Image src="/astronaut.png" fill className={styles.cardImage} />
          </div>
          <div className={styles.text}>
            <span className={styles.notification}>🔥 Available Now</span>
            <h3 className={styles.heading}>How to use the new version of the admin board ? </h3>
            <span className={styles.subheading}>Takes four minute to learn </span>
            <p className={styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, ab nisi dolorum</p>
            <button className={styles.btn}>
              <MdPlayCircleFilled />
              Watch
            </button>
          </div>
        </div>
    )
}
const CardSectionB = ()=>{
    return(
        <div className={styles.wrapper}>
          <div className={styles.text}>
            <span className={styles.notification}> 🚀 Coming Soon</span>
            <h3 className={styles.heading}>New server actions are available, partial pre-rendering is coming up! </h3>
            <span className={styles.subheading}>Takes four minute to learn </span>
            <p className={styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, ab nisi dolorum</p>
            <button className={styles.btn}>
              <MdReadMore />
              Learn
            </button>
          </div>
        </div>
    )
}
export default RightBar