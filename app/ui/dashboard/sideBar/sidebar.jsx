import Image from 'next/image'
import styles from './sidebar.module.css'
import Link from 'next/link'
import { 
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout
 } from "react-icons/md";
import { auth, signOut } from '@/app/auth';
const content = [
  {
    title: "Pages",
    list :[
      {
        title: "Dashboard",
        icon: <MdDashboard />,
        link: "/dashboard"
      },
      {
        title: "Users",
        icon: <MdSupervisedUserCircle />,
        link: "/dashboard/users"
      },
      {
        title: "Products",
        icon: <MdShoppingBag />,
        link: "/dashboard/products"
      },
      {
        title: "Transactions",
        icon: <MdAttachMoney />,
        link: "/dashboard/transactions"
      },
    ]
  },
  {
    title: "Analytics",
    list :[
      {
        title: "Revenue",
        icon: <MdWork />,
        link: "/revenue"
      },
      {
        title: "Reports",
        icon: <MdAnalytics />,
        link: "/revenue/reports"
      },
      {
        title: "Teams",
        icon: <MdPeople />,
        link: "/revenue/teams"
      },
      
    ]
  },
  {
    title: "Users",
    list :[
      {
        title: "Settings",
        icon: <MdOutlineSettings />,
        link: "/settings"
      },
      {
        title: "Help",
        icon: <MdHelpCenter />,
        link: "/settings/help"
      },
    ]
  },
]


const Sidebar = async () => {
  const {user} = await auth();
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        
       <Image alt='' src={ user.img || "/noavatar.png"} className={styles.userImage} width={40} height={40} />
       <div className={styles.imgInfo}>
        <span className={styles.username}>admin</span>
        <span className={styles.role}>Adiminstrator</span>
       </div>
      </div>
      
        {content.map(cat=>(
          <div key={cat.title} className={styles.menu}>
            <span className={styles.title}>{cat.title}</span>
            <ul className={styles.ul}>
              {cat.list.map(list=>(
                <li key={list.title} className={styles.li}>
                  <Link href={list.link} className={styles.icons}>
                  {list.icon}
                  {list.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
        ))}
        <div className={styles.logOut}>
            <form action={ async()=> {
              "use server"
              await signOut()
            }}>
          <button className={styles.btn}>
            <MdLogout />
              Logout

            </button>
            </form>
        </div>
      </div>
  )
}

export default Sidebar