import React,{useState,useEffect} from 'react';
import data from '../../../data/dataResources.json'
import './Papers.css'
import TableView from '../../../components/tableView/TableView'
import { useHistory } from 'react-router-dom';


const Papers = ({resourcesData,setResourcesData}) => {
    const[selectedRows,setSelectedRows] = useState([])
    const[papersData,setPapersData] = useState([])
    const history = useHistory();

    useEffect(() => {
        setPapersData(resourcesData.results["papers"])
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
        let newList = resourcesData
        resourcesData.results["papers"].forEach((paper,index)=>{
            if (selectedRows.includes(paper.id)){
                newList.results.papers.splice(index,1)
            }
        })
        setResourcesData(newList)
        setPapersData(newList.results.papers)
    }
    
    const onClickCreatePaper = () =>{
        history.push('/resources/create-paper')
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

/*{
                pathname:'/resources/create-paper',
                search: '?query=abc',
                 state:{
                    papersData:papersData,
                    
                }, 
                
            }*/