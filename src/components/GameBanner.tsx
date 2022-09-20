interface GameBannerProps{
    bannerURL: string;
    gameTitle: string;
    adsQuantity:number;
}

export function GameBanner(props:GameBannerProps) {
    return (
        <a className='relative rounded-lg overflow-hidden' href="">
        <img src={props.bannerURL} alt="" />
        <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>{props.gameTitle}</strong>
            <span className='text-zinc-300 text-sm block mt-1'>{props.adsQuantity} {props.adsQuantity==1?" anúncio":" anúncios"}</span>
        </div>
    </a>
    )
    
}