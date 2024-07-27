import React, { useState } from 'react';
import chatOnline from '../../img/chatOnline.png';
import cardIndexFlutter from '../../img/cardIndexFlutter.png';
import projetoSite from '../../img/projetoSite.png';
import certificate from '../../img/certificate.png';
//import newProject1 from '../../img/newProject1.png'; // Novo projeto
//import newProject2 from '../../img/newProject2.png'; // Novo projeto
//import newProject3 from '../../img/newProject3.png'; // Novo projeto

function Projects() {
    const [resultadoCep, setResultadoCep] = useState('');
    const [showCepCover, setShowCepCover] = useState(false);

    function mostrarConsultaCep() {
        const cepCover = document.getElementById('cepCover');
        if (cepCover) {
            cepCover.style.display = 'none';
        }
    }

    function toggleCepBox(show) {
        setShowCepCover(show);
        const cepCover = document.getElementById('cepCover');
        if (cepCover) {
            cepCover.style.display = show ? 'none' : 'flex';
        }
    }

    function buscarCep() {
        const cep = document.getElementById('cepInput').value;
        const url = `https://viacep.com.br/ws/${cep}/json/`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('CEP não encontrado.');
                }
                return response.json();
            })
            .then(data => {
                setResultadoCep(
                    `Endereço: ${data.logradouro}<br/>
                    Bairro: ${data.bairro}<br/>
                    Cidade: ${data.localidade}<br/>
                    Estado: ${data.uf}`
                );
            })
            .catch(error => {
                setResultadoCep('Erro ao buscar o CEP.');
            });
    }

    function clear() {
        document.getElementById('cepInput').value = "";
        setResultadoCep("");
    }

    return (
        <div className="projects" id="Projects">
            <h2 className="heading">Latest<span> Projects</span></h2>

            <div className="projects-content">
                <div className="projects-box">
                    <img src={cardIndexFlutter} alt=""></img>
                    <div className="project-layer">
                        <h4>App Mobile</h4>
                        <p>This app provides basic features such as login authentication seamlessly linked to the bank (Firebase), and some others functions</p>
                        <a href="https://github.com/sidneyjfg/FlutterApp" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
                    </div>
                </div>
                <div className="projects-box">
                    <img src={projetoSite} alt=""></img>
                    <div className="project-layer">
                        <h4>Web design</h4>
                        <p>This site was intended to be created in order to serve a Customer service, building gas maintenance and others.</p>
                        <a href="https://engasbrasil.com.br" target="_blank" rel="noopener noreferrer"><i className='bx bx-link-external'></i></a>
                    </div>
                </div>
                <div className="projects-box">
                    <div className="cep">
                        <div className={showCepCover ? "cep-cover" : "cep-cover hidden"} id="cepCover">
                            <button onClick={() => {
                                toggleCepBox(true);
                                mostrarConsultaCep();
                            }}>Visualize</button>
                            <button onClick={() => toggleCepBox(false)} id="closeButton" style={{ display: 'none' }}>Exit</button>
                        </div>

                        <h4>CEP Search</h4>
                        <p>Enter a ZIP code to view its location and information:</p>
                        <input type="text" id="cepInput" placeholder="Digite um CEP" />
                        <button onClick={() => {
                            toggleCepBox(true);
                            buscarCep();
                        }}>Search</button>
                        <div id="resultadoCep" dangerouslySetInnerHTML={{ __html: resultadoCep }}></div>
                        <button onClick={() => {
                            toggleCepBox(false);
                            clear();
                        }}>Exit</button>
                    </div>
                </div>
                <div className="projects-box">
                    <img src={certificate} alt=""></img>
                    <div className="project-layer">
                        <h4>Python project</h4>
                        <p>This Python script automates the generation of certificates for students based on data provided in an Excel spreadsheet</p>
                        <a href="https://github.com/sidneyjfg/Automated-Certificate/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
                    </div>
                </div>
                <div className="projects-box">
                    <img src={chatOnline} alt=""></img>
                    <div className="project-layer">
                        <h4>Project ChatSid</h4>
                        <p>This project its about an online chat using technologies like Python and Django</p>
                        <a href="https://github.com/sidneyjfg/chatOnline" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
                    </div>
                </div>
                <div className="projects-box">
                    {/*<img src={newProject1} alt=""></img>*/}
                    <div className="project-layer">
                        <h4>New Project 1</h4>
                        <p>Description of the new project 1.</p>
                        <a href="https://github.com/sidneyjfg/newProject1" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
                    </div>
                </div>
                <div className="projects-box">
                    {/*<img src={newProject2} alt=""></img>*/}
                    <div className="project-layer">
                        <h4>New Project 2</h4>
                        <p>Description of the new project 2.</p>
                        <a href="https://github.com/sidneyjfg/newProject2" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
                    </div>
                </div>
                <div className="projects-box">
                    {/*<img src={newProject3} alt=""></img>*/}
                    <div className="project-layer">
                        <h4>New Project 3</h4>
                        <p>Description of the new project 3.</p>
                        <a href="https://github.com/sidneyjfg/newProject3" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
