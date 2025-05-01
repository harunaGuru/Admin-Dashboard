import Link from "next/link";
import styles from "@/app/ui/dashboard/users/users.module.css"

const Homepage = () => {
  return (
    <div>
      Homepage <br/><br/>
      <Link href="/login">
        <button className={styles.btn}>Login</button>
      </Link>
    </div>
  );
};

export default Homepage;
