/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import "./Home.css";
import { useState } from "react";
import Cart from "../Cart/Cart";

const Home = () => {
  const [allPlayers, setAllPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setAllPlayers(data));
  }, []);

  const handleSelectPlayer = (player) => {
    const isExist = selectedPlayers.find((item) => item.id == player.id);
    let count = player.salary;
    if (isExist) {
      return alert("Already booked");
    } else {
        selectedPlayers.forEach(item=>{
            count=count+item.salary;
        })
        console.log(count);
      const newSelectedPlayers = [...selectedPlayers, player];
      setSelectedPlayers(newSelectedPlayers);
    }
  };

  return (
    <div className="container">
      <div className="home-container">
        <div className="card-container">
          {allPlayers.map((player) => (
            <div key={player.id} className="card">
              <div className="card-img">
                <img className="photo" src={player.image} alt="" />
                <h2>{player.name}</h2>
                <p>
                  <small>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Odit, error!
                  </small>
                </p>
                <div className="info">
                  <p>Salary: {player.salary} $</p>
                  <p>{player.role}</p>
                </div>
                <button
                  onClick={() => handleSelectPlayer(player)}
                  className="card-btn"
                >
                  Select
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart">
          <Cart selectedPlayers={selectedPlayers}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
