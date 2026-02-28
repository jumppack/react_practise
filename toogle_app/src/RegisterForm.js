import {useState} from 'react';

const RegisterForm = () => {

    const [form, setForm] = useState({
        firstName: 'Karan',
        lastName: 'Mehta',
        email: 'karanmehta@gmail.com'
    })



    return (
        <div className="register">
            <label>
                FirstName: 
                <input value={form.firstName} onChange={ (e) => setForm({...form, firstName: e.target.value})} />
            </label>
            <br></br>

            <label>
                Last Name: 
                <input value={form.lastName} onChange={ (e) => setForm({...form, lastName: e.target.value})} />
            </label>
            <br></br>

            <label>
                email: 
                <input value={form.email} onChange={ (e) => setForm({...form, email: e.target.value})} />
            </label>
            <br></br>

            <p>
                {form.firstName}{' '}
                {form.lastName}{' '}
                ({form.email})
            </p>
        </div>
    )

}

export default RegisterForm;