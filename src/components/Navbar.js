import React, {useEffect} from 'react';
import '../styles/Navbar.css';




// const styles = {
//   navbar: {
//     // background: '#EFDECD',
//     textAlign: 'end',
    
  
//   }
// }

function Navbar(props) {
  
  const {

    pages = [],

    setCurrentPage,

    currentPage
  } = props


  useEffect(() => {

    document.title=currentPage.name
  }) 

  return (

    <nav className="navbar">
      {pages.map((page) =>
      (
        <a onClick={()=> 
          setCurrentPage(page)
        }>{page.name}</a>
      )
      )}
    </nav>

  );
}

export default Navbar;