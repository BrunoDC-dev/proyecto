import './App.css';

function App() {
    return ( 
        <header class = "header"
        id = "header" >
        <nav class = "nav container" >
        <a href = "#"class = "nav_logo" >
        <i class = "bx bxs-shopping-bags nav_logo-icon" > GUSMY </i> </a> 
        <div class = "nav_menu"
        id = "nav-menu" >
        <NavBar> </NavBar> 
        </div> 
        <div class = "nav_btns" >
        <div class = "login_toggle"
        id = "login-button" >
        < i class = "bx bx-user" > </i> 
        </div> 
        <div class = "nav_shop"
        id = "cart-shop" >
        <i class = "bx bx-shopping-bag" > </i> 
        </div> 
        </div> 
        </nav> 
        </header>
    );
}

export default App;