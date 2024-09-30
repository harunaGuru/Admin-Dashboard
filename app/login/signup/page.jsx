"use client"
import React from 'react'
import { useRef } from "react";
import styles from '@/app/ui/login/signup/signup.module.css'
import classnames from 'classnames';
import 'boxicons'

const page = () => {
  const signElement = useRef();
  const handleClick =(e)=>{
    e.preventDefault()
    signElement.current.classList.toggle(styles['active'])

  }
  return (
    <div className={styles.container}>
      <div  ref={signElement} className={styles.content}>
          <form className={classnames(styles.form, styles.signin) }>
            <h1>SignIn</h1>
            <div className={styles.socials}>
            <box-icon animation='spin-hover' color="black" border='square' size="sm"  type='logo' name='google'></box-icon>
            <box-icon animation='spin-hover' color="black" border='square' size="sm"   type="logo" name="facebook"></box-icon>
            <box-icon animation='spin-hover' color="black" border='square' size="sm"  type='logo' name='github'></box-icon>
            <box-icon animation='spin-hover' color="black" border='square' size="sm" type='logo' name='linkedin'></box-icon>
            </div>
            <input autoComplete='off' className={styles.input} type="text" name="username" id="username" />
            <input autoComplete='off' className={styles.input} type="password" name="password" id="password" />
            <button onClick={handleClick} className={styles.btn}>Submit</button>
          </form>
          <form className={classnames(styles.form, styles.signup)}>
            <h1>SignUp</h1>
            <div className={styles.socials}>
            <box-icon animation='spin-hover' color="black" border='square' size="sm"  type='logo' name='google'></box-icon>
            <box-icon animation='spin-hover' color="black" border='square' size="sm"   type="logo" name="facebook"></box-icon>
            <box-icon animation='spin-hover' color="black" border='square' size="sm"  type='logo' name='github'></box-icon>
            <box-icon animation='spin-hover' color="black" border='square' size="sm" type='logo' name='linkedin'></box-icon>
            </div>
            <input autoComplete='off' className={styles.input} type="text" name="username" id="username" />
            <input  autoComplete='off' className={styles.input} type="password" name="password" id="password" />
            <button onClick={handleClick}  className={styles.btn}>Submit</button>
          </form>
        <div className={styles.toggleContainer}>
          <div className={ styles.toggle}>
            <form className={classnames(styles.toggleForm, styles.email)}>
              <h2>Welcome to Haroon Dashboard</h2>
              <p>click below to signup with email and password</p>
              <button onClick={handleClick} className={styles.btn}>Submit</button>
            </form>
            <form className={classnames(styles.toggleForm, styles.password)}>
              <h2>Welcome to Haroons Page</h2>
              <p>click the button below to get started</p>
              <button onClick={handleClick} className={styles.btn}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page