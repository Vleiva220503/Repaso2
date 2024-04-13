import React from "react";
import "./blog.css";
import { blog } from "../../assets/data/data";
import { AiOutlineTags } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Card = () => {
  return (
    <>
      <section className="blog">
        <div className="container grid3">
          {blog.map((item) => (
            <div className="box boxItems" key={item.id}>
              <div className="img">
                <img src={item.cover} alt="" />
              </div>
              <div className="details">
                <div className="tag">
                  <AiOutlineTags className="icon" />
                  <a href="/">#{item.category}</a>
                </div>
                {/* Aquí se modifica el enlace para enviar a DetailsPages2 si el id es 2 */}
                <Link
                  to={
                    item.id === 2
                      ? `/details2/${item.id}`
                      : item.id === 3
                      ? `/details3/${item.id}`
                      : item.id === 4
                      ? `/details4/${item.id}`
                      : item.id === 5
                      ? `/details5/${item.id}`
                      : item.id === 6
                      ? `/details6/${item.id}`
                      : item.id === 7
                      ? `/details7/${item.id}`
                      : `/details/${item.id}`
                  }
                  className="link"
                >
                  <h3>{item.title}</h3>
                </Link>
                <p>{item.desc.slice(0, 180)}...</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
