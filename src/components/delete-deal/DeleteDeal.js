import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {GlobalContext} from '../../context/GlobalState';

export const DeleteDeal = (props) => {
    const { deleteDeal } = useContext(GlobalContext);

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
            `/api/deals/${props.match.params.id}`)
            .then(response => setDealState(response.data))
            .catch(function (error) {
                console.log(error);
            });
    },[]);

    const onDeleteClick = () => {
        deleteDeal(props.match.params.id);        
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