import React from "react";
import Locations from "./Locations";
import { useSearchParams } from "react-router-dom";

const Cars = () => {
  const [params, setParams] = useSearchParams();

  const auto = params.get("auto") || "dream";

  const cars = [
    {
      id: "dream",
      model: { code: "dream", name: "Dream Car" },
      image: "https://i.ibb.co/v4TJT978/blue-car.png",
      engines: ["dizel", "benzin", "hibrid"],
      defaultEngine: "benzin",
      colorHex: "#4776ba",
      finish: "sjajna",
      price: { fromEUR: 7899, toEUR: 43799 },
    },
    {
      id: "nido",
      model: { code: "nido", name: "Nidorino" },
      image: "https://i.ibb.co/tPJPSQK6/renault1.png",
      engines: ["dizel", "benzin", "hibrid"],
      defaultEngine: "dizel",
      colorHex: "#9aa0a6",
      finish: "sjajna",
      price: { fromEUR: 40639, toEUR: 58927 },
    },
    {
      id: "bulba",
      model: { code: "bulba", name: "Bulbasaur" },
      image: "https://i.ibb.co/hFqJfRNr/renault2.png",
      engines: ["dizel", "benzin", "hibrid"],
      defaultEngine: "hibrid",
      colorHex: "#b3b3b3",
      finish: "mat",
      price: { fromEUR: 27629, toEUR: 40062 },
    },
    {
      id: "mar",
      model: { code: "mar", name: "Mareep" },
      image: "https://i.ibb.co/gLwnYZqs/renault3.png",
      engines: ["benzin", "hibrid"],
      defaultEngine: "benzin",
      colorHex: "#c0392b",
      finish: "sjajna",
      price: { fromEUR: 3679, toEUR: 5335 },
    },
    {
      id: "char",
      model: { code: "char", name: "Charizard" },
      image: "https://i.ibb.co/vvKK2s4K/renault4.png",
      engines: ["dizel", "benzin", "hibrid"],
      defaultEngine: "benzin",
      colorHex: "#2c3e50",
      finish: "mat",
      price: { fromEUR: 22199, toEUR: 32189 },
    },
  ];

  const filteredCar = cars.filter((car) => car.id === auto);
  return (
    <>
      <section className="cars">
        {filteredCar.map((fc) => (
          <div id="car-filter">
            <div id="filtered-image">
              <img src={fc.image} alt={fc.id} />
            </div>
            <div id="car-spec">
              <p style={{ width: "50%", fontWeight: "bold" }}>
                Izračunaj cenu svog auta iz snova
              </p>

              <div className="spec-item">
                <p>Počevši od {fc.price.fromEUR}€</p>
              </div>
              <div className="spec-item">
                <p>Model automobila:</p>
                <p>{fc.model.name}</p>
              </div>
              <div className="spec-item">
                <p>Tip motora:</p>
                <p>
                  {fc.engines
                    .map(
                      (engine) =>
                        engine.charAt(0).toUpperCase() + engine.slice(1)
                    )
                    .join(", ")}
                </p>
              </div>
              <div className="spec-item">
                <p>Boja automobila:</p>
                <p>
                  <span style={{ background: `${fc.colorHex}` }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </span>{" "}
                  {fc.colorHex}
                </p>
              </div>
              <div className="spec-item">
                <p>Tip boje automobila:</p>
                <p>
                  {fc.finish.charAt(0).toUpperCase() + fc.finish.slice(1)} boja
                </p>
              </div>
              <div className="spec-item">
                <p>Opseg cene:</p>
                <p>
                  {fc.price.fromEUR}€ - {fc.price.toEUR}€
                </p>
              </div>
              <div className="spec-item">
                <p>Kontakt mejl:</p>
                <p>primer@email.com</p>
              </div>
            </div>
          </div>
        ))}

        <div id="car-list">
          {cars.map((car) => {
            const isSelected = car.id === auto;
            return (
              <div
                id="car-info"
                key={car.id}
                className={isSelected ? "selected" : ""}
              >
                <div id="car-item">
                  <div id="car-image">
                    <img src={car.image} alt={car.id} />
                  </div>
                  <p>Već od {car.price.fromEUR}€</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Cars;
