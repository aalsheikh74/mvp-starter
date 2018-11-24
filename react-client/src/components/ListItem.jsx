import React from 'react';

const ListItem = (props) => (
  <div>
    {props.item.name}  {props.item.type}
  </div>
)

export default ListItem;