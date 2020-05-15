import React, { useState, useEffect } from "react";
import api from './services/api';

import Header from "./components/Header";

import './App.css';
import BgImage from './assets/background.jpeg';

function App() {
  //useState retorna um array com 2 posições
  //
  //1. Variável com o seu valor inicial
  //2. Função para atualizarmos esse valor
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    })
  }, []);

  async function handleAddProject() {
    //setProjects([...projects, `Novo projeto ${Date.now()}`]);
    const response = await api.post('projects', {
      title: 'Mobile com Expo',
      owner: 'Walter S. A. Souza',
    })

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <Header title="Projects" />

      <img src={BgImage} alt="background"/>

      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Adicionar Projeto
      </button>
    </>
  );
}

export default App;
