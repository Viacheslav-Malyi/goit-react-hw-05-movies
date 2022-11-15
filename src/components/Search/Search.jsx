export const Search = ({ onSubmit }) => {
  return (
    <form onSubmit={event => onSubmit(event)}>
      <input type="text" name="query" placeholder="Type name of movie" />
      <button type="submit">Search</button>
    </form>
  );
};
