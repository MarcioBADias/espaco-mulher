import { useItens } from "./hooks/use-itens";
import { Menu } from "./components/menu";
import { List } from "./components/list";
import { Logo } from "./components/logo";

const App = () => {
  const state = useItens();

  return (
    <>
      <Logo />

      <Menu
        amount={state.amount}
        title={state.title}
        onFormSubmit={state.handleSubmit}
        AmountChange={state.handleAmountChange}
        TitleChange={state.handleTitleChange}
      />

      <List itens={state.itens} setItens={state.setItens} />
    </>
  );
};

export { App };
