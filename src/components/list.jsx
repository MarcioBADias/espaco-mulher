import { useState } from "react"

const List = ({ itens, setItens }) => {
    const [filter, setFilter] = useState('')
    const [checked, setChecked] = useState(itens.map(() => false))

    const numCheckedItems = checked.filter((isChecked) => isChecked).length
    const percentChecked = itens.length > 0 ? ((numCheckedItems / itens.length) * 100).toFixed(0) : 0

    let filteredItens = [...itens]

    if (filter === 'guardados') {
        filteredItens = filteredItens.filter((item, i) => checked[i])
    } else if (filter === 'alfabetica') {
        filteredItens = filteredItens.sort((a, b) => a.title.localeCompare(b.title))
    }

    const handleCheckboxChange = (i) => {
        const updatedChecked = [...checked]
        updatedChecked[i] = !updatedChecked[i]
        setChecked(updatedChecked)

        // Atualize a propriedade 'checked' no objeto de item correspondente
        const updatedItens = [...itens]
        updatedItens[i].checked = updatedChecked[i]
        setItens(updatedItens)
    }

    const handleDeleteItens = i => {
        const uptadeItens = [...itens]
        uptadeItens.splice(i, 1)
        setItens(uptadeItens)
    }

    const handleClearListItens = () => {
        setItens([])
        setChecked([])
    }

    const handleFilterChange = (e) => setFilter(e.target.value)

    return (
        <>
            <ul>
                {filteredItens.map((item, i) => (
                    <li key={i}>
                        <input
                            type="checkbox"
                            name=""
                            checked={checked[i]}
                            onChange={() => handleCheckboxChange(i)}
                        />
                        <label className={checked[i] ? 'checked-item' : ''}>{item.amount} {item.title}</label>
                        <span onClick={() => handleDeleteItens(i)}>❌</span>
                    </li>
                ))}
            </ul>
            <div className="container">
                <select name="filter" onChange={handleFilterChange}>
                    <option value="">Ordenar por mais recentes</option>
                    <option value="guardados">Mostrar Guardados</option>
                    <option value="alfabetica">Ordem alfabética</option>
                </select>
                <button onClick={handleClearListItens}>Limpar lista</button>
            </div>

            <footer>
                {
                    itens.length > 0 && numCheckedItems > 0 ?
                        `Você tem ${itens.length} itens na lista. ${numCheckedItems} deles estão guardados (${percentChecked}%).`
                        : `Você tem ${itens.length} itens na lista`
                }
            </footer>
        </>
    )
}

export { List }