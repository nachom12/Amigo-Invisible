import React from 'react';
import '../styles/rowAmigo.css';

const RowAmigo = ({num, nombre , dato}) => (
    <tr>
        <th scope="row">{num}</th>
        <td>{nombre}</td>
        <td>{dato}</td>
    </tr>
);

export default RowAmigo;