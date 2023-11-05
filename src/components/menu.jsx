import React from "react"

const Menu = ({ amount, title, onFormSubmit, AmountChange, TitleChange }) => {
    const options = Array.from({ length: 20 }, (_, i) => i++)

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

export { Menu }