const API_IMG= "https://image.tmdb.org/t/p/w500/"

export function MovieBox ({title, poster_path, overview}){
    return(
        <div className="card">
            <h1>{title} </h1>
            <img className="img" src={API_IMG+poster_path}></img>
            <p className="overview">{overview}</p>
        </div>
    )
}