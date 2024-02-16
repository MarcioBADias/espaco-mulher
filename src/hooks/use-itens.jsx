import localforage from "localforage";
import { useState, useEffect } from "react";

const useItens = () => {
  const [itens, setItens] = useState([]);
  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    localforage
      .setItem("guardaCoisas", itens)
      .catch((error) => alert(error.message));
  }, [itens]);

  useEffect(() => {
    localforage
      .getItem("guardaCoisas")
      .then((value) => {
        if (value) {
          setItens(value);
        }
      })
      .catch((error) => alert(error.message));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setItens((i) => [...i, { amount, title }]);
    setAmount("");
    setTitle("");
  };

  const handleAmountChange = (e) => setAmount(e.target.value);
  const handleTitleChange = (e) => setTitle(e.target.value);

  return {
    itens,
    amount,
    title,
    setItens,
    handleSubmit,
    handleAmountChange,
    handleTitleChange,
  };
};

export { useItens };
