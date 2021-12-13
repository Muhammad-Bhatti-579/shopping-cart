



function CartFooter(props) {

    return (
        <div className = "footer">
        <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">&copy; {props.year} </a>
        </nav>
        </div>
    );


}

export default CartFooter;