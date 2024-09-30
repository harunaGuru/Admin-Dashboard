import React from 'react'
import styles from "@/app/ui/dashboard/products/products.module.css"
import Search from '@/app/ui/search/search'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '@/app/ui/pagination/pagination'
import { fetchProducts } from '@/app/lib/data'
import { deletProduct } from '@/app/lib/actions'


const Product = async ({searchParams}) => {
    const q = searchParams?.q || '';
    const page = searchParams?.page || 1;
    const {products, count} = await fetchProducts(q, page)
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <Search placeholder="search for a product" />
            <Link href="/dashboard/products/add">
                <button className={styles.btn}>Add New</button>
            </Link>
        </div>
        <table className={styles.table}>
            <thead>
            <tr>
                <td>Title</td>
                <td>Description</td>
                <td>Price</td>
                <td>CreatedAt</td>
                <td>Stock</td>
                <td>Action</td>
            </tr>
            </thead>
            <tbody>
                {products.map((product)=>
                    <tr key={product.id}>
                    <td>
                        <div className={styles.product}>
                        <Image alt={product.title}  src={product.img ? product.img : "/noproduct.jpg"} height={30} width={30} className={styles.productImage}/>
                        {product.title}
                        </div>
                    </td>
                    <td>{product.des}</td>
                    <td>{product.price}</td>
                    <td>{product.createdAt.toString().slice(4, 16)}</td>
                    <td>{product.stock}</td>
                    <td>
                        <div className={styles.buttons}>
                            <Link href={`/dashboard/products/view/${product.id}`}>
                                <button className={`${styles.button} ${styles.view}`}>View</button>
                            </Link> 
                            <form action={deletProduct}>
                                <input type="hidden" name="id" value={product.id}/>
                                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                            </form>
                        </div>
                    </td>
                </tr>
                )}
            </tbody>
        </table>
        <Pagination  count={count}/>
    </div>
  )
}

export default Product