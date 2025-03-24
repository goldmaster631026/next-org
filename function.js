function Homepage(){
    const name = ['ada', 'budi', 'cici'];
    return(
        <div>
            <h1>Homepage</h1>
            <ul>
                {name.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}