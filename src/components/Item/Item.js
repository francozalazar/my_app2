import React from 'react'
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import './Item.css';

function Item({prod}) {
    return (
        <div key={prod.id}><Card style={{ width: '18rem', margin:'auto' }}>
                                                            <Card.Img className="imgSize" variant="top" src={prod.img} />
                                                            <Card.Body>
                                                                  <Card.Title>{prod.nombre}</Card.Title>
                                                                 <Card.Text>
                                                                     <button className="botonDetalle"><Link className="botonLink" to={`/detalle/${prod.id}`}>Detalle de producto</Link></button>
                                                                 </Card.Text>
                                                             </Card.Body>
                                                            <ListGroup className="list-group-flush">
                                                                <ListGroupItem>$ {prod.precio}</ListGroupItem>
                                                                                                                              
                                                            </ListGroup>
                                                            
                                                       </Card></div>
    )
}

export default Item