import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { blog } from "../../assets/data/data";

import repetidor2 from "../../../src/assets/images/Repetidor2.jpg";
import repetidor3 from "../../../src/assets/images/Repetidor.png";

export const DetailsPages = () => {
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
              <h1 style={{ textAlign: "center" }}>Repetidores</h1>
              <p>{blogs.desc}</p>
              <ol>
                <li>
                  <strong>¿Qué es un repetidor?</strong>
                  <p>
                    Un repetidor es un dispositivo que amplifica y regenera
                    señales en la línea de comunicación. Su función principal es
                    recibir una señal de un enrutador o punto de acceso
                    inalámbrico y luego retransmitirla, extendiendo así el
                    alcance de una red. En otras palabras, actúa como un
                    "amplificador" para que la señal pueda llegar a áreas más
                    alejadas.
                  </p>
                </li>
                <li>
                  <strong>Funcionamiento de un repetidor:</strong>
                  <p>
                    Imagina que tienes una red WiFi en tu casa, pero hay una
                    habitación donde la señal es débil o inexistente. Aquí es
                    donde entra en juego el repetidor. Lo colocas en un punto
                    estratégico entre el enrutador y la zona sin señal. El
                    repetidor recibe la señal del enrutador y la retransmite,
                    ampliando su alcance y cubriendo esa área muerta.
                  </p>
                </li>
                <li>
                  <strong>Características clave de los repetidores:</strong>
                  <p>
                    Amplificación de señal: Los repetidores amplifican la señal
                    existente sin modificarla. Capa física: Operan en la capa
                    física del modelo OSI, lo que significa que trabajan a nivel
                    de señales eléctricas y no interpretan datos. Simplicidad:
                    Son dispositivos sencillos y económicos, ideales para
                    mejorar la cobertura en entornos locales.
                  </p>
                </li>
                <li>
                  <strong>Consejos para usar repetidores correctamente:</strong>
                  <p>
                    Ubicación óptima: Coloca el repetidor en un punto donde aún
                    reciba una buena señal del enrutador, pero también pueda
                    extenderla hacia las áreas deseadas. Evita distancias
                    excesivas: No te alejes demasiado del enrutador, ya que
                    podría afectar la calidad de la señal. Sincronización
                    sencilla: La mayoría de los repetidores se configuran
                    fácilmente mediante WPS o procesos manuales. En resumen, los
                    repetidores son aliados útiles para mejorar la conectividad
                    en tu hogar u oficina, permitiéndote disfrutar de una señal
                    más fuerte y estable en todas las áreas.
                  </p>
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
              src={repetidor2}
              alt="Repetidor 2"
              style={{
                width: "100%",
                maxWidth: "400px",
                marginBottom: "20px",
                borderRadius: "5px",
              }}
            />
            <img
              src={repetidor3}
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
