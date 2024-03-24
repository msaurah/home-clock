import { useEffect, useState } from 'react';

const Pokemon = () => {

  const pokemonList = ['arcanine', 'charizard','fletchling',
  'gardevoir', 'gengar', 'leafeon', 'litten', 'lucario', 'salazzle', 'zangoose']
  const [ pokemonGif, setPokemonGif ] = useState('')

  function createSrc() {
    const randomIndex = Math.floor(Math.random() * pokemonList.length)
    const pokemonName = pokemonList[randomIndex]
    const isShiny = getRandomBoolean() ? '_shiny' : '_common'
    return "src/assets/gifs/"+pokemonName+isShiny+'.gif'
  }

  useEffect(() => {
    setPokemonGif(createSrc())
  }, [])

  const getRandomBoolean = () => {
    return Math.random() < (1 / 51) // Adjust the threshold as needed
  };

  const handleClick = () => {
    setPokemonGif(createSrc())
  }

  return (
    <img src={pokemonGif} alt="" onClick={handleClick} style={{ height: "250px"}}/>
  )
}
 
export default Pokemon;