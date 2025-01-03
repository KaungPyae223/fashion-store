import ProductUpdatePage from '@/admin-side/features/product-management/product-list/page/ProductUpdatePage'
import React from 'react'

const page = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div>
        <ProductUpdatePage id={id}/>
    </div>
  )
}

export default page