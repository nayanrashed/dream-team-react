import './Cart.css';

const Cart = ({selectedPlayers}) => {
    //(props) likhle nicher moto likhte hobe
    // console.log(props.selectedPlayers);
    
    return (
        <div>
            <h3>Total Selected Players:{selectedPlayers.length}</h3>
            {selectedPlayers.map((player)=><li key={player.id}>{player.name}</li>)}
        </div>
    );
};

export default Cart;