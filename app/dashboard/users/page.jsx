import React from 'react'
import styles from "@/app/ui/dashboard/users/users.module.css"
import Search from '@/app/ui/search/search'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '@/app/ui/pagination/pagination'
import fetchUser from '@/app/lib/data'
import { deletUser } from '@/app/lib/actions'

const Users = async ({searchParams}) => {
    const q = searchParams?.q || '';
    const page = searchParams?.page || 1;
    const {users, count} = await fetchUser(q, page)
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <Search placeholder="search for a user" />
            <Link href="/dashboard/users/add">
                <button className={styles.btn}>Add New</button>
            </Link>
        </div>
        <table className={styles.table}>
            <thead>
            <tr>
                <td>Name</td>
                <td>Email</td>
                <td>CreatedAt</td>
                <td>Role</td>
                <td>Status</td>
                <td>Action</td>
            </tr>
            </thead>
            <tbody>
                {users.map((user)=>
                    <tr key={user.id}>
                    <td>
                        <div className={styles.user}>
                        <Image alt={user.username} src={user.img || '/noavatar.png'} height={30} width={30} className={styles.userImage}/>
                        {user.username}
                        </div>
                    </td>
                    <td>{user.email}</td>
                    <td>{user.createdAt.toString().slice(4, 16)}</td>
                    <td>{user.isAdmin ? "Admin" : "Client"}</td>
                    <td>{user.isActive ? "Active" : "Passive"}</td>
                    <td>
                        <div className={styles.buttons}>
                            <Link href={`/dashboard/users/view/${user.id}`}>
                            <button className={`${styles.button} ${styles.view}`}>View</button>
                            </Link>
                            <form action={deletUser}>
                                <input type="hidden" name="id" value={user.id}/>
                                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                            </form>
                        </div>
                    </td>
                </tr>
                )}
           
            
            </tbody>
        </table>
        <Pagination count={count} />
    </div>
  )
}

export default Users