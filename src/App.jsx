const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const App = () => {
  return (
    <>
      <header>
        <img src="logo-espaco-mulher.png" alt="logo espaço mulher" />
        <h1>Espaço Mulher</h1>
      </header>
      <form action="">
        <label htmlFor="">O que você precisa guardar?</label>
        <select name="" id="">
          {
            options.map(opt => (
              <option key={opt} value="">{opt}</option>
            ))
          }
        </select>
        <input type="text" placeholder="Manda aqui" />
        <button>Adicionar</button>
      </form>
      <div className="container">
        <p>teste</p>
      </div>
      <footer>
        {`Você tem 0 itens na lista`}
      </footer>
    </>
  )
}

export { App }
