import Image from 'next/image'
import styles from './transaction.module.css'

const Transaction = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Latest Transaction</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> 
              <div className={styles.imgContainer}>
                <Image src="/noavatar.png" height={30} width={30} className={styles.userImage}/>
                John Doe
              </div>
              </td>
            <td>Pending</td>
            <td>14.02.2020</td>
            <td>$3,200</td>
          </tr>
          <tr>
            <td>
            <div className={styles.imgContainer}>
                <Image src="/noavatar.png" height={30} width={30} className={styles.userImage}/>
                John Doe
              </div>
            </td>
            <td><span className={`${styles.action} ${styles.done}`}>Done</span></td>
            <td>14.02.2020</td>
            <td>$3,200</td>
          </tr>
          <tr>
            <td>
            <div className={styles.imgContainer}>
                <Image src="/noavatar.png" height={30} width={30} className={styles.userImage}/>
                John Doe
              </div>
            </td>
            <td>Cancelled</td>
            <td>14.02.2020</td>
            <td>$3,200</td>
          </tr>
          <tr>
            <td>
            <div className={styles.imgContainer}>
                <Image src="/noavatar.png" height={30} width={30} className={styles.userImage}/>
                John Doe
              </div>
            </td>
            <td>Pending</td>
            <td>14.02.2020</td>
            <td>$3,200</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Transaction