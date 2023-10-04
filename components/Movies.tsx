

const Movies =({ items }:any)=>{
    if (!items) {
        return <div>Loading...</div>;
      }
const {  id, l, q, qid, rank, s, y } = items;

return (
    <div>
      <h2>Title: {l}</h2>
      <p>ID: {id}</p>
      <p>Type: {q}</p>
      <p>Category ID: {qid}</p>
      <p>Rank: {rank}</p>
      <p>Starring: {s}</p>
      <p>Year: {y}</p>
    </div>
  );
}
export default Movies;