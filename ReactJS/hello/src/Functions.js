import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-sm-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="DU.jpg" alt="Logo" style={{ width: "180px" }} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/contact">Contact</Link>
               
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-disabled="false" to="/about">About</Link>
                
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/faculties">Faculties</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/getall">Api</Link>
            </li>
            
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

function Home(){
  const [count, setCount]=useState(5);

  return (<>
    <h1>{count}</h1>
    <button onClick={()=>{
      setCount(count+1)
    }
    }>Increament</button>
  </>)
}

function Contact(){
  return (<h1>Contact Page</h1>)
}

function About(){
  return (<h1>About Page</h1>)
}

const faculty = [
  {
    name: "Arjun Bala",
    post: "Prof. of Web Tech",
    image: "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/15---28-04-2023-02-07-35.jpg"
  },
  {
    name: "Nilesh Gambhva",
    post: "Dean",
    image: "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/3---28-04-2023-02-02-42.jpg"
  },
  {
    name: "Rupesh Vaishnav",
    post: "Placement Cordinator",
    image: "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/10---28-04-2023-02-07-03.jpg"
  }
]

const ans = faculty.map((fac) => {
  return (
    <>
      <div class="card" style={{width: "18rem"}}>
        <img src={fac.image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{fac.name}</h5>
          <p class="card-text">{fac.post}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </>
  )
})

// function GetAll(){

//   const [data, setData]= useState([]);

//   useEffect(()=>{
//     fetch("https://66f0d945f2a8bce81be6c843.mockapi.io/Students").then(res=>res.json()).then(res=>setData(res))
//   },[])

//   const formattesdData= data.map((fac)=>{
//       <>
//       <div class="card" style={{width: "18rem"}}>
//         <img src={fac.image} class="card-img-top" alt="..." />
//         <div class="card-body">
//           <h5 class="card-title">{fac.name}</h5>
//           <p class="card-text">{fac.post}</p>
//           <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//       </div>
//     </>
//   })

//   return(
//     <>
//       <div className="container mt-3">
//         <div className="row">{formattesdData}</div>
//       </div>
//       <div className="container mt-1" align="center">
//         <button type="button" className="btn btn-primary">Next</button>
//       </div>
//     </>
//   )
// }


function GetAll() {
  const [data, setData] = useState([]);

  // Fetch data only once when the component mounts
  useEffect(() => {
    fetch("https://66f0d945f2a8bce81be6c843.mockapi.io/Students")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []); // Add an empty dependency array so that useEffect runs only once on component mount

  const formattedData = data.map((fac) => {
    return (
      <div className="card" style={{ width: "18rem" }} key={fac.id}>
        <img src={fac.image} className="card-img-top" alt={fac.name} />
        <div className="card-body">
          <h5 className="card-title">{fac.name}</h5>
          <p className="card-text">{fac.post}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="container mt-3">
        <div className="row">{formattedData}</div>
      </div>
      <div className="container mt-1" align="center">
        <button type="button" className="btn btn-primary">Next</button>
      </div>
    </>
  );
}



function Card(){
  return(<>
    <div className="container  mt-3" align="center">
      <div className="row">{ans}</div>
    </div>
  </>)
}

export {Navbar, Card, Home, Contact, About, GetAll}