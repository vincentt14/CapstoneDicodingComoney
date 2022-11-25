import React from 'react';
import savingMoneyIdb from '../data/saving-money-idb';
import useInput from '../hooks/UseInput';
import { editSavingsMoney } from '../utils/authentication-user';
import LocaleContext from '../context/LocaleContext';

function EditSavingsForm(getId) {
        const [selectedSaving, setSelectedSaving] = React.useState('')
        const [savingsName, setSavingsName] = useInput('');
	const [amount, setAmount] = useInput('');
        const [targetDate, setTargetDate] = useInput('');
        const { locale } = React.useContext(LocaleContext); 

        React.useEffect(function(){
                async function selectedSavings(){
                        const parseId = JSON.stringify(getId)
                        const jsonParse = JSON.parse(parseId);
                        const detail = await savingMoneyIdb.getEditSavingsMoney(parseFloat(jsonParse.getId))
                        setSelectedSaving({
                                name: detail.data.savingsName,
                                amount: detail.data.amount,
                                targetDate: detail.data.targetDate
                        })
                }
                selectedSavings()
        },[]);
        
        const onSubmit = async (event) => {
		event.preventDefault()
                editSavingsMoney(getId, savingsName, amount, targetDate);
	}

	return (
                <form className="my-5" onSubmit={onSubmit}>
                        <input type="text" className="form-control my-4" placeholder="Name" aria-label="Name" value={savingsName || selectedSaving.name} onChange={setSavingsName}/> 
                        <input type="text" className="form-control my-4" placeholder="Amount target" aria-label="Amount target" value={amount || selectedSaving.amount } onChange={setAmount}/>
                        <input className="form-control my-4" type="date" value={targetDate || selectedSaving.targetDate } onChange={setTargetDate}/>
                        <button type="submit" className="btn btn-primary btn-lg form-control btn-color">{locale === "en" ? "Edit your Savings" : "Edit Tabungan Anda"}</button>
                </form>
	);

}

export default EditSavingsForm;