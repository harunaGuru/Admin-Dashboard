"use client"
import { usePathname } from 'next/navigation';
import styles from './navbar.module.css'

// import { MdNotifications,  } from "react-icons/md";
import { MdNotifications, MdPublic, MdSearch, MdOutline3P } from "react-icons/md";
const Navbar = () => {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <div className={styles.container}> 
        <span className={styles.path}>{pathname.split("/").pop()}</span>  
        <div className={styles.menu}>
          <div className={styles.search}>
            <MdSearch  />
            <input className={styles.input} placeholder='search' type="text" name="text" id="text" />
          </div>
          <div className={styles.icon}>
            <MdOutline3P size={15} />
            <MdNotifications size={15} />
            <MdPublic size={15} />
          </div>
        </div>
    </div>
  )
}

export default Navbar