import './Cart.css';

const Cart = ({selectedPlayers ,remaining,totalCost}) => {
    //(props) likhle nicher moto likhte hobe
    // console.log(props.selectedPlayers);
    
    return (
        <div>
            <h3>Total Selected Players:{selectedPlayers.length}</h3>
            <h3>Remaining budget:{remaining}</h3>
            <h3>Total Cost:{totalCost}</h3>
            {selectedPlayers.map((player)=><li key={player.id}>{player.name}</li>)}
        </div>
    );
};

export default Cart;