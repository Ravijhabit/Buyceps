import css from '../styles/Home.module.css';
import Image from 'next/image';
export default function Cards({pokemon}){
    const pokemonColor={
          Grass:'#9bcc50',
          Fire: '#fd7d24',
          Bug: '#729f3f',
          Poison: '#b97fc9',
          Water: '#4592c4',
          Flying: 'linear-gradient(180deg,#3dc7ef 50%,#bdb9b8 50%)'
    }
    return(
        <section className={`${css.cards} ${css.flex}`}>
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
                    <div className={`${css.kind}`} style={{background:pokemonColor[value]}} key={value}>
                        {value}
                    </div>
                ))}
            </section>
        </section>
    );
}