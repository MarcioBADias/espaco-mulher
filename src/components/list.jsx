import { useState } from "react"

const List = ({ itens, setItens, filter }) => {
    const [checked, setChecked] = useState(Array(itens.length).fill(false))

    const handleCheckboxChange = i => {
        const updateCheked = [...checked]
        updateCheked[i] = !updateCheked[i]
        setChecked(updateCheked)
    }

    const handleDeleteItens = i => {
        const uptadeItens = [...itens]
        uptadeItens.splice(i, 1)
        setItens(uptadeItens)
    }

    let filteredItens = [...itens]

    if (filter === 'guardados') {
        filteredItens = filteredItens.filter((_, i) => checked[i])
    } else if (filter === 'alfabetica') {
        filteredItens = filteredItens.sort((a, b) => a.title.localeCompare(b.title))
    }

    return (
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
    )
}

export { List }