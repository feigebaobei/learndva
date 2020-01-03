import React from 'react'
import { connect } from 'dva'
import ProductList from '../components/NewsList'

const News = ({dispatch, products, title}) => {
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
      <h2>List of News</h2>
      <p>{products}</p>
      <p>{title}</p>
      <ProductList onDelete={handleDelete} products={products} title={title}></ProductList>
    </div>
    )
}

export default connect(({products, title}) => ({products, title}))(News)