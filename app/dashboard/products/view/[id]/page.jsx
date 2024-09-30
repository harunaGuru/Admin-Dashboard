import React from 'react'
import styles from '@/app/ui/dashboard/products/singleProduct/singleProduct.module.css'
import Image from 'next/image'
import { fetchSIngleProduct } from '@/app/lib/data'
import { updatProduct } from '@/app/lib/actions'

const ViewPage = async ({params}) => {
  const {id} = params 
  const product = await fetchSIngleProduct(id)
  console.log(product)
  return (
    <div className={styles.container}>
        <div className={styles.productForm}>
          <div className={styles.product}>
          <Image alt={product.title} src={product.img || '/noproduct.jpg'} fill className={styles.productImage}/>
          </div>
          {product.title} 
        </div>
        <div className={styles.formContainer}>
            <form action={updatProduct} className={styles.form}>
              <input type="hidden" name="id" value={product.id}/>
              <label for='title'>{product.title}</label>
              <input autoComplete='off' type="text" name="title" id="title" placeholder={product.title} />
              <label for='cat'>Category</label>
              <select name="cat" id="cat">
                <option selected={product.cat} value="kitchen">Kitchen</option>
                <option selected={product.cat} value="phone">Phone</option>
                <option selected={product.cat} value="computer">Computer</option>
              </select>
              <label for='price'>Price</label>
              <input autoComplete='off' type="number" name="price" id="price" placeholder={`${product.price}`}  />
              <label for='stock'>Stock</label>
              <input autoComplete='off' type="number" name="stock" id="stock" placeholder={product.stock} />
              <label for='color'>Color</label>
              <input autoComplete='off' type="text" name="color" id="color" placeholder={product.color} />
              <label for='size'>Size</label>
              <input autoComplete='off' type="text" name="size" id="size" placeholder={product.size} />
              <label for='des'>Description</label>
              <textarea name="des" id="des" placeholder={product.des} ></textarea>
              <button className={styles.btn}>update</button>
            </form>
        </div>
    </div>
  )
}

export default ViewPage