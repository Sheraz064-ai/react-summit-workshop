import React from "react";

const App = () => {
  const [input, setInput] = React.useState("");
  const [items, setItems] = React.useState([]);
  const [isPending, startTransition] = React.useTransition();

  const search = (event) => {
    const { value } = event.target;
    setInput(value);
    startTransition(() => {
      getItems();
    });
  };

  const getItems = async () => {
    const res = await fetch(`https://demo.dataverse.org/api/search?q=${input}`);
    const result = await res.json();
    setItems(result.data.items);
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
