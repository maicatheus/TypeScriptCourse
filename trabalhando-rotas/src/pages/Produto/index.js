import { useParams } from 'react-router-dom';

function Produto() {
    const { id } = useParams();
    return (
        <div>
            <h2>Detalhe do Produto</h2>
            <span>
                <p>Meu produto é {id}</p><br/><br/>
            </span>
        </div>
    );
}

export default Produto;
