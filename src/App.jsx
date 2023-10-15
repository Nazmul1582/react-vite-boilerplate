import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-center bg-teal-200 p-5 font-bold text-5xl">
        React-Vite-Tailwindcss
      </h1>
      <div className="flex flex-col items-center justify-center">
        <h2 className="my-3 font-bold text-2xl">Daisy UI buttons</h2>
        <div>
          <button className="btn btn-nutral">Button</button>
          <button className="btn btn-neutral">Neutral</button>
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-info">Info</button>
          <button className="btn btn-warning">Warning</button>
          <button className="btn btn-ghost">Ghost</button>
          <button className="btn btn-outline btn-secondary">Secondary</button>
          <button className="btn btn-outline btn-info">Info</button>
          <button className="btn btn-outline btn-warning">Warning</button>
        </div>
      </div>
    </>
  );
}

export default App;
