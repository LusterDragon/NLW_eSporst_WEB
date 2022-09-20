import { useState, useEffect } from 'react';

import * as  Dialog from '@radix-ui/react-dialog';
import axios from 'axios';

import './styles/main.css';
import logoimg from './assets/logo_nlw_esport.svg';

import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { CreateAdModal } from './components/CreadAdModal';

interface Game {
    id: string;
    title: string;
    bannerURL: string;
    _count: {
        ads: number
    }
}

function App() {

    const [games, setGames] = useState<Game[]>([]);

    useEffect(() => {
        axios('http://localhost:3333/games').then(response => {
            setGames(response.data)
        });
    }, []);

    return (
        /*A largura ficará boa nesta máquina se utilizar 1200 ao invés de 1344*/
        <div className='max-w-[1000px] mx-auto flex flex-col items-center my-20'>
            <img src={logoimg} alt="" />
            <h1 className='text-6xl text-white font-black mt-20'>Seu
                <span className='text-trasparent bg-nlw-gradient bg-clip-text'> duo</span> está aqui.</h1>

            <div className='grid grid-cols-6 gap-6 mt-16'>
                {games.map(game => {
                    return (
                        <GameBanner key={game.id}
                            gameTitle={game.title}
                            bannerURL={game.bannerURL}
                            adsQuantity={game._count.ads}
                        />
                    )
                })}

            </div>

            <Dialog.Root>
                <CreateAdBanner />
                <CreateAdModal />
            </Dialog.Root>

        </div>
    )
}

export default App
