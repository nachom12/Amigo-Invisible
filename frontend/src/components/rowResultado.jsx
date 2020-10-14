import React from 'react';

const RowResultado = ({jugador, amigoInvisible}) => (
    <tr>
        <th scope="row">{jugador}</th>
        <td>{amigoInvisible}</td>
    </tr>
);

export default RowResultado;