import { useState } from "react"

const options = Array.from({ length: 20 }, (_, i) => i++)

const Menu = ({ amount, title, onFormSubmit, AmountChange, TitleChange }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <label>O que você precisa guardar?</label>
      <select
        name="amount"
        value={amount}
        onChange={AmountChange}
      >
        {
          options.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))
        }
      </select>
      <input
        type="text"
        name="title"
        placeholder="Manda aqui"
        value={title}
        onChange={TitleChange}
      />
      <button>Adicionar</button>
    </form>
  )
}

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

const App = () => {
  const [itens, setItens] = useState([])
  const [amount, setAmount] = useState('')
  const [title, setTitle] = useState('')
  const [filter, setFilter] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setItens((i) => [...i, { amount, title }])
    setAmount('')
    setTitle('')
  }

  const handleAmountChange = (e) => setAmount(e.target.value)
  const handleTitleChange = (e) => setTitle(e.target.value)
  const handleFilterChange = (e) => setFilter(e.target.value)
  const handleClearListItens = () => setItens([])

  return (
    <>
      <header>
        <img src="logo-espaco-mulher.png" alt="logo espaço mulher" />
        <h1>Espaço Mulher</h1>
      </header>
      <Menu
        amount={amount}
        title={title}
        onFormSubmit={handleSubmit}
        AmountChange={handleAmountChange}
        TitleChange={handleTitleChange}
      />
      <List itens={itens} setItens={setItens} filter={filter} />
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
          `Você tem ${itens.length} itens na lista`
        }
      </footer>
    </>
  )
}

export { App }
