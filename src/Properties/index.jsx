import React, {useState} from "react";
import {Container, Table} from './style'
import { data } from "./data";

const Properties = () => {
    const [state, setState] = useState(data)
    const [namee, setName] = useState('')
    const [addresss, setAddress] = useState('')
    const [oldPricee, setOldPrice] = useState('')
    const [pricee, setPrice] = useState('')
    const [datee, setDate] = useState('')
    const [statuss, setStatus] = useState('')
    const [vieww, setView] = useState('')


    const onDelete = (id) => {
        let res = state.filter((value) => value.id !== id)
        setState(res)
    }
    const onEdit = (id, name, address, oldPrice, price, date, status, view) => {
        let ress = state.map((value) => ({
            id: value.id,
            name: value.name,
            address: value.address,
            oldPrice: value.oldPrice,
            price: value.price,
            date: value.date,
            status: value.status,
            view: value.view,
            hidden: value.id === id ? true : false,
        })
        )
        setState(ress)
        setName(name)
        setAddress(address)
        setOldPrice(oldPrice)
        setPrice(price)
        setDate(date)
        setStatus(status)
        setView(view)
    }
    const hiddenFalse = (id) => {
            let ressss = state.map((value) => ({
                id: value.id,
                name: value.id === id ? namee : value.name,
                address: value.id === id ? addresss : value.address,
                oldPrice: value.id === id ? oldPricee : value.oldPrice,
                price: value.id === id ? pricee : value.price,
                date: value.id === id ? datee : value.date,
                status: value.id === id ? statuss : value.status,
                view: value.id === id ? vieww : value.view,
                hidden: false,
            }))
            setState(ressss)
    }

    return (
        <Container>
            <Container.Header>
                <Container.Header.H>My properties</Container.Header.H>
                {/* <Container.Header.Input type="text" placeholder="Search" /> */}
            </Container.Header>
            <Table>
                <thead>
                    <tr>
                        <Table.Th style={{width: '450px', textAlign: 'left'}}>Listing Title</Table.Th>
                        <Table.Th style={{width: '200px'}}>Date Published</Table.Th>
                        <Table.Th>Status</Table.Th>
                        <Table.Th>View</Table.Th>
                        <Table.Th>Action</Table.Th>
                    </tr>
                    
                </thead>
                <tbody>
                    {
                        state.length ? (
                            state.map(({id, name, address, oldPrice, price, date, status, view, hidden}) => {
                                return(
                                    <tr key={id}>
                                        <Table.Td>
                                            <Table.Td.Wrap style={{textAlign: 'left'}}>
                                            <Table.Td.Img>
                                                <Table.Td.Img.Button>FEATURED</Table.Td.Img.Button>
                                            </Table.Td.Img>
                                            <div>
                                                <Table.Td.Title>{hidden ? <input style={{width: '220px', height: '20px', marginBottom: '3px'}} type={'text'} value={namee} onChange={(e) => setName(e.target.value)} />: name}</Table.Td.Title>
                                                <Table.Td.Parag>{hidden ? <input  style={{width: '220px', height: '20px'}} type={'text'} value={addresss} onChange={(e)=> setAddress(e.target.value)} />: address}</Table.Td.Parag>
                                                <Table.Td.Parag style={{marginTop: '25px', textDecoration: 'line-through'}}>{hidden ? <input style={{height: '20px'}} type={'text'} value={oldPricee} onChange={(e)=> setOldPrice(e.target.value)} />: oldPrice}</Table.Td.Parag>
                                                <Table.Td.Title>{hidden ? <input style={{height: '20px'}} type={'text'} value={pricee} onChange={(e)=> setPrice(e.target.value)} /> : price }</Table.Td.Title>
                                            </div>
                                            <Table.Td.Button>FOR SALE</Table.Td.Button>
                                            </Table.Td.Wrap>   
                                        </Table.Td>
                                        <Table.Td>
                                            <Table.Td.Parag>
                                                {hidden ? <input style={{width: '120px', height: '30px'}} type={'text'} value={datee} onChange={(e)=> setDate(e.target.value)} />: date}
                                                </Table.Td.Parag>
                                        </Table.Td>
                                        <Table.Td>
                                            <Table.Td.Parag>
                                                {hidden ? <input style={{width: '100px', height: '30px'}} type={'text'} value={statuss} onChange={(e)=> setStatus(e.target.value)} />: status}
                                            </Table.Td.Parag>
                                        </Table.Td>
                                        <Table.Td>
                                            <Table.Td.Parag>
                                                { hidden ? <input style={{width: '60px', height: '30px'}} type={"text"}  value={vieww} onChange={(e)=> setView(e.target.value)} /> : view}  
                                            </Table.Td.Parag>
                                        </Table.Td>
                                        <Table.Td>    
                                            {
                                                hidden ? <Table.Td.Save onClick={()=> hiddenFalse(id)}>Save</Table.Td.Save> : <Table.Td.Edit onClick={()=> onEdit(id, name, address, oldPrice, price, date, status, view)} /> 
                                            }
                                            <Table.Td.Trash onClick={() => onDelete(id)} />
                                        </Table.Td>
                                    </tr>
                                )
                            })
                        ) : <h3>No Data</h3>  
                    }
   
                </tbody>
            </Table>
        </Container>
    )
}
export default Properties

















// const Properties = () => {
//     const [state, setState] = useState(data)

//     const onDelete = (id) => {
//         let res = state.filter((value) => value.id != id)
//         setState(res)
//     }
//     return (
//         <Container>
//             <Container.Header>
//                 <Container.Header.H>My properties</Container.Header.H>
//                 <Container.Header.Input type="text" placeholder="Search" />
//             </Container.Header>
//             <Table>
//                 <thead>
//                     <Table.Th style={{width: '450px', textAlign: 'left'}}>Listing Title</Table.Th>
//                     <Table.Th style={{width: '200px'}}>Date Published</Table.Th>
//                     <Table.Th>Status</Table.Th>
//                     <Table.Th>View</Table.Th>
//                     <Table.Th>Action</Table.Th>
//                 </thead>
//                 <tbody>
//                     {
//                         state.length ? (
//                             state.map((value) => {
//                                 return(
//                                     <tr key={value?.id}>
//                                         <Table.Td>
//                                             <Table.Td.Wrap style={{textAlign: 'left'}}>
//                                             <Table.Td.Img>
//                                                 <Table.Td.Img.Button>FEATURED</Table.Td.Img.Button>
//                                             </Table.Td.Img>
//                                             <div>
//                                                 <Table.Td.Title>{value?.name}</Table.Td.Title>
//                                                 <Table.Td.Parag>{value?.address}</Table.Td.Parag>
//                                                 <Table.Td.Parag style={{marginTop: '25px', textDecoration: 'line-through'}}>{value?.oldPrice}</Table.Td.Parag>
//                                                 <Table.Td.Title>{value?.price}</Table.Td.Title>
//                                             </div>
//                                             <Table.Td.Button>FOR SALE</Table.Td.Button>
//                                             </Table.Td.Wrap>   
//                                         </Table.Td>
//                                         <Table.Td>
//                                             <Table.Td.Parag>{value?.date}</Table.Td.Parag>
//                                         </Table.Td>
//                                         <Table.Td>
//                                             <Table.Td.Parag>{value?.status}</Table.Td.Parag>
//                                         </Table.Td>
//                                         <Table.Td>
//                                             <Table.Td.Parag>{value?.view}</Table.Td.Parag>
//                                         </Table.Td>
//                                         <Table.Td>    
//                                             <Table.Td.Edit />
//                                             <Table.Td.Trash onClick={() => onDelete(value.id)} />
//                                         </Table.Td>
//                                     </tr>
//                                 )
//                             })
//                         ) : <h3>No Data</h3>  
//                     }
   
//                 </tbody>
//             </Table>
//         </Container>
//     )
// }
// export default Properties