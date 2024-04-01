import React, { Dispatch, FormEvent, FormEventHandler, SetStateAction, useRef } from 'react'
import { FaPlus } from 'react-icons/fa'

type AddItemProps = { 
    newItem: string; 
    setNewItem: Dispatch<SetStateAction<string>>; 
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void; 
}

const AddItem = ({newItem, setNewItem, handleSubmit}: AddItemProps) => {

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='addItem'>Add Item</label>
        <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            ref={inputRef}
            autoFocus
            id='addItem'
            type='text'
            placeholder='Add Item'
            required
        />

        <button
            type='submit'
            aria-label='addItem'
            onClick={() => inputRef.current?.focus()}
        >
            <FaPlus />
        </button>
    </form>
  )
}

export default AddItem