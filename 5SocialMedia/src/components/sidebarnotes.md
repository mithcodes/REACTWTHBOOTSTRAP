const Sidebar = ({selectedTab,setSelectedTab }) => {
  const handleOnClick=(tabName)=>{
    setSelectedTab(tabName)
  }  
  return (
      <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{ width: '280px' }}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
          <span className="fs-4">Sidebar</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item" onClick={()=>{handleOnClick("Home")}} >
            <a href="#" className={`nav-link ${selectedTab==="Home" && "active"}`} aria-current="page">
              <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
              Home
            </a>
          </li>
           <li className="nav-item" onClick={()=>{handleOnClick("Create Post")}} >
            <a href="#" className={`nav-link ${selectedTab==="Create Post" && "active"}`} aria-current="page">
              <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
              Create Post
            </a>
          </li>
          <li>
            
          </li>
         
          
        </ul>
        <hr />
        <div className="dropdown">
          <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
            <strong>mdo</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li><a className="dropdown-item" href="#">New project...</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  Sidebar Structure and Styling:

The Sidebar component is a functional component that renders a sidebar with various elements like links and a dropdown menu.
It applies styles using Bootstrap classes (nav, dropdown-menu, etc.) and inline styles (style={{ width: '280px' }}).
handleOnClick Function:

This function is called when a tab is clicked. It takes a tabName as an argument and updates the selectedTab state using setSelectedTab.
selectedTab and setSelectedTab Props:

These are passed as props to the Sidebar component from its parent component. selectedTab is used to determine which tab is currently selected, and setSelectedTab is a function to update the selected tab.
Conditional Rendering for Active Tab:

The active class is conditionally applied to the nav-link element based on the value of selectedTab. This is a common pattern in Bootstrap for indicating the currently active tab.
Dropdown Menu:

The dropdown menu is implemented using Bootstrap classes (dropdown, dropdown-menu, etc.). It shows additional options when clicked.
export default Sidebar:

This line exports the Sidebar component as the default export from the Sidebar.js file, allowing other files to import and use the Sidebar component using import Sidebar from './Sidebar'.