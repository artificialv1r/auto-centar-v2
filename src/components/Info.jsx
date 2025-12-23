import React from "react";
import Locations from "./Locations";

const Info = () => {
  return (
    <div
      style={{
        padding: "20px 40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1>Auto Centar - pouzdan partner za vaše vozilo</h1>
      <p>
        Vaše vozilo zaslužuje najbolju njegu. Auto Centar je moderna web
        aplikacija koja vam omogućava brz i jednostavan pristup svim
        informacijama i uslugama vezanim za održavanje, servisiranje i kupovinu
        vozila.
      </p>
      <p>
        Auto Centar je specijalizovana web aplikacija namijenjena vozačima koji
        žele vrhunsku uslugu i jasne informacije na jednom mjestu. Kombinujemo
        dugogodišnje iskustvo u auto-industriji sa modernim tehnologijama kako
        bismo unaprijedili vaše korisničko iskustvo.
      </p>
      <p>
        Naša misija je da vlasnicima vozila olakšamo donošenje odluka vezanih za
        servisiranje, održavanje i kupovinu automobila, uz naglasak na kvalitet,
        sigurnost i povjerenje.
      </p>
      <Locations />
    </div>
  );
};

export default Info;
