type PersonalInformationInputsProps = {
    handleChange: (e: any) => void
}

const PersonalInformationInputs = ({ handleChange } : PersonalInformationInputsProps) => {
    return ( 
        <div>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        </div>
     );
}
 
export default PersonalInformationInputs;