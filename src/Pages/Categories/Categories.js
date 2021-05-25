import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../../Store";

import "./Categories.css";

export const Categories = () => {
  const { storeState } = useStore();
  const { categories } = storeState;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="categoryContainer">
      <h1>Categories</h1>
      <div className="categories">
        {categories.map((category) => {
          const { _id, title } = category;
          return (
            <div className="category" key={_id}>
              <Link
                to={"/category"}
                state={{ categoryId: _id, title: title }}
                className="routerLink"
              >
                <button className="btn outline categories">{title}</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
