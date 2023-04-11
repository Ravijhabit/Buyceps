import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Cards from '@/components/card';
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home({pokemons}) {
  console.log(pokemons);
  return (
    <section className={`${styles.pokemonRow} ${styles.flex}`}>
      {pokemons.map(pokemon => 
        <Cards key={pokemon.id} pokemon={pokemon}/>)}
    </section>
  );
}

export async function getStaticProps(){
  const client = new ApolloClient({
    uri:'https://graphql-pokemon2.vercel.app/',
    cache:  new InMemoryCache()
  });
  const {data} = await client.query({
    query: gql`
      query pokemons($first: Int!){
        pokemons(first: $first){
          id
          number
          name
          types
          image
        }
    }
    `,
    variables:{
      "first":16
    }
  })
  return{
    props:{
      pokemons:data.pokemons
    }
  }
}