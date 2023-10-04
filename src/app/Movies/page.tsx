import MovieImage from "../components/components/MovieImage";
import Movies from "../components/components/Movies";
const fetchMovies =async()=>{
const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6f2b280d2emsh9498f1d1f647b05p1d7854jsna47849675c89',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'}
};
try {
	const response = await fetch(url, options);
	const result = await response.json();
	const data = await result.d || [];
	return data;
} catch (error) {
	console.error(error);
}
}
const Home = async () =>{
const movies = await fetchMovies();

  return (
    <main className="">
       {movies.map((movie: any) => (
		<>
			<MovieImage key={movie.id} image={movie.i}/>
			<Movies key={movie.id} items={movie} />
		</>
        ))} 
    </main>
  )
}
export default Home;