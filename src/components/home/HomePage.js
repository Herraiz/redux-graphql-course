import React from "react";
import Card from "../card/Card";
import styles from "./home.module.css";
import { connect } from "react-redux";

function Home({ characters, fetching, error }) {
  function renderCharacter() {
    if (fetching) {
      return <div>Cargando personajes...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    if (!characters || characters.length === 0) {
      return <div>No hay personajes disponibles</div>;
    }

    return <Card {...characters[0]} />;
  }

  return (
    <div className={styles.container}>
      <h2>Personajes de Rick y Morty</h2>
      <div>{renderCharacter()}</div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    characters: state.chars.array,
    fetching: state.chars.fetching,
    error: state.chars.error,
  };
}

export default connect(mapStateToProps)(Home);
