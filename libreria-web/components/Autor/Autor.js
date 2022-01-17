import React, {useState} from 'react'
import { Icon, Menu, Table } from 'semantic-ui-react'
import BASE_PATH from "../../utils/constants"

export default function Autor() {

    const [autores, setAutores] = useState([])
    
    //const url = 'http://localhost:3001/autor';

    const fetchAutores = async() =>{
        const response = await fetch(url)
        const data = await response.json()
        setAutores(data)
    }
    


    console.log("autores: " + autores)

    return (
        <div>
            <h1>Autores</h1>
            <Table celled>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Nombre</Table.HeaderCell>
                    <Table.HeaderCell>Nacionalidad</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                    
                {autores?.map(autor => {
                    return(
                        <div key={autor.id}>
                            <Table.Row>
                            <Table.Cell>{autor.nombre}</Table.Cell>
                            <Table.Cell>{autor.nacionalidad}</Table.Cell>
                            </Table.Row>
                        </div>
                    )
                })}
                
                </Table.Body>


                <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan='3'>
                    <Menu floated='right' pagination>
                        <Menu.Item as='a' icon>
                        <Icon name='chevron left' />
                        </Menu.Item>
                        <Menu.Item as='a'>1</Menu.Item>
                        <Menu.Item as='a'>2</Menu.Item>
                        <Menu.Item as='a'>3</Menu.Item>
                        <Menu.Item as='a'>4</Menu.Item>
                        <Menu.Item as='a' icon>
                        <Icon name='chevron right' />
                        </Menu.Item>
                    </Menu>
                    </Table.HeaderCell>
                </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}


