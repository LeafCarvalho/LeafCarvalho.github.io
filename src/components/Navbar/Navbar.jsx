import { Link } from "react-router-dom";

export const Navbar = () => {
        const headerOptionsLeft = [
            'Início',
            'Quem sou eu',
        ];
        const headerOptionsRight = [
            'Habilidades',
            'Projetos',
        ]
    return (
        <div className="bg-backgroundHeader border-blackColor border-b-2 border-solid text-white p-4 sticky flex justify-center">
            <div className="container">
                <div className="col-span-12 flex justify-between">
                    <div className="space-x-7">
                        {headerOptionsLeft.map((option, index) => (
                            <Link to="#" key={index} className="uppercase">{option}</Link>
                        ))}
                    </div>
                    <div className="space-x-7">
                        {headerOptionsRight.map((option, index) => (
                            <Link to="#" key={index} className="uppercase">{option}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}