import React from 'react';

const data = [
  'Item1',
  'Item2',
  'Item3',
  'Item4'
]

const List = () => (
  <ul>
    {data.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
)

export default List;
