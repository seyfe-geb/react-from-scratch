import React, {FormEvent, FormEventHandler, useEffect, useState} from 'react';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import AddItem from './components/AddItem';
import { Item, Items } from './components/Item.types';
import SearchItem from './components/SearchItem';


function App() {

  const [newItem, setNewItem] = useState('')

  const [items, setItems] = useState<Item[]>([]);

  const [search, setSearch] = useState('');
  let storedItems = localStorage.getItem('shoppingList');

  useEffect(() => {
    storedItems? setItems(JSON.parse(storedItems)) : setItems([]);
  }, [])
  

  const handleCheck = (id: number) => {
    const listItems = items.map((i) => 
        i.id === id? {...i, checked: !i.checked}: i
    );
    setAndSaveItems(listItems);
  }

  const handleDelete = (id: number) => {
    const listItems = items.filter((i) => i.id !== id);
    setAndSaveItems(listItems);
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(!newItem) return;
    addItem(newItem)
    setNewItem('');
  }

  const addItem = (i: string) => {
    const newId = items.length? items[items.length - 1].id + 1 : 1;
    const myNewItem = {
      id: newId,
      checked: false,
      item: i
    };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  }

  const setAndSaveItems = (listItems: Array<Item>) => {
    setItems(listItems);
    localStorage.setItem('shoppingList', JSON.stringify(listItems))
  }

  return (
    <div className="App">
      <Header title="Groceries' List"/>
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem 
        search={search}
        setSearch={setSearch}
      />
      <Content 
      items={items.filter(i => (i.item.toLowerCase()).includes(search.toLowerCase()))} 
      handleCheck={handleCheck} 
      handleDelete={handleDelete}/>
      <Footer itemsLength={items.length}/>
    </div>
  );
}

export default App;
