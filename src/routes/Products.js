import React from 'react'
import { connect } from 'dva'
import ProductList from '../components/ProductList'

const Products = ({dispatch, products}) => {
  // dispatch 不知道从哪儿来的。
  // products 是在connect后从model里来的
  function handleDelete (id) {
    dispatch({
      type: 'products/delete',
      payload: id
    })
  }
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={products}></ProductList>
    </div>
    )
}

export default connect(({products}) => ({products}))(Products)