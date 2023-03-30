interface CardProps {
    position: number; 
    name: string;
}

export function Card({name, position}: CardProps ) {

    return (
        <div className="flex flex-col justify-between w-[170px] h-44 gap-2 bg-white 
        rounded-md shadow-2xl drop-shadow-sm first-letter:
        cursor-pointer hover:scale-105 duration-150 transition">
        <span className="text-end p-2">{position}</span>

        <section className="flex flex-col justify-between
        pb-2 items-center bg-slate-200 w-full h-[45%] rounded-md">

        <img 
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${position}.png`} 
        alt="imagem do bulbasaur"
        className="w-28 h-28 -mt-16" 
        />
        <span className="capitalize">{name}</span>
        
        </section>
        
        </div>
    )
}