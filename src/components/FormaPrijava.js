import { useState } from 'react';

function FormaPrijava(props) {

    const [ime, setIme] = useState('');
    const [prezime, setPrezime] = useState('');
    const [jmbg, setJmbg] = useState();

    function handleIme(e) {
        setIme(e.target.value);
    }

    function handlePrezime(e) {
        setPrezime(e.target.value);
    }

    function handleJmbg(e) {
        setJmbg(e.target.value);
    }

    return (
        <div>
            <h2>{props.naslov}</h2>
            <form className="forma_prijava">
                <div className="element-forme">
                    <label>Ime: </label>
                    <input type={'text'} className="input_prijava" value={ime} onChange={handleIme}></input>
                </div>
                <div className="element-forme">
                    <label>Prezime: </label>
                    <input type={'text'} className="input_prijava" value={prezime} onChange={handlePrezime}></input>
                </div>
                <div className="element-forme">
                    <label>JMBG: </label>
                    <input type={'number'} className="input_prijava" value={jmbg} onChange={handleJmbg}></input>
                </div>
                <button type="submit" onClick={() => props.funkcija(ime, prezime, jmbg)} className="dugme_prijava" value={jmbg} onChange={handleJmbg}>Prijavi se</button>
            </form>
        </div>
    );
}

export default FormaPrijava