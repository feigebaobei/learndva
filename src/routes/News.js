import React from 'react'
import { connect } from 'dva'
import NewsList from '../components/NewsList'

const News = ({dispatch, products, title}) => {
  // dispatch 不知道从哪儿来的。
  // products 是在connect后从model里来的
  function handleDelete (id) {
    dispatch({
      type: 'news/delete',
      payload: id
    })
  }
  return (
    <div>
      <h2>List of News</h2>
      <p>{title}</p>
      <NewsList title={title} products={products}></NewsList>
    </div>
    )
}

export default connect(({products, title}) => ({products, title}))(News)