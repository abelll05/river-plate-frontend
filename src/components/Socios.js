// src/components/Socios.js
import React from "react";
import "./Socios.css";

const Socios = () => {
  return (
    <div className="socios-container">
      <h1 className="socios-title">Socios de River Plate</h1>

      {/* CATEGORÍAS */}
      <section className="socios-section">
        <h2 className="socios-section-title">Categorías</h2>
        <ul className="socios-list">
          <li>Infantil (hasta 6 inclusive)</li>
          <li>Menor Simple (de 7 a 17)</li>
          <li>Menor Pleno (de 7 a 17)</li>
          <li>Activo Simple (mayor de 18)</li>
          <li>Activo Pleno (mayor de 18)</li>
          <li>Adherente (no distingue edad)</li>
          <li>Internacional (no distingue edad)</li>
          <li>Somos River (no distingue edad)</li>
        </ul>
      </section>

      {/* IMPORTANTE */}
      <section className="socios-section">
        <h2 className="socios-section-title">Importante</h2>
        <ul className="socios-important-list">
          <li>
            Actualmente las categorías habilitadas para inscripciones son:
            Infantil, Menor Simple, Menor Pleno, Activo Simple, Activo Pleno,
            Internacional y Comunidad Somos River.
          </li>
          <li>
            Los Socios Infantiles, al cumplir 7 años, pasan automáticamente a la
            categoría Menor Pleno, sin excepción.
          </li>
        </ul>
      </section>

      {/* BENEFICIOS Y ALCANCE */}
      <section className="socios-section">
        <h2 className="socios-section-title">Beneficios y Alcance</h2>

        <div className="socios-benefits">
          <h3 className="socios-benefit-title">Simple</h3>
          <p className="socios-benefit-text">
            Acceso a la compra de entradas por partido con prioridad y abonos de
            TLM durante la venta de remanentes, ingresar al Club y disfrutar de
            beneficios y descuentos en los comercios adheridos.
          </p>

          <h3 className="socios-benefit-title">Pleno</h3>
          <p className="socios-benefit-text">
            Acceso a la compra de entradas por partido con prioridad y abonos de
            TLM durante la venta de remanentes. Además, podrá disfrutar de la
            totalidad del Club, sus instalaciones y participar en las distintas
            actividades (abonando el arancel adicional en los casos que
            corresponda). También, gozar de los beneficios y descuentos en los
            comercios adheridos.
          </p>

          <h3 className="socios-benefit-title">Internacional</h3>
          <p className="socios-benefit-text">
            Acceso a la compra de entradas por partido con prioridad, ingresar al
            Club y disfrutar de beneficios y descuentos en los comercios adheridos.
          </p>

          <h3 className="socios-benefit-title">Comunidad Somos River</h3>
          <p className="socios-benefit-text">
            Podrá comprar entradas por partido con prioridad y acceder a los
            beneficios y descuentos en los comercios adheridos.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Socios;
