import React from "react";

interface IProps {
  id: number;
}

const ListingInfo = ({ id }: IProps) => {
  return (
    <ul>
      <li>Listing ID: {id}</li>
      <li>Section: {"<section>"}</li>
      <li>Row: {"<row>"}</li>
      <li>...</li>
      <li></li>
    </ul>
  );
};

export default ListingInfo;
