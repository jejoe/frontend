import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom'

export const DeleteDeal = (props) => {
    const [clientName, setClientName] = useState('');
    const [opptDescrip, setOpptDescrip] = useState('');
    const [atlasOpptNum, setAtlasOpptNum] = useState('');

    const history = useHistory();

    const setDealState = (data) => {
        setClientName(data.clientName);
        setOpptDescrip(data.opptDescrip);
        setAtlasOpptNum(data.atlasOpptNum);
    };

    useEffect(() => {
        axios.get(
            `http://localhost:4000/deals/${props.match.params.id}`)
            .then(response => setDealState(response.data))
            .catch(function (error) {
                console.log(error);
            });
    },[]);

    const onDeleteClick = (e) => {
        e.preventDefault();

        axios.post(`http://localhost:4000/deals/delete/${props.match.params.id}`)
            .then(res => console.log(res.data)
            );
        
        history.push('/');
    };

    return (
        <div className='d-flex justify-content-around mt-5'>
            <div>
            <h4>Are you sure you want to permanently delete this deal?</h4>
            <h5 className='mb-4'>(This action cannot be undone)</h5>
            <p>{`Client Name: ${clientName}`}</p>
            <p>{`Opportunity Description: ${opptDescrip}`}</p>
            <p>{`Atlas Opportunity Number: ${atlasOpptNum}`}</p>
            <div>
                <button className='btn btn-primary  mr-2' onClick={()=>history.push('/')}>Cancel</button>
                <button className='btn btn-danger' onClick={onDeleteClick}>Delete permanently</button>
            </div>
            </div>
        </div>
    )
}
export default DeleteDeal;