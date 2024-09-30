"use client"
import React from 'react'
import styles from '@/app/ui/login/login.module.css'
import { authenticate } from '../lib/actions'
import { useFormState } from "react-dom";
const LoginPage = () => {
  const [state, formAction] = useFormState(authenticate, undefined)
  return (
    <div className={styles.container}>
      <form action={formAction} className={styles.content}>
        <h1 className={styles.heading}>Login</h1>
        <input placeholder='username' autoComplete='off' className={styles.input} type="text" name="username" />
        <input placeholder='password' autoComplete='off' className={styles.input} type="password" name="password"  />
        <button className={styles.btn}>Login</button>
        {state && state}
      </form>
    </div>
  )
}

export default LoginPage