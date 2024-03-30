import React from 'react';

const NameListTable = ({ names }) => {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {names.map((name, index) => (
          <tr key={name}>
            <td>{index + 1}</td>
            <td>{name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NameListTable;