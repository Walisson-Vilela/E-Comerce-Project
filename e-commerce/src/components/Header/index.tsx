import { useState } from 'react';
import './styles.css';


interface Iprops {
    nameCompany: string;
}

const Header = ({nameCompany}: Iprops) => {

    const [name, setName] = useState('Walisson')

    return (

        <nav className='w-full flex justify-between items-center p-5 bg-white shadow-xl'>
            <span>{name}</span>
            <ul style={{ display: 'flex' }}>
                <li>Features</li>
                <li>Premium</li>
                <li>Suporte</li>
                <li>
                    <button>
                        Cadastro
                    </button>
                </li>
            </ul >
            <button onClick={() => setName('Vilela')} >Clicar aqui</button>
        </nav >

    );
}

export { Header };