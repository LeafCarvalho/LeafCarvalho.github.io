import Myphoto from '/foto4.png';
import { Fade } from 'react-awesome-reveal';

export const Introduction = () => {
    return (
        <div className="overflow-hidden flex flex-col lg:flex-row items-start lg:items-start mt-7 mb-114 py-1">
            <div className="container mx-auto grid grid-cols-12 items-center justify-center">
                <div className="col-span-12 lg:col-span-6 px-2 flex flex-col justify-center items-center">
                <div className='w-[356px] max-w-full bg-border-gradient rounded-full  light-border-effect'>
                    <img src={Myphoto} alt="" className="w-full h-auto rounded-full"/>
                </div>
                </div>
                <Fade direction="down" cascade damping={0.1} duration={1000} className="col-span-12 lg:col-span-6 px-2 flex flex-col justify-center items-start lg:items-center">
                    <div>
                        <h1 className="text-white font-poppins text-4xl font-semibold leading-tight tracking-wide">Rafael Carvalho</h1>
                        <span className="text-white font-poppins text-lg font-normal leading-relaxed tracking-widest">Desenvolvedor Front-end</span>
                        <p className="mt-10 w-full text-white font-poppins text-lg font-normal leading-relaxed tracking-widest">Atuo em Tecnologia da Informação desde 2020, com experiência em Infraestrutura, Implantação de Sistemas e atualmente sou desenvolvedor. Trabalho com <strong className="font-semibold">React</strong>, <strong className="font-semibold">PHP</strong> e criação de temas e plugins em <strong className="font-semibold">WordPress</strong>. Tenho vivência em <strong className="font-semibold">Java</strong>, <strong className="font-semibold">Oracle (SQL)</strong>, <strong className="font-semibold">Javascript</strong>, <strong className="font-semibold">jQuery</strong>.</p>
                    </div>
                </Fade>
            </div>
        </div>
    )
}