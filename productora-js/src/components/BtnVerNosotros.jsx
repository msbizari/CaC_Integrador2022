export default function BtnVerNosotros(props) {
    return (
        <div>
            <button onClick={props.irANosotros} style={{backgroundColor:"transparent", border:'none'}}>
                <p>Leé más sobre nosotros acá</p>
            </button>
        </div>
    )
}