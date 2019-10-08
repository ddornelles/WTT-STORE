import React from 'react';

export default function CartItem({ item, value }) {
  const { url, author, imageLink, pages, title, year, price } = item;
  const { removeItem } = value;
  return (
    <tr>
      <td>
        <img src={imageLink} className="img-thumbnail rounded float-left mt-1 mr-2 cart-item" alt={title} />
        <div>
          <p><br />
          Title: {title}<br />
          Author: {author}<br />
          Pages: {pages}<br />
          Year: {year}</p>
        </div>
      </td>
      <td className="text-right align-middle">R$ {price} <button type="button" onClick={() => removeItem(url)} className="btn btn-sm btn-outline-danger"><i className="fas fa-trash-alt"></i></button></td>
    </tr>
  )
}
