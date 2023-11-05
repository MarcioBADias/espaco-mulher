import { useState } from "react"
import { Menu } from "./components/menu"
import { List } from "./components/list"

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

      <List
        itens={itens}
        setItens={setItens}
      />
    </>
  )
}

export { App }
