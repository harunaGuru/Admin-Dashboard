import React from 'react'
import styles from '@/app/ui/dashboard/users/singleUser/singleUser.module.css'
import Image from 'next/image'
import { fetchSIngleUser } from '@/app/lib/data'
import { updateUser } from '@/app/lib/actions'

const ViewPage = async ({params}) => {

  const {id} = params
  // console.log(id)
  const user = await fetchSIngleUser(id)
  // console.log(user)
  return (
    <div className={styles.container}>
        <div className={styles.userform}>
          <div className={styles.user}>
          <Image alt={user.username} src={user.img || '/noavatar.png'} fill className={styles.userImage}/>
          </div>
          {user.username}
        </div>
        <div className={styles.formContainer}>
            <form action={updateUser} className={styles.form}>
            <input type="hidden" name="id" value={user.id}/>
              <label for='username'>UserName</label>
              <input autoComplete='off' type="text" name="username" id="username" placeholder={user.username}/>
              <label for='email'>Email</label>
              <input autoComplete='off' type="email" name="email" id="email" placeholder={user.email} />
              <label for='password'>Password</label>
              <input autoComplete='off' type="password" name="password" id="password"  />
              <label for='phone'>Phone</label>
              <input autoComplete='off' type="text" name="phone" id="phone" placeholder={user.phone} />
              <label for='address'>Address</label>
              <textarea name="address" id="address" placeholder={user.address} ></textarea>
              <label for='isAdmin'>IsAdmin?</label>
              <select name="isAdmin" id="isAdmin">
                <option value={true} selected={user.isAdmin}>Yes</option>
                <option value={false} selected={!user.isAdmin}>No</option>
              </select>
              <label for='isActive'>IsActive</label>
              <select name="isActive" id="isActive">
                <option value={true} selected={user.isActive}>Yes</option>
                <option value={false} selected={!user.isActive}>No</option>
              </select>
              <button type='submit' className={styles.btn}>update</button>
            </form>
        </div>
    </div>
  )
}

export default ViewPage