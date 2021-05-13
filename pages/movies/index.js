import Head from 'next/head'
import { connectToDatabase } from '../../util/mongodb'
import {useState} from 'react'
import Router from 'next/router'



export default function movies({ movies, page} ) {
  const textColor =  {
    color : 'blue'
  }
  const [search,setSearch] = useState("")


  const handleChange = (e) =>{
    e.preventDefault()
    setSearch(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    Router.push(`movies/search/${search}`)
  }
    
  return (
    <>
    <div className="container">
      <Head>
        <title>Furhan's Movie Database</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome To My Movie Database
        </h1>


        <p className="description" style = {textColor}>
          This is a simple application that queries and filters a mongoDB collection <br></br> and paginates the results
        </p>
        <form onSubmit = {handleSubmit}>
          <input type="text" id="form2" className="form-control"  onChange = {handleChange} value = {search} />
          <label className="form-label" htmlFor="form1">Search for a movie in my database</label>
        </form>
        <div className="grid">
          {movies.map(movie => (

            
          <a className="card" key = {movie.name}>
          <div className = "movieCard text-center">
            <h3> {movie.name} &rarr; ({movie.year})</h3>
            <img className = "movieImage" src ={movie.image}></img>
            <p>{movie.plot}</p>
            <p>IMDB Rating: {movie.imdb}</p>
            </div>
          </a>
          ))} 
        </div>
      </main>
      <footer>


      </footer>
      

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: start;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }


        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .subtitle {
          font-size: 2rem;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
        .movieImage {
            height: 200px;
            width: 200px;
        }
        strong{
          font-size: 1.5em;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
      <ul className="pagination">
  {page>1 && <li className="page-item"><a className="page-link" onClick={() => Router.push(`/movies/${page === 2 ? "" :"?page="+(page - 1)}`)}><strong >Previous</strong></a></li>}
  <li className="page-item"><a className="page-link" onClick={() => Router.push(`/movies/?page=${page + 1}`)}><strong>Next</strong></a></li>
  <li className="page-item"><a className="page-link" href="/movies"><strong>Start</strong></a></li>
</ul>
    </div>
    </>
  )
}

export async function getServerSideProps({query : {page = 1}}) {
  const { db } = await connectToDatabase();
  const start = +page === 1 ? 0 : (+page - 1) * 4
  const data = await db.collection("movies").find({$and:[{poster : {$exists : true }},{plot : {$ne : null}}]}).sort({_id : -1}).skip(start).limit(4).toArray()
  const movies = data.map(movie => { 
    return {
        name : movie.title,
        plot : movie.plot.length <= 100 ? movie.plot : movie.plot.slice(0,101) + "..." || null,
        year: +movie.year || null,
        imdb: +movie.imdb.rating || null,
        image: movie.poster || null
    }
  })
  return {
      props: {
          movies: movies,
          page : +page
    }
  }
}