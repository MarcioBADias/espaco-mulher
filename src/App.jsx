import { useState } from "react"

const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const App = () => {
  const [itens, setItens] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
    const { qtd, title } = e.target.elements
    setItens((i) => [...i, { qtd: qtd.value, title: title.value }])
  }
  return (
    <>
      <header>
        <img src="logo-espaco-mulher.png" alt="logo espaço mulher" />
        <h1>Espaço Mulher</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <label>O que você precisa guardar?</label>
        <select name="qtd">
          {
            options.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))
          }
        </select>
        <input type="text" name="title" placeholder="Manda aqui" />
        <button>Adicionar</button>
      </form>
      <ul>
        {itens.map((item, i) => (
          <li key={i}>
            <input type="checkbox" name="" />
            <label >{item.qtd} {item.title}</label>
            <span>❌</span>
          </li>
        ))}
      </ul>
      <footer>
        {`Você tem ${itens.length} itens na lista`}
      </footer>
    </>
  )
}

export { App }
