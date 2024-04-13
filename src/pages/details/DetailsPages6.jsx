import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { blog } from "../../assets/data/data";

import GatewayImg1 from "../../../src/assets/images/Gate.jpg";
import GatewayImg2 from "../../../src/assets/images/Gate2.jpg";

export const DetailsPages6 = () => {
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
              <h1 style={{ textAlign: "center" }}>
                Gateway (Puerta de enlace)
              </h1>
              <p>{blogs.desc}</p>
              <ol>
                <li>
                  <strong>¿Qué es un Gateway o puerta de enlace?</strong>
                  <ul>
                    <li>
                      Un Gateway es un dispositivo que conecta dos o más redes
                      diferentes, permitiendo que los datos fluyan entre ellas.
                      Actúa como un puente entre dos redes, facilitando la
                      comunicación entre ellas.
                    </li>
                    <li>
                      Imagina un Gateway como un "traductor" entre dos idiomas
                      diferentes. Cuando los datos llegan a un Gateway, este
                      verifica si deben pasar al otro lado o quedarse en la
                      misma red.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Funciones y ventajas de los Gateways:</strong>
                  <ul>
                    <li>
                      <strong>Interconexión de redes:</strong> Los Gateways
                      permiten la comunicación entre redes heterogéneas, como
                      una red local (LAN) y una red amplia (WAN) como Internet.
                    </li>
                    <li>
                      <strong>Protocolo de traducción:</strong> Los Gateways
                      pueden traducir protocolos de comunicación entre
                      diferentes redes. Por ejemplo, convertir datos de Ethernet
                      a Wi-Fi o de IPv4 a IPv6.
                    </li>
                    <li>
                      <strong>Seguridad y filtrado:</strong> Los Gateways pueden
                      aplicar políticas de seguridad, filtrar tráfico no deseado
                      y proteger las redes internas de amenazas externas.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Ejemplos de Gateways:</strong>
                  <ul>
                    <li>
                      <strong>Router:</strong> Un router es un tipo común de
                      Gateway que conecta redes locales a Internet.
                    </li>
                    <li>
                      <strong>Firewall:</strong> Un firewall actúa como un
                      Gateway de seguridad, controlando el tráfico entre redes
                      internas y externas.
                    </li>
                    <li>
                      <strong>Proxy:</strong> Un proxy es un Gateway que
                      intermedia las solicitudes entre clientes y servidores,
                      mejorando la seguridad y el rendimiento.
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
              src={GatewayImg1}
              alt="Gateway (Puerta de enlace) 1"
              style={{
                width: "100%",
                maxWidth: "400px",
                marginBottom: "20px",
                borderRadius: "5px",
              }}
            />
            <img
              src={GatewayImg2}
              alt="Gateway (Puerta de enlace) 2"
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
