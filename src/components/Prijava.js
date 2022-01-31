import FormaPrijava from "./FormaPrijava";

function Prijava() {

    function prijaviSe(ime, prezime, jmbg) {
        alert('Poštovani/a ' + ime + ' ' + prezime + ' - JMBG: ' + jmbg + ' uspešno ste se prijavili za 100 evra!')
    }

    return (
        <div>
            <FormaPrijava naslov='I JA 100 DOBIJAM ISTO' funkcija={prijaviSe} />
        </div>
    );
}

export default Prijava