import React, { useState } from 'react';

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
        <div className="projects" id="projects">
            <h2 className="heading">Latest<span> Projects</span></h2>

            <div className="projects-content">
                <div class="projects-box">
                    <img src="./img/cardIndexFlutter.png" alt=""></img>
                    <div class="project-layer">
                        <h4>App Mobile</h4>
                        <p>This app provides basic features such as login authentication seamlessly linked to the bank (Firebase), and some others functions
                        </p>
                        <a href="https://github.com/sidneyjfg/FlutterApp" target="_blank" rel="noopener noreferrer"><i class='bx bxl-github'></i></a>
                    </div>
                </div>
                <div class="projects-box">
                    <img src="./img/projetoSite.png" alt=""></img>
                    <div class="project-layer">
                        <h4>Web design</h4>
                        <p>This site was intended to be created in order to serve a Customer service, building gas maintenance and others.
                        </p>
                        <a href="https://engasbrasil.com.br" target="_blank" rel="noopener noreferrer"><i class='bx bx-link-external'></i></a>
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
                <div class="projects-box">
                    <img src="./img/certificate.png" alt=""></img>
                        <div class="project-layer">
                            <h4>Python project</h4>
                            <p>This Python script automates the generation of certificates for students based on data provided in an Excel spreadsheet
                            </p>
                            <a href="https://github.com/sidneyjfg/Automated-Certificate/" target="_blank" rel="noopener noreferrer"><i class='bx bxl-github'></i></a>
                </div>
            </div>

            <div class="projects-box">
                <img src="./img/chatOnline.png" alt=""></img>
                    <div class="project-layer">
                        <h4>Project ChatSid</h4>
                        <p>This project its about an online chat using technologies like Python and Django
                        </p>
                        <a href="https://github.com/sidneyjfg/chatOnline" target="_blank" rel="noopener noreferrer"><i class='bx bxl-github'></i></a>
                    </div>
            </div>

        </div>
        </div >
    );
}

export default Projects;
