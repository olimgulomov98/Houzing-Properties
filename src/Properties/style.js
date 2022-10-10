import styled from "styled-components";
import {ReactComponent as Edit} from './assets/icons/edit.svg'
import {ReactComponent as Trash} from './assets/icons/trash.svg'

const Container = styled.div`
    width: 100%;
    padding-top: 50px;
`

Container.Header = styled.div`
    width: 1100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    margin-bottom: 32px;
`
Container.Header.H = styled.h1`
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -0.02em;
    color: #0D263B;
`
Container.Header.Input = styled.input`
    border: none;
    border-bottom: 2px solid #E6E9EC;
    outline: none;
`
const Table = styled.table`
    width: 1100px;
    border: 1px solid #E6E9EC;
    border-radius: 3px;
    padding-left: 30px;
    margin: auto;
    padding-bottom: 20px;
    box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
`
Table.Th = styled.th`
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    color: #0D263B;
    height: 50px;
`
Table.Td = styled.td`
    text-align: center;  
`
Table.Td.Wrap = styled.td`
    display: flex;
    position: relative;
`
Table.Td.Img = styled.div`
    width: 113px;
    height: 113px;
    background: #C4C4C4;
    border-radius: 3px;
    margin-right: 16px;
    margin-bottom: 16px;
`
Table.Td.Title = styled.h3`
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #0D263B;
`
Table.Td.Parag = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #696969;
`
Table.Td.Img.Button = styled.button`
    width: 73px;
    height: 23px;
    background: #0061DF;
    border-radius: 3px;
    outline: none;
    border: none;
    margin: 4px 0 0 4px;
    font-weight: 600;
    font-size: 10px;
    line-height: 13px;
    color: #FFFFFF;
`
Table.Td.Button = styled.button`
    width: 71px;
    height: 23px;
    background: #0D263B;
    border-radius: 3px;
    font-weight: 600;
    font-size: 10px;
    line-height: 13px;
    color: #FFFFFF;
    border: none;
    outline: none;
    position: absolute;
    right: 15px;
`
Table.Td.Edit = styled(Edit)`
margin-right: 20px;
`
Table.Td.Trash = styled(Trash)`
`
Table.Td.Save = styled.button`
    width: 50px;
    height: 20px;
    background: red;
    border: none;
    border-radius: 3px;
    margin-right: 5px;
    color: #FFFFFF;
`
export {Container, Table} 