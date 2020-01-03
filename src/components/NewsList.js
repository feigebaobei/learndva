import React from 'react'
import PropTypes from 'prop-types'
import { Table, Popconfirm, Button } from 'antd'

const ProductList = ({onDelete, products, title}) => { // 使用这个组件时需要传入这些参数
  const columns = [
    {
      title: 'Name', // 标题叫Name
      dataIndex: 'name', // 从数据集中通过name找到数据
    },
    {
      title: 'Actions',
      // 设置渲染方法
      render: (text, record) => { // 传入需要的参数
        return (
          <Popconfirm
            title="Delete?"
            onConfirm={() => {onDelete(record.id)}} 
            /*{confirm事件触发的方法及参数}*/
          >
            <Button>Delete</Button>
          </Popconfirm>
          )
      }
    }
  ]
  return (
    <div>
    <p>{title}</p>
    <Table
      dataSource = {products}
      columns = {columns}
    >
    </Table>
    </div>
  )
}
ProductList.propTypes = { // 设置ProductList方法的参数的类型。
  onDelete: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired
}
export default ProductList