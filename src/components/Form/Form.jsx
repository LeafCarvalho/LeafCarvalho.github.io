import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Form = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
  
    const sendEmail = (e) => {
      e.preventDefault();
      setLoading(true);
  
      emailjs
        .sendForm('service_l8hu9vj', 'template_qgi79eu', form.current, {
          publicKey: 'HM-T9UXuknXCpGgWW',
        })
        .then(
          () => {
            form.current.reset();
            setLoading(false);
            setSuccess(true);
          },
          (error) => {
            setLoading(false);
          },
        );
    };  

  return (
    <>
    <div className="flex justify-center items-center hidden">
  <form ref={form} onSubmit={sendEmail} className="container">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div className="flex flex-col">
    <label className="mb-2 font-bold text-lg text-gray-900">Nome</label>
    <input type="text" name="from_name" className="mb-4 p-2 border border-gray-300 rounded" />
  </div>
  <div className="flex flex-col">
    <label className="mb-2 font-bold text-lg text-gray-900">Telefone</label>
    <input type="number" name="from_phone" className="mb-4 p-2 border border-gray-300 rounded" />
  </div>
  <div className="flex flex-col">
    <label className="mb-2 font-bold text-lg text-gray-900">Email</label>
    <input type="email" name="from_email" className="mb-4 p-2 border border-gray-300 rounded" />
  </div>
  <div className="flex flex-col">
    <label className="mb-2 font-bold text-lg text-gray-900">Assunto</label>
    <input type="text" name="subject" className="mb-4 p-2 border border-gray-300 rounded" />
  </div>
</div>
    <div className="col-span-full flex flex-col">
        <label className="mb-2 font-bold text-lg text-gray-900">Mensagem</label>
        <textarea name="message" className="mb-4 p-2 h-32 border border-gray-300 rounded" />
    </div>
    <div className="col-span-full flex justify-center">
      <input type="submit" value="Enviar" className="p-2 bg-blue-500 text-white rounded cursor-pointer" />
    </div>
  </form>
</div>
    {loading && <p className="mt-4 text-blue-500">Carregando...</p>}
    {success && <p className="mt-4 text-green-500">Mensagem enviada com sucesso!</p>}
  </>
  )
}