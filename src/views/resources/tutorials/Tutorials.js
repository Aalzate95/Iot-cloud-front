import React,{useState,useEffect} from 'react';
import './Tutorials.css'
import TableView from "../../../components/tableView/TableView";

const Tutorials = (props) => {
    const[ElementsPerPage,setElementsPerPage] = useState(5);
    const[selectedRows,setSelectedRows] = useState([]);
    const[tutorialsData,setTutorialsData] = useState([]);

    useEffect(() => {
        setTutorialsData(props.resourcesData.results["Tutorials"]);
      }, [props.resourcesData]);

    const updateSelectedList = id => {
        const newList = [...selectedRows];
        const index = newList.indexOf(id);
        if( index > -1 ){
            newList.splice(index,1);
        }
        else{
            newList.push(id);
        }
        setSelectedRows(newList);
    };

    return ( 
        <div className="">
            <div className="btn-actions">
                <button className="btn-action" onClick={(e)=>{}}>Borrar</button>
                <button className="btn-action" onClick={()=>{}}>Crear</button>
            </div>
            <div>
                <label>Elementos por página: </label>
                <select onChange={(e)=>{setElementsPerPage(e.target.value);}}>
                    <option defaultValue={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                </select>
            </div>
            <TableView
                data={tutorialsData}
                selectedRows={selectedRows}
                updateSelectedList={updateSelectedList}
                cantPerPage={ElementsPerPage}
            />
        </div>
     );
}
 
export default Tutorials;