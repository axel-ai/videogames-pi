import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import c from "./pagination.module.css";

export const Pagination = ({
  videogamesPerPage,
  totalVideogames,
  paginate,
}) => {
  const pageNumbers = [];
  const numOfPages = Math.ceil(totalVideogames / videogamesPerPage);

  for (let i = 1; i <= numOfPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={c.pagination}>
      {pageNumbers.map((num) => (
        <div key={num} className={c.item}>
          <button onClick={(e) => paginate(e, num)}>{num}</button>
        </div>
      ))}
    </nav>
  );
};
