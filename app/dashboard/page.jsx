import React from 'react'
import Card from '../ui/dashboard/card/card'
import styles from "../ui/dashboard/dashboard.module.css"
import Transaction from '../ui/dashboard/transaction/transaction'
import Chart from '../ui/dashboard/chart/chart'
import RightBar from '../ui/dashboard/rightBar/rightBar'

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
      <div className={styles.cardSection}>
      <Card />
      <Card />
      <Card />
      </div>
     <Transaction />
     <Chart />
      </div>
     <div className={styles.right}>
      <RightBar />
     </div>
    </div>
  )
}

export default page