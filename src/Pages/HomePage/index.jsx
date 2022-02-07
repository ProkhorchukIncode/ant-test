import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemonThunk } from "../../Store/pokemons/pokemonsReducer"
import { nanoid } from "nanoid"

import Header from "../../Components/Header"
import TablePokemons from "../../Components/TablePokemons"
import ModalUser from "../../Components/ModalUser"

import { Slider } from "antd"
import { Typography } from "antd"
import { Row } from "antd"
import { Col } from "antd"

const HomePage= () => {
    const [rows, setRows] = useState(10)
    const [openModal, setOpenModal] = useState(false)
    const dispatch = useDispatch()
    const pokemons = useSelector((state)=> state.pokemonsReducer.pokemons)

    const pokemonsWithKeys = pokemons.map(el=> {return {
        ...el,
        key: nanoid()
    }})

    const onOpenModal = () => {
        setOpenModal(true)
    }
    const handleOk = () => {
        setOpenModal(false);
      };
    
    const handleCancel = () => {
        setOpenModal(false);
    };
    
    useEffect(()=> {
        dispatch(getPokemonThunk())
    },[dispatch])

    return(
        <>
            <Header onClick={onOpenModal}/>
            <Row>
                <Col xs={24} md={{span:12, offset:6}}>
                    <Typography.Title level={3}>Quantity</Typography.Title>
                    <Slider min={1} max={20} defaultValue={rows} onChange={setRows}/>
                    <TablePokemons pokemons={pokemonsWithKeys} rows={rows}/>
                </Col>
            </Row>
            <ModalUser visible={openModal} handleOk={handleOk} handleCancel={handleCancel}/>
        </>
    )
}
export default HomePage