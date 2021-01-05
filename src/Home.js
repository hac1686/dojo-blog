const Home = () => {

    const handleClick = (e) => { //e to see the event info
        console.log('hello, ninjas',e)
    }

    const handleClickAgain = (name, e) => { //e to see the event info
       console.log('hello ' + name, e.target)
       //console.log('hello ' + name);
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => {
                handleClickAgain('mario',e) //remove e here and in anonymous funct arg to remove event details
            }}>Click me again</button>
        </div>
     );
}
 
export default Home;