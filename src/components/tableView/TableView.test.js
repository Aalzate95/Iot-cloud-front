import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react'
import TableView from './TableView'

const testDataTableView = [
    {
        "id":0,
        "title":"Parametros para medir rendimiento de microprocesadores",
        "authors":["Carlos","Alberto"],
        "description":"Investigación de la Universidad de Boston sobre el rendimiento de los microprocesadores en la mineria de criptomonedas.",
        "file":"documento.pdf",
        "courses":[1,3],
        "tags":["criptomonedas","microprocesador"],
        "creationDate":"16/05/2021",
        "updateDate":"16/05/2021"
    },
    {
        "id":1,
        "title":"Alta demanda de microprocesadores genera escases mundial",
        "authors":["Jason","Robert"],
        "description":"La alta demanda de micorprocesadores utilizados en mineria de criptomonedas perjudica el mercado generando escases.",
        "file":"documento.pdf",
        "courses":[1,2],
        "tags":["microprocesador"],
        "creationDate":"16/05/2021",
        "updateDate":"16/05/2021"
    }
]



test('Show header table', async ()=>{
    render(
        <TableView 
            data={testDataTableView}
            selectedRows={[]}
        />
        )
    const itemsHeader = await document.getElementsByClassName("table-header")[0]
    expect(itemsHeader.getElementsByClassName("col1")[0].textContent).toBe("Titulo")
    expect(itemsHeader.getElementsByClassName("col2")[0].textContent).toBe("Descripción")
    expect(itemsHeader.getElementsByClassName("col3")[0].textContent).toBe("Cursos")
    expect(itemsHeader.getElementsByClassName("col4")[0].textContent).toBe("Tags")
})


test('Render data in table', async ()=>{
    render(
        <TableView 
            data={testDataTableView}
            selectedRows={[]}
        />
        )
    const rowsData = await document.getElementsByClassName("content-table-style")[0]
    const title1 = rowsData.getElementsByClassName("col1")[0].textContent
    const title2 = rowsData.getElementsByClassName("col1")[1].textContent
    const description1 = rowsData.getElementsByClassName("col2")[0].textContent
    const description2= rowsData.getElementsByClassName("col2")[1].textContent
    const courses1= rowsData.getElementsByClassName("col3")[0].textContent
    const courses2= rowsData.getElementsByClassName("col3")[1].textContent
    const tags1= rowsData.getElementsByClassName("col4")[0].textContent
    const tags2= rowsData.getElementsByClassName("col4")[1].textContent

    expect(title1).toBe(`${testDataTableView[0].title}`);
    expect(title2).toBe(`${testDataTableView[1].title}`);
    expect(description1).toBe(`${testDataTableView[0].description}`)
    expect(description2).toBe(`${testDataTableView[1].description}`)
    
    expect(courses1).toBe(`${testDataTableView[0].courses+","}`)
    expect(courses2).toBe(`${testDataTableView[1].courses+","}`)
    expect(tags1).toBe(`${testDataTableView[0].tags+","}`)
    expect(tags2).toBe(`${testDataTableView[1].tags+","}`)
})