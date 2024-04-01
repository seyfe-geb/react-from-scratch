import React from 'react'
import { Item } from './Item.types'
import LineItem from './LineItem'

type ItemListProps = {
    items: Item[]
    handleCheck: (id: number) => void
    handleDelete: (id: number) => void
}

const ItemList = ({items, handleCheck, handleDelete}: ItemListProps) => {
  return (
        <ul>
                {items.map((item) => (
                    <LineItem item={item} handleCheck={handleCheck} handleDelete={handleDelete} key={item.id}/>
                ))}
        </ul>
  )
}

export default ItemList