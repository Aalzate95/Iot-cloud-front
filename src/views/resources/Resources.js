import React from 'react';
import './Resources.css'
import { useHistory } from 'react-router-dom';
import data from '../../data/dataResources.json'

const Resources = () => {

    const history = useHistory();

    const renderResourcesCards = Object.keys(data.results).map((resourceKind,index)=>{
        let totalElements = data.results[resourceKind].length;
        return(
            <div className="card" key={index} onClick={()=>history.push(`/resources/${resourceKind}`)}>
                <div>
                    <h3>{resourceKind}</h3>
                    <p>Cantidad de elementos: {totalElements}</p>
                </div>
            </div>
            )
    })
    return ( 
    <div className="Resources">
        <div className="Resources-cards">
            {renderResourcesCards}
        </div>
    </div> 
    );
}
 
export default Resources;