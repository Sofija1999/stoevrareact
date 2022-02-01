import ProveraInput from './ProveraInput'

function Provera() {

    const prijavljeni = [
        { ime: 'Sofija', prezime: 'Dokmanovic', jmbg: 12345, status: 'Isplaceno' },
        { ime: 'Nikola', prezime: 'Nikolic', jmbg: 123, status: 'Neisplaceno' },
        { ime: 'Marija', prezime: 'Markovic', jmbg: 2108999234562, status: 'Isplaceno' },
    ];

    return (
        <div>
            <ProveraInput prijavljeni={prijavljeni} />
        </div>
    );
}

export default Provera