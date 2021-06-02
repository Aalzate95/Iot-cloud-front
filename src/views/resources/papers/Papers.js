import React,{useState,useEffect} from 'react';
import data from '../../../data/dataResources.json'
import './Papers.css'
import TableView from '../../../components/tableView/TableView'
import { useHistory } from 'react-router-dom';


const Papers = () => {
    const[selectedRows,setSelectedRows] = useState([])
    const[papersData,setPapersData] = useState([])
    const history = useHistory();

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

    const onClickDeletePaper = () =>{
        console.log(`eliminar: ${selectedRows}`)
    }
    
    const onClickCreatePaper = () =>{
        history.push(
            {
                pathname:'/resources/create-paper',
                search: '?query=abc',
                state:{
                    papersData:papersData,
                    
                },
                setPapersData:setPapersData(),
            }
        )
    }

    return ( 
        <div className="Papers">

            <div className="btn-actions">
                <button className="btn-action" onClick={()=>{onClickDeletePaper()}}>Delete</button>
                <button className="btn-action" onClick={()=>{onClickCreatePaper()}}>Create</button>
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