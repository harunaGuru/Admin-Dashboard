import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sideBar/sidebar";
import styles from "../ui/dashboard/dashboard.module.css"
import Footer from "../ui/dashboard/footer/footer";

export default function DashboardLayout({ children }) {
    return (
      <div className={styles.container}>
        <div className={styles.menu}>
          <Sidebar />
        </div>
        <div className={styles.content}>
          <Navbar  />
        {children}
        <Footer />
        </div>
      </div>
    )
  }
  