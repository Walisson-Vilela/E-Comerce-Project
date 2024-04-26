interface IProps {
    name: string;
}

const Header = ({ name }: IProps) => {
    return (
        <nav className='w-full flex justify-between items-center p-5 border-b border-stone bg-gray-700'>
            <span className='mx-2 text-white'>{name}</span>
            <ul className='flex items-center'>
                <li className='mx-2 text-white'>Features</li>
                <li className='mx-2 text-white'>Premium</li>
                <li className='mx-2 text-white'>Suporte</li>
                <li>
                    <button className='text-grey-700' >
                        Cadastro
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export { Header };