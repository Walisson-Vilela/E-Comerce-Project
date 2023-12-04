
interface IProps {
    name: string;
}

const Header = ({ name }: IProps) => {

    return (

        <nav className='w-full flex justify-between items-center p-5 bg-white shadow-xl'>
            <span>{name}</span>
            <ul className='flex items-center'>
                <li className='mx-2'>Features</li>
                <li className='mx-2'>Premium</li>
                <li className='mx-2'>Suporte</li>
                <li>
                    <button>
                        Cadastro
                    </button>
                </li>
            </ul >
        </nav >

    );
}

export { Header };