import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { blog } from "../../assets/data/data";

import Bri from "../../../src/assets/images/Bir.png";
import Bri2 from "../../../src/assets/images/Bri2.jpg";

export const DetailsPages5 = () => {
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
              <h1 style={{ textAlign: "center" }}>Puente (Bridge)</h1>
              <p>{blogs.desc}</p>
              <ol>
                <li>
                  <strong>¿Qué es un puente o bridge?</strong>
                  <ul>
                    <li>
                      Un puente es un dispositivo que conecta dos segmentos de
                      red para permitir la comunicación entre ellos. Su función
                      principal es filtrar y reenviar tráfico entre dos redes
                      locales (LAN) separadas.
                    </li>
                    <li>
                      Imagina un puente como un "traductor" entre dos idiomas
                      diferentes. Cuando los datos llegan a un puente, este
                      verifica si deben pasar al otro lado o quedarse en la
                      misma red.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Funciones y ventajas de los puentes:</strong>
                  <ul>
                    <li>
                      <strong>Segmentación de redes:</strong> Los puentes ayudan
                      a dividir una red grande en segmentos más pequeños. Esto
                      mejora la eficiencia y reduce la congestión.
                    </li>
                    <li>
                      <strong>Aislamiento de tráfico:</strong> Los puentes
                      evitan que el tráfico innecesario se propague a todas las
                      partes de la red.
                    </li>
                    <li>
                      <strong>Mejora del rendimiento:</strong> Al reducir la
                      cantidad de tráfico en una red, los puentes mejoran el
                      rendimiento general.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Funcionamiento del puente:</strong>
                  <ul>
                    <li>
                      El puente se instala entre dos segmentos de red (por
                      ejemplo, dos switches).
                    </li>
                    <li>
                      Cuando un dispositivo en un segmento envía datos, el
                      puente verifica si el destinatario está en el mismo
                      segmento o en el otro.
                    </li>
                    <li>
                      Si el destinatario está en el otro segmento, el puente
                      reenvía los datos solo a ese lado.
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
              src={Bri}
              alt="Puente (Bridge) 1"
              style={{
                width: "100%",
                maxWidth: "400px",
                marginBottom: "20px",
                borderRadius: "5px",
              }}
            />
            <img
              src={Bri2}
              alt="Puente (Bridge) 2"
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
