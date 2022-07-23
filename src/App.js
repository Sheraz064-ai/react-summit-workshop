import React from "react";

const App = () => {
  const [input, setInput] = React.useState("");
  const [items, setItems] = React.useState([]);
  const [isPending, startTransition] = React.useTransition();

  const search = async (event) => {
    const { value } = event.target;
    setInput(value);
    const result = await getItems(value);
    startTransition(() => {
      setItems(result);
    });
  };

  const getItems = async (value) => {
    const res = await fetch(`https://demo.dataverse.org/api/search?q=${value}`);
    const result = await res.json();
    return result.data.items;
  };
  return (
    <div>
      <h1>Start Transition Example</h1>
      <input value={input} onChange={search} />
      <p>{isPending ? "Searching..." : ""}</p>
      <div>
        {items.map((item) => {
          return (
            <div>
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
