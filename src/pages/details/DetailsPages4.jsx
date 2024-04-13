import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { blog } from "../../assets/data/data";

import Hub from "../../../src/assets/images/Hub.jpg";
import Hub2 from "../../../src/assets/images/Hub2.jpg";

export const DetailsPages4 = () => {
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
              <h1 style={{ textAlign: "center" }}>Concentrador (Hub)</h1>
              <p>{blogs.desc}</p>
              <ol>
                <li>
                  <strong>¿Qué es un concentrador o hub?</strong>
                  <ul>
                    <li>
                      Un concentrador es un dispositivo que permite centralizar
                      diferentes nodos de una red de computadoras. Su función
                      principal es establecer una conexión entre un número
                      indefinido de computadoras y permitir el intercambio de
                      datos.
                    </li>
                    <li>
                      En términos sencillos, imagina un concentrador como una
                      especie de "sala de correos" para la red. Cuando los
                      cables de varios dispositivos se conectan a un
                      concentrador, este repite la señal de datos a todos los
                      puertos, sin distinguir si la información va dirigida a un
                      ordenador específico o a otro. Es decir, funciona como un
                      repetidor.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>
                    Diferencias entre un Switch y un Concentrador:
                  </strong>
                  <ul>
                    <li>
                      <strong>Concentrador (Hub):</strong>
                      <ul>
                        <li>Repite la señal de datos a todos los puertos.</li>
                        <li>
                          No puede distinguir a qué dispositivo va dirigida la
                          información.
                        </li>
                        <li>
                          Satura rápidamente el ancho de banda debido a la
                          repetición masiva de datos.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Switch:</strong>
                      <ul>
                        <li>
                          Trabaja en la capa de enlace de datos del modelo OSI.
                        </li>
                        <li>
                          Es "inteligente" y puede distinguir a qué dispositivo
                          va dirigida la información.
                        </li>
                        <li>
                          Ofrece una comunicación más eficiente y segura en
                          redes.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Funcionamiento del Concentrador:</strong>
                  <ul>
                    <li>
                      El concentrador se instala en una red y conecta
                      físicamente los dispositivos mediante cables.
                    </li>
                    <li>
                      Cada trama de datos viaja por los cables hasta llegar al
                      concentrador, que la repite a todos los puertos.
                    </li>
                    <li>
                      Aunque fue común en el pasado, en la actualidad se
                      prefiere utilizar switches debido a sus ventajas en
                      términos de gestión y eficiencia.
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
              src={Hub}
              alt="Concentrador (Hub) 1"
              style={{
                width: "100%",
                maxWidth: "400px",
                marginBottom: "20px",
                borderRadius: "5px",
              }}
            />
            <img
              src={Hub2}
              alt="Concentrador (Hub) 2"
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
