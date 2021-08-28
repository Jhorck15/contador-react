 //console.log(ReactDOM)
 const Saludo = () => {
    return <h1>Hola Mundo</h1>;
};

const Interpolar = () => {

    const [numero, setNumero] = React.useState(0);

    // console.log(numero);


    return (
        <div>
            <h1>Hola {numero}</h1>
            <hr />
            <h3>Fecha: {new Date().getDate()}</h3>
        </div>
    )
}


ReactDOM.render(
    <Interpolar />,
    document.getElementById("root")

);