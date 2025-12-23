import React from "react";

const Locations = () => {
  const locations = [
    { name: "Auto centar Gavrić", city: "Novi Sad", address: "Gaudijeva 13" },
    {
      name: "Auto centar Ivković",
      city: "Novi Sad",
      address: "Mihaila Pupina 2",
    },
    {
      name: "Auto centar Klisa",
      city: "Novi Sad",
      address: "Ilije Birčanina 23",
    },
    { name: "Auto Centar Liman", city: "Novi Sad", address: "Pabla Pikasa 3" },
  ];

  return (
    <section class="sellers">
      <h1>Prodajne lokacije</h1>
      <div class="locations">
        {locations.map((location) => (
          <div>
            <h2>{location.name}</h2>
            <p>
              Adresa:{" "}
              <span>
                {location.address}, {location.city}
              </span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Locations;
