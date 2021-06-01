import React,{useState,useEffect} from 'react';
import data from '../../../data/dataResources.json'
import './Papers.css'
import TableView from '../../../components/tableView/TableView'



const Papers = () => {
    const[selectedRows,setSelectedRows] = useState([])
    const[papersData,setPapersData] = useState([])

    useEffect(() => {
        setPapersData(data.results["papers"])
      }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const updateSelectedList = id => {
        const newList = [...selectedRows]
        const index = newList.indexOf(id)
        if( index > -1 ){
            newList.splice(index,1)
        }
        else{
            newList.push(id)
        }
        setSelectedRows(newList)
    }

    const onClickDelete = () =>{
        console.log(`eliminar: ${selectedRows}`)
    }

    return ( 
        <div className="Papers">

            <div className="btn-actions">
                <button className="btn-action" onClick={()=>{onClickDelete()}}>Delete</button>
                <button className="btn-action">Create</button>
            </div>
        
            <TableView
                data={papersData}
                selectedRows={selectedRows}
                updateSelectedList={updateSelectedList}
            />
        </div>
     );
}
 
export default Papers;