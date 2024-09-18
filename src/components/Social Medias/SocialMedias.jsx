import { Link } from "react-router-dom";
import GithubIcon from '/social media icons/github.svg';
import LinkedinIcon from '/social media icons/linkedin.svg';
import InstagramIcon from '/social media icons/instagram.svg';
import WhatsappIcon from '/social media icons/whatsapp.svg';
import EmailIcon from '/social media icons/email.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SocialMedias = () => {
    const socialMediasLeft = {
        Github: {
            name: 'Github',
            url: 'https://github.com/LeafCarvalho',
            img: GithubIcon,
        },
        LinkedIn: {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/rafaelcarvalhosl/',
            img: LinkedinIcon,
        },
        Instagram: {
            name: 'Instagram',
            url: 'https://www.instagram.com/dev_filosofo/',
            img: InstagramIcon,
        }
    }
    const socialMediasRight = {
        WhatsApp: {
            name: 'WhatsApp',
            url: 'https://api.whatsapp.com/send?phone=31980540274&text=Ol%C3%A1,%20Rafael!%20Tudo%20bem?',
            img: WhatsappIcon,
        },
        Email: {
            name: 'Email',
            endereco: 'rafaeldecarvalhodasilva01@yahoo.com.br',
            img: EmailIcon,
        }
    }

    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText(socialMediasRight.Email.endereco)
          .then(() => {
            toast.info('Email copiado para área de transferência!', {
              position: "bottom-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          })
          .catch(err => console.error('Erro ao copiar email: ', err));
      };
      return (
        <div className="bg-backgroundHeader border-borderColor border-b-2 border-solid text-white p-4 sticky flex justify-center">
            <div className="container flex flex-col-reverse sm:flex-row justify-between">
                <div className="flex flex-row space-x-7 justify-center sm:justify-start">
                    {Object.entries(socialMediasRight).map(([name, redeSocial]) => {
                        return (
                            redeSocial.name === 'Email' ? (
                                <button key={name} onClick={copyEmailToClipboard} className="flex items-center">
                                    <img src={redeSocial.img} alt={name} className="mr-2"/>
                                    <span className="tracking-widest">{redeSocial.name}</span>
                                </button>
                            ) : (
                                <a key={name} href={redeSocial.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                    <img src={redeSocial.img} alt={name} className="mr-2"/>
                                    <span className="tracking-widest">{redeSocial.name}</span>
                                </a>
                            )
                        );
                    })}
                    <ToastContainer />
                </div>
                <div className="flex flex-row space-x-7 justify-center sm:justify-start sm:mb-0 mb-4 sm:mt-0">
                    {Object.entries(socialMediasLeft).map(([name, redeSocial]) => {
                        return (
                            <a key={name} href={redeSocial.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                <img src={redeSocial.img} alt={name} className="mr-2"/>
                                <span className="tracking-widest">{redeSocial.name}</span>
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default SocialMedias