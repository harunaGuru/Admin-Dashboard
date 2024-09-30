import React from 'react'
import styles from '@/app/ui/dashboard/users/add/add.module.css'
import { createUser } from '@/app/lib/actions'
const AddPage = () => {
  return (
    <div className={styles.container}>
      <form action={createUser} className={styles.form}>
        <input autoComplete='off' type="text" name="username" id="username" placeholder='username'/>
        <input autoComplete='off' type="password" name="password" id="password" placeholder='password' />
        <input autoComplete='off' type="email" name="email" id="email" placeholder='email' />
        <input autoComplete='off' type="number" name="phone" id="phone" placeholder='phone' />
        <select name="isAdmin" id="isAdmin">
          <option value="isAdmin">IsAdmin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value="isActive">isActive?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
          <textarea name="desc" id="desc" rows="10"></textarea>
        <button className={styles.btn}>Submit</button>
      </form>
    </div>
  )
}

export default AddPage