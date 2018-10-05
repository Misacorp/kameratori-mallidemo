import React from 'react';
import Inputs from './Inputs';

const styles = {
  body: {
    backgroundColor: '#333333',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  page: {
    backgroundColor: '#FFFFFF',
    color: 'black',
    padding: '1em',
    margin: '1em',
    maxWidth: '300px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  h1: {
    fontWeight: 300,
    fontSize: '3em',
  },
};

function App() {
  return (
    <main style={styles.body}>
      <div style={styles.page}>
        <h1 style={styles.h1}>Mallidemo</h1>
        <p>
          Tämä esimerkki havainnollistaa Kameratorin tuotenimen ja mallin suhdetta.
          Malli on osa nimeä, mutta nimi voi sisältää lisätietoja.
        </p>
        <Inputs />
      </div>
    </main>
  );
}

export default App;
