import React from 'react';

const RowAmigo = ({num, nombre , dato}) => (
    <tr>
        <th scope="row">{num}</th>
        <td>{nombre}</td>
        <td>{dato}</td>
    </tr>
);

export default RowAmigo;