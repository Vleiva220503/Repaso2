import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { blog } from "../../assets/data/data";

import Switch from "../../../src/assets/images/Switch.jpg";
import Switch2 from "../../../src/assets/images/Switch2.jpg";

export const DetailsPages3 = () => {
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
              <h1 style={{ textAlign: "center" }}>Switch</h1>
              <p>{blogs.desc}</p>
              <ol>
                <li>
                  <strong>¿Qué es un Switch de red?</strong>
                  <ul>
                    <li>
                      Un Switch de red es un dispositivo de{" "}
                      <strong>Capa 2</strong> que transmite información a través
                      de cables en una red local (LAN). Tiene varios puertos en
                      la parte frontal para las conexiones físicas de dicha red,
                      generalmente utilizando puertos RJ45 para cables Ethernet.
                      El número de puertos puede variar, desde 4 hasta incluso
                      96 puertos.
                    </li>
                    <li>
                      Imagina un Switch como la sala de correos de una red.
                      Cuando los cables Ethernet de un dispositivo se conectan a
                      un Switch de red, pueden enviar y recibir información a
                      una ubicación central para su posterior distribución, en
                      lugar de pasarla a dispositivos intermediarios
                      innecesarios o inseguros. Esto permite una comunicación
                      física estable y segura entre dispositivos, eliminando la
                      necesidad de una conexión inalámbrica limitada o
                      inestable.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Funciones y ventajas de los Switches de red:</strong>
                  <ul>
                    <li>
                      <strong>Transmisión de datos:</strong> Los Switches
                      Ethernet proporcionan conexiones físicas utilizadas para
                      transmitir información dentro de una red.
                    </li>
                    <li>
                      <strong>Soporte para múltiples dispositivos:</strong> Son
                      especialmente útiles en entornos con muchos dispositivos,
                      donde una solución exclusivamente inalámbrica no es
                      viable.
                    </li>
                    <li>
                      <strong>Gestión y seguridad:</strong> Los Switches de Capa
                      2 manejan la Capa 2 del Modelo OSI, mientras que los de
                      Capa 3 también pueden utilizar la Capa 3. Esto permite
                      manejar múltiples redes, lo que ofrece ventajas en
                      términos de gestión y seguridad.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Funcionamiento del Switch:</strong>
                  <ul>
                    <li>
                      Un Switch se instala en un <strong>Rack de Red</strong> y
                      conecta físicamente los dispositivos de tu red mediante
                      cables.
                    </li>
                    <li>
                      Cada <strong>Trama</strong> de datos viaja por los cables
                      hasta llegar al Switch. Utiliza las{" "}
                      <strong>Direcciones MAC</strong> para identificar a los
                      remitentes y destinatarios. Estas direcciones se asignan
                      permanentemente a los dispositivos de red.
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
              src={Switch}
              alt="Repetidor 2"
              style={{
                width: "100%",
                maxWidth: "400px",
                marginBottom: "20px",
                borderRadius: "5px",
              }}
            />
            <img
              src={Switch2}
              alt="Repetidor 3"
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
