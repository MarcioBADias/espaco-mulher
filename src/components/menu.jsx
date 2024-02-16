const Menu = ({ amount, title, onFormSubmit, AmountChange, TitleChange }) => {
  const options = Array.from({ length: 20 }, (_, i) => crypto.randomUUID());

  return (
    <form onSubmit={onFormSubmit}>
      <label>O que você precisa guardar?</label>
      <select name="amount" value={amount} onChange={AmountChange}>
        {options.map((opt, i) => (
          <option key={opt} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        name="title"
        placeholder="Manda aqui"
        value={title}
        onChange={TitleChange}
        autoFocus
      />
      <button>Adicionar</button>
    </form>
  );
};

export { Menu };
