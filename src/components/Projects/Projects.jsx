// import { useState } from 'react';
// import { Modal } from '../Modal/Modal';
import CafeteriaImagem from '/projects/logoCafeteria.webp'
import PokebolaImagem from '/projects/logoPokebola.webp'
import PreviewCafeteria from '/projects/PreviewCafeteriaSoZe.gif'


export const Projects = () => {

  const projects = [
    { name: "Cafeteria Sô Zé", image: CafeteriaImagem, url: `${window.location.href}Cafeteria_So_Ze`, preview: PreviewCafeteria },
    { name: "Pokedex", image: PokebolaImagem, url: `${window.location.href}react_pokedex` },
  ];

  // const [selectedProject, setSelectedProject] = useState(null);

  /*const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };*/

  return (
    <>
      <div className="flex justify-center align-center mt-24">
        <div className="col-12 flex justify-center align-center mb-10">
          <h2 className="text-white font-poppins text-32 font-normal leading-normal tracking-wider">Meus Projetos</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {projects.map((project, index) => (
          <div key={index} className="card relative z-10 bg-white group">
            <img src={project.image} alt={`Foto do projeto ${project.name}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white z-0">
              <h3 className="absolute text-white font-poppins text-2xl font-normal leading-normal transform translate-y-[-30px] group-hover:translate-y-[-50px] transition-transform duration-1000">{project.name}</h3>
              <a href={project.url} className="rounded font-poppins text-lg font-medium py-1 px-2 border-2 border-gray-400 mt-62 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Ver Projeto
              </a>
              {/* <button onClick={() => openModal(project)} className="rounded font-poppins text-lg font-medium py-1 px-2 border-2 border-gray-400 mt-62 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Ver Projeto
              </button> */}
            </div>
          </div>
        ))}
      </div>
      {/* {selectedProject && <Modal project={selectedProject} onClose={closeModal} />} */}
    </>
  );
};