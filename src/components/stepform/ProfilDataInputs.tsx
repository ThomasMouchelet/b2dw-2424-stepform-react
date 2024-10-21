type ProfilDataInputsProps = {
    handleChange: (e: any) => void
}

const ProfilDataInputs = ({ handleChange } : ProfilDataInputsProps) => {
    return ( 
        <div>
            <input type="number" name="age" placeholder="Age" onChange={handleChange} />
            <input type="text" name="interests" placeholder="Area of interests" onChange={handleChange} />
            <input type="text" name="description" placeholder="Area of interests" onChange={handleChange} />
        </div>
     );
}
 
export default ProfilDataInputs;