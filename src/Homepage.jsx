import React from 'react'
import "../src/Homep.css"
import { Link } from 'react-router-dom'


function Homepage() {
  return (
    <div>
    <div >
      <nav class="navbar navbar-expand-lg bg-body-tertiary move">
  <div class="container-fluid color">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active font" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    </div>
    <h1>
      Resume Builder Application
    </h1>
    <p>
      A resume builder application is a software or online tool 
      that helps users create professional resumes by providing templates,
       formatting options, and guidance on content. These applications streamline
        the resume-building process, making it easier for individuals to showcase their skills, 
        experience, and qualifications to potential employers. They often include features like pre-written
       job descriptions and skill examples, as well as the ability to customize the layout and design. 
    </p>
    <Link to="/path">
    <button className='button'>create a new resume</button>
    </Link>
    
    </div>
  )
}

export default Homepage