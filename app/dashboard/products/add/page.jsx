import React from 'react'
import styles from '@/app/ui/dashboard/products/add/add.module.css'
import { createProduct } from '@/app/lib/actions'
const AddProduct = () => {
  return (
    <div className={styles.container}>
      <form action={createProduct} className={styles.form}>
        <input autoComplete='off' required type="text" name="title" id="title" placeholder='title'/>
        <select name="cat" id="cat">
          <option value="general">choose a category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input autoComplete='off' required type="number" name="price" id="price" placeholder='price' />
        <input autoComplete='off' required type="number" name="stock" id="stock" placeholder='stock' />
        <input autoComplete='off' type="text" name="color" id="color" placeholder='color' />
        <input autoComplete='off' type="text" name="size" id="size" placeholder='size' />
        <textarea placeholder='Description' name="des" id="des" rows="10"></textarea>
        <button className={styles.btn}>Submit</button>
      </form>
    </div>
  )
}

export default AddProduct