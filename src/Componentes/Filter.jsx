const Filter = ({filter, setFilter, setSort}) => {
  return (
    <div className= "filter">
        <h2>Filtar:</h2>
            <div className="filter-option">  
                <div>
                    <h3>Status:</h3>
                    <select value={filter} onChange={(e) => setFilter (e.target.value)}>
                        <option value="ALL">Todos</option>
                        <option value="Completed">Completas</option>
                        <option value="Incomplete">Incompleta</option>
                    </select>
                </div>
          
            <div>
                <h3>Ordem Alfabetica:</h3>
                <button onClick={() => setSort ("Asc")}>Asc</button>
                <button onClick={() => setSort ("Desc")}>Desc</button>
            </div>
        </div>

    </div>
  )
}

export default Filter