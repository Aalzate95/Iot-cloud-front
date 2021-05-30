import React from 'react';
import './Resources.css'

const data = {
    results:{
        papers:[
            {},
            {},
            {},
        ],
        tutorials:[

        ]
    }
}


const renderResourcesCards = Object.keys(data.results).map((resourceKind)=>{
        let totalElements = data.results[resourceKind].length;
        return(
            <div>
                <div>
                    <h3>{resourceKind}</h3>
                    <p>Cantidad de elementos: {totalElements}</p>
                </div>
            </div>
            )
    })

    


const Resources = () => {
    return ( 
    <div className="Resources">
        <div>
            {renderResourcesCards}
        </div>
    </div> 
    );
}
 
export default Resources;