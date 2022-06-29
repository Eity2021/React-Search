import React from 'react';
import '../Allcss/Allcss.css'
const ShowSearch = ({search}) => {
    const {img ,title , taskId} = search;
    return (
        <div className='showsearch'>
            <div className='img'>   
                <img src={img} alt="" /> </div>
            <div>
                <h3>Title : {title}</h3>
                <p>taskId : {taskId}</p>
            </div>
        </div>
    );
};

export default ShowSearch;