import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactToExcel from 'react-html-table-to-excel';

const Deal = props => {

    return (
        <tr>
            <td>{props.deal.id}</td>
            <td>{props.deal.clientName}</td>
            <td>{props.deal.opptDescrip}</td>
            <td>{props.deal.atlasOpptNum}</td>
            <td>{props.deal.tcv}</td>
            <td>{props.deal.signing}</td>
            <td>{props.deal.pay}</td>
            <td>{props.deal.status}</td>
            {props.deal.casBuildTeamSuppIn && <td>{props.deal.casBuildTeamSuppIn.assets}</td>}
            {props.deal.casBuildTeamSuppIn && <td>{props.deal.casBuildTeamSuppIn.scoping}</td>}
            {props.deal.casBuildTeamSuppIn && <td>{props.deal.casBuildTeamSuppIn.dealPositioning}</td>}
            {props.deal.casBuildTeamSuppIn && <td>{props.deal.casBuildTeamSuppIn.deliveryPrep}</td>}
            {props.deal.casBuildTeamSuppIn && <td>{props.deal.casBuildTeamSuppIn.orals}</td>}
            {props.deal.casBuildTeamSuppIn && <td>{props.deal.casBuildTeamSuppIn.staffingPlan}</td>}
            <td>{props.deal.notes}</td>

            <td>
                <Link to={`/edit/${props.deal._id}`}>Edit</Link>
                {' | '}
                <Link to={`/delete/${props.deal._id}`}>Delete</Link>
            </td>
        </tr>
    );
};

const DealListPrint = props => {

    return (
        <>
            {props.deals.map((deal, id) => <Deal deal={deal} key={id} />)}
        </>

    );
};

export const DealsList = () => {
    const [deals, setDeals] = useState([]);

    useEffect(() => {
        axios.get(
            'http://localhost:4000/deals/')
            .then(response => setDeals(response.data))
            .catch(function (error) {
                console.log(error);
            });
    });

    return (
        <div style={{ marginTop: 20 }}>
            <div className='d-flex flex-row justify-content-between'>
                <h3>Deals List</h3>
                {<ReactToExcel
                    className='btn btn-primary'
                    table='table-to-xls'
                    filename='Go-To-Market'
                    sheet='Go-To-Market'
                    buttonText='Export'
                />}


            </div>

            <table className='table table-striped' style={{ marginTop: 20 }} id='table-to-xls'>
                <thead>
                    <tr>
                        <th style={{ backgroundColor: '#b4c9ed', border: 'solid 2px' }} rowSpan='2'>ID</th>
                        <th style={{ backgroundColor: '#b4c9ed', border: 'solid 2px' }} rowSpan='2'>Client Name</th>
                        <th style={{ backgroundColor: '#b4c9ed', border: 'solid 2px' }} rowSpan='2'>Oppty Description</th>
                        <th style={{ backgroundColor: '#b4c9ed', border: 'solid 2px' }} rowSpan='2'>ATLAS Oppty #</th>
                        <th style={{ backgroundColor: '#435063', color: 'white', border: 'solid 2px black' }} rowSpan='2'>TCV ($M)</th>
                        <th style={{ backgroundColor: '#435063', color: 'white', border: 'solid 2px black' }} rowSpan='2'>Signing</th>
                        <th style={{ backgroundColor: '#435063', color: 'white', border: 'solid 2px black' }} rowSpan='2'>Pay</th>
                        <th style={{ backgroundColor: '#435063', color: 'white', border: 'solid 2px black' }} rowSpan='2'>Status</th>
                        <th style={{ backgroundColor: '#b4c9ed', textAlign: 'center', border: 'solid 2px' }} colSpan='6' scope='colgroup'>CAS Build Team Supported in:</th>
                        <th style={{ backgroundColor: '#b4c9ed', border: 'solid 2px' }} rowSpan='2'>Notes</th>
                        <th rowSpan='2' style={{ border: 'solid 2px black' }}>Actions</th>
                    </tr>
                    <tr>
                        <th style={{ backgroundColor: '#11539e', color: 'white', border: 'solid 2px black' }} scope='col'>{'Assets & Collateral'}</th>
                        <th style={{ backgroundColor: '#11539e', color: 'white', border: 'solid 2px black' }} scope='col'>Scoping</th>
                        <th style={{ backgroundColor: '#11539e', color: 'white', border: 'solid 2px black' }} scope='col'>Deal Positioning</th>
                        <th style={{ backgroundColor: '#11539e', color: 'white', border: 'solid 2px black' }} scope='col'>Delivery Prep</th>
                        <th style={{ backgroundColor: '#11539e', color: 'white', border: 'solid 2px black' }} scope='col'>Orals</th>
                        <th style={{ backgroundColor: '#11539e', color: 'white', border: 'solid 2px black' }} scope='col'>Staffing Plan</th>
                    </tr>
                </thead>
                <tbody>
                    {deals && <DealListPrint deals={deals} />}
                </tbody>
            </table>
        </div>
    )
}

export default DealsList;