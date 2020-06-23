import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
const styles = require("./CreateDeal.module.scss");

export const CreateDeal = () => {
    const { addDeal } = useContext(GlobalContext);
    const [id, setId] = useState();
    const [clientName, setClientName] = useState('');
    const [opptDescrip, setOpptDescrip] = useState('');
    const [atlasOpptNum, setAtlasOpptNum] = useState('');
    const [tcv, setTcv] = useState('');
    const [signing, setSigning] = useState('');
    const [pay, setPay] = useState('');
    const [status, setStatus] = useState('');
    const [assets, setAssets] = useState('TBD');
    const [scoping, setScoping] = useState('TBD');
    const [dealPositioning, setDealPositioning] = useState('TBD');
    const [deliveryPrep, setDeliveryPrep] = useState('TBD');
    const [orals, setOrals] = useState('TBD');
    const [staffingPlan, setStaffingPlan] = useState('TBD');
    const [notes, setNotes] = useState('');

    const onSubmitForm = () => {

        console.log(`name: ${clientName}`);

        //create new deal object with values from form
        const newDeal = {
            id: id,
            clientName: clientName,
            opptDescrip: opptDescrip,
            atlasOpptNum: atlasOpptNum,
            tcv: tcv,
            signing: signing,
            pay: pay,
            status: status,
            casBuildTeamSuppIn: {
                assets: assets,
                scoping: scoping,
                dealPositioning: dealPositioning,
                deliveryPrep: deliveryPrep,
                orals: orals,
                staffingPlan: staffingPlan
            },
            notes: notes

        };

        addDeal(newDeal);

        setId('');
        setClientName('');
        setOpptDescrip('');
        setAtlasOpptNum('');
        setTcv('');
        setSigning('');
        setPay('');
        setStatus('');
        setAssets('TBD');
        setScoping('TBD');
        setDealPositioning('TBD');
        setDeliveryPrep('TBD');
        setOrals('TBD');
        setStaffingPlan('TBD');
        setNotes('');
    }

    const createNewDeal = 'Create New Deal Entry';

    return (
        <div className={styles.topMargin}>
            <h3>{createNewDeal}</h3>
            <form onSubmit={onSubmitForm}>
                <div className={styles.createDealContainer}>
                    {/* {Holds Id, Client Name, Oppty Desc and ATLAS Oppty Number } */}
                    <div className={styles.sectionOne} >
                        <div className='form-group'>
                            <label>ID</label>
                            <input type='text'
                                className='form-control'
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                                name=''
                            />
                        </div>
                        <div className='form-group'>
                            <label>Client Name</label>
                            <textarea type='text'
                                className='form-control'
                                value={clientName}
                                onChange={(e) => setClientName(e.target.value)}
                                name=''
                                style={{ minHeight: '60px' }}
                            />
                        </div>
                        <div className='form-group'>
                            <label>Opportunity Description</label>
                            <textarea type='text'
                                className='form-control'
                                value={opptDescrip}
                                onChange={(e) => setOpptDescrip(e.target.value)}
                                name=''
                                style={{ minHeight: '150px' }}
                            />
                        </div>
                        <div className='form-group'>
                            <label>ATLAS Opportunity Number</label>
                            <input type='text'
                                className='form-control'
                                value={atlasOpptNum}
                                onChange={(e) => setAtlasOpptNum(e.target.value)}
                                name=''
                            />
                        </div>
                    </div>
                    {/* {Holds TCV, Signing, Pay and Status } */}
                    <div className={styles.sectionTwo} >
                        <div className='form-group'>
                            <label>TCV ($M)</label>
                            <input type='text'
                                className='form-control'
                                value={tcv}
                                onChange={(e) => setTcv(e.target.value)}
                                name=''
                            />
                        </div>
                        <div className='form-group'>
                            <label>Signing</label>
                            <input type='text'
                                className='form-control'
                                value={signing}
                                onChange={(e) => setSigning(e.target.value)}
                                name=''
                            />
                        </div>
                        <div className='form-group'>
                            <label>Pay</label>
                            <input type='text'
                                className='form-control'
                                value={pay}
                                onChange={(e) => setPay(e.target.value)}
                                name=''
                            />
                        </div>
                        <div className='form-group'>
                            <label>Status</label>
                            <input type='text'
                                className='form-control'
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                name=''
                            />
                        </div>
                    </div>
                    {/* {Holds CAS Build Team Supported in subsections} */}
                    <div className={styles.sectionThree} >
                        <div className='form-group'>
                            <label>{'Assets & Collateral'}</label>
                            <input type='text'
                                className='form-control'
                                value={assets}
                                onChange={(e) => setAssets(e.target.value)}
                                name=''
                            />
                        </div>
                        <div className='form-group'>
                            <label>Scoping</label>
                            <input type='text'
                                className='form-control'
                                value={scoping}
                                onChange={(e) => setScoping(e.target.value)}
                                name=''
                            />
                        </div>
                        <div className='form-group'>
                            <label>Deal Positioning</label>
                            <input type='text'
                                className='form-control'
                                value={dealPositioning}
                                onChange={(e) => setDealPositioning(e.target.value)}
                                name=''
                            />
                        </div>
                        <div className='form-group'>
                            <label>Delivery Prep</label>
                            <input type='text'
                                className='form-control'
                                value={deliveryPrep}
                                onChange={(e) => setDeliveryPrep(e.target.value)}
                                name=''
                            />
                        </div>
                        <div className='form-group'>
                            <label>Orals</label>
                            <input type='text'
                                className='form-control'
                                value={orals}
                                onChange={(e) => setOrals(e.target.value)}
                                name=''
                            />
                        </div>
                        <div className='form-group'>
                            <label>Staffing Plan</label>
                            <input type='text'
                                className='form-control'
                                value={staffingPlan}
                                onChange={(e) => setStaffingPlan(e.target.value)}
                                name=''
                            />
                        </div>
                    </div>
                    {/* {Holds Notes} */}
                    <div className={styles.sectionFour} >
                        <div className='form-group'>
                            <label>Notes</label>
                            <textarea type='text'
                                className='form-control'
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                                name=''
                                style={{ minHeight: '300px' }}
                            />
                        </div>
                    </div>
                </div>
                <div className='form-group'>
                    <input type='submit' value='Create Deal' className='btn btn-primary mt-5' />
                </div>
            </form>
        </div>
    )
}

export default CreateDeal;