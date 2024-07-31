import React, { useState } from 'react';
import chatOnline from '../../img/chatOnline.png';
import cardIndexFlutter from '../../img/cardIndexFlutter.png';
import certificate from '../../img/certificate.png';
import converter from '../../img/converterXmlToJson.png'; // Novo projeto
import genio from '../../img/genio.jpeg'; // Novo projeto
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
                    {<img src={converter} alt=""></img>}
                    <div className="project-layer">
                        <h4>XML to Json Converter</h4>
                        <p>This project aims to convert XML files into custom formatted JSON files using Python.</p>
                        <a href="https://github.com/sidneyjfg/geradorJson" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
                    </div>
                </div>
                <div className="projects-box">
                    {<img src={genio} alt=""></img>}
                    <div className="project-layer">
                        <h4>Genio</h4>
                        <p>This project allows tattoo artists to create, manage and view the prizes offered to their clients.
Using technologies such as Node, Mysql, express and js</p>
                        <a href="https://github.com/sidneyjfg/genio" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
