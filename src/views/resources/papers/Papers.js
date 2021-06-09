import React,{useState,useEffect} from "react";
import "./Papers.css";
import TableView from "../../../components/tableView/TableView";
import { useHistory } from "react-router-dom";


const Papers = ({resourcesData,setResourcesData}) => {
    const[selectedRows,setSelectedRows] = useState([]);
    const[papersData,setPapersData] = useState([]);
    const[ElementsPerPage,setElementsPerPage] = useState(5);

    const history = useHistory();

    useEffect(() => {
        setPapersData(resourcesData.results["papers"]);
      }, [resourcesData]);

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

    const onClickDeletePaper = () =>{
        let newList = resourcesData;
        resourcesData.results["papers"].forEach((paper,index)=>{
            if (selectedRows.includes(paper.id)){
                newList.results.papers.splice(index,1);
            }
        });
        
        setResourcesData(newList);
        setPapersData(newList.results.papers);
    };
    
    const onClickCreatePaper = () =>{
        history.push("/resources/create-paper");
    };

    return ( 
        <div className="Papers">

            <div className="btn-actions">
                <button className="btn-action" onClick={(e)=>{onClickDeletePaper(e);}}>Delete</button>
                <button className="btn-action" onClick={()=>{onClickCreatePaper();}}>Create</button>
            </div>
            <div>
                <label>Elementos por pagina: </label>
                <select onChange={(e)=>{setElementsPerPage(e.target.value);}}>
                    <option defaultValue={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                </select>
            </div>
            <TableView
                data={papersData}
                selectedRows={selectedRows}
                updateSelectedList={updateSelectedList}
                cantPerPage={ElementsPerPage}
            />
        </div>
     );
};
 
export default Papers;

/*{
                pathname:'/resources/create-paper',
                search: '?query=abc',
                 state:{
                    papersData:papersData,
                    
                }, 
                
            }*/