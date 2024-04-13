import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { blog } from "../../assets/data/data";

import Router from "../../../src/assets/images/Router.jpg";
import Router2 from "../../../src/assets/images/Router2.jpg";

export const DetailsPages2 = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    let selectedBlog = blog.find((blog) => blog.id === parseInt(id));
    if (selectedBlog) {
      setBlogs(selectedBlog);
    }
  }, [id]);

  return (
    <>
      {blogs && (
        <section className="singlePage" style={{ marginTop: "25px" }}>
          <div
            style={{
              padding: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div style={{ maxWidth: "800px" }}>
              <h1 style={{ textAlign: "center" }}>Routers</h1>
              <p>{blogs.desc}</p>
              <ol>
                <li>
                  <strong>Conexión entre Redes:</strong>
                  <ul>
                    <li>
                      Un router actúa como un punto de conexión entre una red
                      local (como la de tu casa o empresa) y Internet. Permite
                      que varios dispositivos compartan la misma conexión a
                      Internet sin necesidad de que cada uno tenga su propia
                      conexión individual. Sin routers, cada dispositivo (móvil,
                      computadora, portátil, etc.) requeriría su propio acceso a
                      Internet.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Funcionamiento:</strong>
                  <ul>
                    <li>
                      Los routers enrutan el tráfico web y los datos entre
                      dispositivos de diferentes redes. Utilizan el protocolo de
                      Internet (IP) para gestionar el tráfico y dirigir los
                      paquetes de datos a las direcciones IP correctas. Son
                      intermediarios importantes entre los nodos de la red y la
                      Internet pública.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Enrutamiento de Datos:</strong>
                  <ul>
                    <li>
                      Imagina los routers como torres de control del tráfico
                      aéreo de Internet. Calculan la ruta de datos más rápida
                      entre direcciones IP únicas dentro de una red. Siguen
                      reglas específicas (llamadas protocolos de Internet) para
                      enviar los datos por la ruta con el valor métrico más
                      bajo.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Relación con el Módem:</strong>
                  <ul>
                    <li>
                      Los routers trabajan junto a un módem. Cuando los paquetes
                      de datos llegan desde los dispositivos conectados, el
                      router los reenvía al módem. El módem envía la información
                      al servidor correspondiente, que está conectado a Internet
                      a través de su propio router. Así, se establece la
                      comunicación entre los dispositivos y la red global.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
              flexWrap: "wrap",
            }}
          >
            <img
              src={Router}
              alt="Router 1"
              style={{
                width: "100%",
                maxWidth: "400px",
                marginBottom: "20px",
                borderRadius: "5px",
              }}
            />
            <img
              src={Router2}
              alt="Router 2"
              style={{
                width: "100%",
                maxWidth: "400px",
                borderRadius: "5px",
              }}
            />
          </div>
          <style>
            {`
              @media screen and (min-width: 768px) {
                div > img {
                  width: 50%;
                  max-width: calc(50% - 10px);
                  margin-right: 10px;
                  margin-bottom: 0;
                  margin-left: 0;
                }
              }
            `}
          </style>
        </section>
      )}
    </>
  );
};
