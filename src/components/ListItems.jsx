import React from 'react';


function ListItems({ items }) {
  return <ul style={{ height: '100%', maxHeight: '500px', marginTop: '8px', overflowY: 'auto' }}>
    {items.map((item) => (
      <div>
        <h1>{item.title}</h1>
        <button onClick={() => console.log(item.id)}>Add</button>
      </div>
    ))
    }
  </ul>
}

export default ListItems;