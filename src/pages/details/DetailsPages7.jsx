import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { blog } from "../../assets/data/data";

import BrouterImg1 from "../../../src/assets/images/Brou.jpg";
import BrouterImg2 from "../../../src/assets/images/Brou2.jpg";

export const DetailsPages7 = () => {
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
              <h1 style={{ textAlign: "center" }}>Brouter</h1>
              <p>{blogs.desc}</p>
              <ol>
                <li>
                  <strong>¿Qué es un Brouter?</strong>
                  <p>
                    Un Brouter es un dispositivo que combina las características
                    de un puente y un router. Se utiliza para conectar dos o más
                    redes informáticas y enrutar los paquetes de datos entre
                    ellas.
                  </p>
                  <p>
                    Los Brouters suelen tener instaladas dos o más tarjetas de
                    interfaz de red (NIC), cada una de las cuales está conectada
                    a una red diferente. Utilizan un software especial para
                    examinar cada paquete de datos que pasa por el dispositivo y
                    determinar a qué NIC debe reenviarse el paquete.
                  </p>
                </li>
                <li>
                  <strong>Diferencias entre un Router y un Brouter:</strong>
                  <p>
                    Un Router es un dispositivo que conecta dos o más redes
                    informáticas y reenvía los datos entre ellas. Funciona en la
                    capa de red del modelo OSI y puede trabajar con diferentes
                    protocolos.
                  </p>
                  <p>
                    Un Brouter, por otro lado, combina las funciones de un
                    puente y un router. Puede conectar redes que utilizan
                    diferentes protocolos y filtrar el tráfico entre ellas.
                  </p>
                </li>
                <li>
                  <strong>Ventajas del Brouter:</strong>
                  <ul>
                    <li>Puede conectar redes con diferentes protocolos.</li>
                    <li>
                      Filtra el tráfico entre las redes, permitiendo que solo
                      pasen ciertos tipos de tráfico.
                    </li>
                    <li>
                      Mejora el rendimiento al enrutar el tráfico a través de la
                      ruta más rápida entre las redes.
                    </li>
                    <li>Proporciona seguridad al aislar las redes entre sí.</li>
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
              src={BrouterImg1}
              alt="Brouter 1"
              style={{
                width: "100%",
                maxWidth: "400px",
                marginBottom: "20px",
                borderRadius: "5px",
              }}
            />
            <img
              src={BrouterImg2}
              alt="Brouter 2"
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
