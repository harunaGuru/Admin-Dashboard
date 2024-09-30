"use client"
import styles from './pagination.module.css'
import { usePathname, useSearchParams,useRouter } from 'next/navigation'

const Pagination =  ({count}) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const {replace} = useRouter()

  const TOTAL_PER_PAGE = 2
  const page = searchParams.get('page') || 1;
  const params = new URLSearchParams(searchParams)

  const hasPrev = TOTAL_PER_PAGE * (parseInt(page)- 1) > 0
  const hasNext = TOTAL_PER_PAGE * parseInt(page) < count
  
  const handleClick = (type)=>{
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
    replace(`${pathname}?${params}`);
  }
  return (
    <div className={styles.container}>
      <button disabled={!hasPrev} className={styles.btn} onClick={()=>handleClick("prev")}>Previous</button>
      <button disabled={!hasNext} className={styles.btn} onClick={()=>handleClick("next")}>Next</button>
    </div>
  )
}

export default Pagination