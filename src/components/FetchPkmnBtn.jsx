const FetchPkmnBtn = ({pkmns, setPkmns}) => {

    function fetchPkmn() {
        console.log("Fetching Pokemon...");
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response => response.json())
            .then(response => {
                console.log("Response: ", response.results[0].name);
                setPkmns(response.results.map(pkmn => pkmn.name));
                
            })
    }

    return (
        <button className="fetch-pkmn-btn" onClick={fetchPkmn}>Fetch Pokemon</button>
    );
}
export default FetchPkmnBtn;