import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import img4 from './Imagenes/image 4.png';
import img5 from './Imagenes/image 9.png';

const Inicio = () => {
  return (
    <div style={{ backgroundColor: "#5AB2FF", padding: "20px", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 0", backgroundColor: "#5AB2FF" }}>
        <div style={{ display: "flex" }}>
          <Link to={"/"} style={{ textDecoration: "none", color: "white", marginRight: "40px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaHome style={{ marginRight: "5px" }} />
              <span>Home</span>
            </div>
          </Link>
          <Link to={"/productos"} style={{ textDecoration: "none", color: "white", marginRight: "40px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaShoppingCart style={{ marginRight: "5px" }} />
              <span>Productos</span>
            </div>
          </Link>
          <Link to={"/album"} style={{ textDecoration: "none", color: "white", marginRight: "40px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaBook style={{ marginRight: "5px" }} />
              <span>Álbum</span>
            </div>
          </Link>
          <Link to={"/blog"} style={{ textDecoration: "none", color: "white", marginRight: "20px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaBlog style={{ marginRight: "5px" }} />
              <span>Blog</span>
            </div>
          </Link>
        </div>
        <div>
          <Link to={"/login"}>
            <button style={{ padding: "5px 10px", fontSize: "14px", backgroundColor: "", color: "white", border: "none", cursor: "pointer", borderRadius: "5px" }}>
              <FaUser style={{ marginRight: "5px" }} />
              Iniciar Sesión
            </button>
          </Link>
        </div>
      </nav>

      <main style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>
        <section style={{ display: "flex", flex: 1, justifyContent: "flex-start" }}>
          <section style={{ marginBottom: "20px", textAlign: "center" }}>
            <h2>Cultura General de Colombia</h2>
            <img src={img4} alt="Imagen Colombia" style={{ width: "100%", maxWidth: "400px" }} />
            <p>La cultura de Colombia es una rica amalgama de influencias indígenas, africanas, europeas<br/> y mestizas que se refleja en su música, arte, gastronomía<br/> y tradiciones. Desde las danzas folclóricas como <br/>la cumbia y el vallenato hasta la diversidad de platos como la bandeja paisa y el sancocho, <br/>Colombia es un país vibrante y colorido que celebra su diversidad en cada rincón.</p>
          </section>
        </section>

        <section style={{ display: "flex", flex: 1, justifyContent: "center" }}>
          <section style={{ marginBottom: "20px", textAlign: "center" }}>
            <h2>Cultura de Antioquia</h2>
            <img src={img5} alt="Imagen Antioquia" style={{ width: "100%", maxWidth: "400px" }} />
            <p>Antioquia, uno de los departamentos más destacados de Colombia, tiene una cultura particularmente arraigada y orgullosa. <br/>Conocida por su gente amable, su café de alta calidad y su hermoso paisaje montañoso,<br/> Antioquia es un crisol de tradiciones que van desde <br/> la arquitectura colonial de Medellín hasta las festividades religiosas en pueblos como Guatapé.</p>
          </section>
        </section>

        <section style={{ display: "flex", flex: 1, justifyContent: "flex-end" }}>
          <section style={{ marginBottom: "20px", textAlign: "center" }}>
            <h2>Actividades</h2>
            <p>En cuanto a actividades, Colombia ofrece una amplia gama de opciones para disfrutar.<br/> Desde explorar las selvas tropicales y parques nacionales hasta recorrer ciudades <br/>históricas como Cartagena y Bogotá, hay algo para todos los gustos.<br/> Además, la vibrante escena cultural, los festivales de música y la cocina deliciosa hacen que Colombia <br/>sea un destino emocionante para aventurarse y descubrir.</p>
          </section>
        </section>
      </main>
    </div>
  );
};

export default Inicio;
