import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemonThunk } from "../../Store/pokemons/pokemonsReducer"
import { nanoid } from "nanoid"

import Header from "../../Components/Header"
import TablePokemons from "../../Components/TablePokemons"

const HomePage= () => {
    const dispatch = useDispatch()
    const pokemons = useSelector((state)=> state.pokemonsReducer.pokemons)

    const pokemonsWithKeys = pokemons.map(el=> {return {
        ...el,
        key: nanoid()
    }})
    
    useEffect(()=> {
        dispatch(getPokemonThunk())
    },[dispatch])

    return(
        <>
            <Header/>
            <TablePokemons pokemons={pokemonsWithKeys}/>
        </>
    )
}
export default HomePage