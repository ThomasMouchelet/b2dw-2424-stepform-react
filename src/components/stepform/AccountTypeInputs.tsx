type AccountTypeInputsProps = {
    handleChange: (e: any) => void
}


const AccountTypeInputs = ({ handleChange } : AccountTypeInputsProps) => {
    return ( 
        <div>
            <label htmlFor="personal">Personal account</label>
            <input type="radio" name="accountType" value="personal" id="personal" onChange={handleChange} />
            <label htmlFor="business">Business account</label>
            <input type="radio" name="accountType" value="business" id="business" onChange={handleChange} />
        </div>
     );
}
 
export default AccountTypeInputs;