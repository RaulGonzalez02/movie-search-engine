// eslint-disable-next-line react/prop-types
export default function Movies({ movie}) {
    const {Title, Year, Poster } = movie
    return (
        <article className="article">
            <h2>{Title}</h2>
            <p>{Year}</p>
            <img src={Poster}></img>
        </article>
    )
}