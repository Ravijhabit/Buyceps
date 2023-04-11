import css from '../styles/Home.module.css';
import Image from 'next/image';
export default function Cards({pokemon}){
    return(
        <section className={`${css.cards} ${css.flex}`}>
            {/* <img src={pokemon.image} alt=''/> */}
            <Image 
                className={`${css.pokemonImage}`}
                src={pokemon.image} 
                alt={pokemon.name} 
                width={180} 
                height={150}
                style={{background:'gray'}}
            />
            <small className={`${css.number}`}>#0{pokemon.number}</small>
            <h1>{pokemon.name}</h1>
            <section className={`${css.flex} ${css.type}`}>
                { pokemon.types.map((value)=>(
                    <div className={`${css.kind} `} key={value}>
                        {value}
                    </div>
                ))}
            </section>
        </section>
    );
}