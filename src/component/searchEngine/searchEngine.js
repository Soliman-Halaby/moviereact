
export default function SearchEngine(MovieName) {
    //   const [myApi, setMyApi] = useState([]);
      fetch(`https://api.themoviedb.org/3/search/movie?&query=${MovieName}` , {
        methods: "GET",
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MmVmMTQxMTBkNmZiYzE3NDE0MTUzMzY1ZTE4NWI4MSIsInN1YiI6IjYwNTM2MDNkMGUyOWEyMDA3MzZkOGM0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K2zbw8Xr4ylJN8uZxwoYHxzx9R2d9SuZFpgDLVRIo6c",
            "Content-Type": "application/json;charset=utf-8"
        }})
        .then(res => res.json())
        .catch(error => {
            console.error(error);
        })
        .then(res => {
            console.log(res);
        })
    
    }
    