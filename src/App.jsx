import { useState } from "react"
import { Menu } from "./components/menu"
import { List } from "./components/list"

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
