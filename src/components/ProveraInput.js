import { useState } from 'react'

function ProveraInput(props) {

    const [jmbg, setJmbg] = useState();
    const [status, setStatus] = useState('');

    function handleJmbg(e) {
        setJmbg(e.target.value);
    }

    function proveri(e) {
        var element = props.prijavljeni.filter(function (p) {
            return p.jmbg == jmbg;
        })
        if (element.length !== 0) {
            alert('Status: ' + element[0].status);
        }
        else {
            alert('Osoba sa unesenim JMBG-om nije prijavljena za 100 evra!')
        }
    }

    return (
        <div>
            <div className="element-forme">
                <h6>Unesite Vaš JMBG: </h6>
                <input type={'text'} className="input_provera" value={jmbg} onChange={handleJmbg}></input>
                <button type="button" onClick={proveri} className="dugme_proveri" value={jmbg}  >Proveri status</button>
            </div>

        </div >
    );
}

export default ProveraInput