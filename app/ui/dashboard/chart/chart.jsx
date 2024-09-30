"use client"
import styles from './chart.module.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [
    {
        name: "Sun",
        visit: 2572,
        click: 4592,
    },
    {
        name: "Mon",
        visit:3025 ,
        click: 3475,
    },
    {
        name: "Tue",
        visit:3917 ,
        click: 2597,
    },
    {
        name: "Wed",
        visit: 3386,
        click: 3810,
    },
    {
        name: "Thu",
        visit: 3857,
        click:1531 ,
    },
    {
        name: "Fri",
        visit:1865 ,
        click: 3424,
    },
    {
        name: "Sat",
        visit: 2373,
        click:3487 ,
    }
]
const Chart = () => {
  return (
    <div className={styles.container}>
        <h3 className={styles.heading}>Weekly Recap</h3>
        <div className={styles.chart}>
        <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{background:"#151c2c", border:"none"}} />
          <Legend />
          <Line type="monotone" dataKey="click" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="visit" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
        </div>
    </div>
  )
}

export default Chart