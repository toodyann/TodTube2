export default function Input({ query, setQuery }) {
  return (
    <header>
      <input
        type="text"
        placeholder="Пошук..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </header>
  );
}
