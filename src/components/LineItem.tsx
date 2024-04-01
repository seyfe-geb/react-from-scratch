import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { Item } from './Item.types'

type LineItemProps = {
    item: Item
    handleCheck: (id: number) => void
    handleDelete: (id: number) => void
}

const LineItem = ({item, handleCheck, handleDelete}: LineItemProps) => {
  return (
    <li className="item">
                        <input
                            type="checkbox"
                            onChange={() => handleCheck(item.id)}
                            checked={item.checked}
                        />
                        <label
                            style={(item.checked) ? { textDecoration: 'line-through' } : {}}
                            onDoubleClick={() => handleCheck(item.id)}
                        >{item.item}</label>
                        <FaTrashAlt
                            onClick={() => handleDelete(item.id)}
                            role="button"
                            tabIndex={0}
                            aria-label={`Delete ${item.item}`}
                        />
    </li>
  )
}

export default LineItem