const Sylveon = ({ isShiny }) => {
  const normal = 'https://www.pokencyclopedia.info/sprites/3ds/ani_6/3ani__700__xy.gif'
  const shiny = 'https://www.pokencyclopedia.info/sprites/3ds/ani_6_shiny/3ani_-S_700__xy.gif'
  return ( 
    <img src={isShiny ? shiny : normal} alt="" />
  );
}
 
export default Sylveon;