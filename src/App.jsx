import { useState } from "react"

const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

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

const List = ({ itens, setItens }) => {
  const [checked, setChecked] = useState(false)

  const handleCheckboxChange = () => setChecked(i => !i)

  const handleDeleteItens = i => {
    const uptadeItens = [...itens]
    uptadeItens.splice(i, 1)
    setItens(uptadeItens)
  }

  return (
    <ul>
      {itens.map((item, i) => (
        <li key={i}>
          <input
            type="checkbox"
            name=""
            checked={checked}
            onChange={handleCheckboxChange}
          />
          <label className={checked ? 'checked-item' : ''}>{item.amount} {item.title}</label>
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

  const handleSubmit = (e) => {
    e.preventDefault()
    setItens((i) => [...i, { amount, title }])
    setAmount('')
    setTitle('')
  }

  const handleAmountChange = (e) => setAmount(e.target.value)
  const handleTitleChange = (e) => setTitle(e.target.value)

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
      <List itens={itens} setItens={setItens} />
      <footer>
        {`Você tem ${itens.length} itens na lista`}
      </footer>
    </>
  )
}

export { App }
