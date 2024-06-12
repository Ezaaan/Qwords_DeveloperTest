import React, {useEffect, useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Select from "react-select";

function InvoicePage({route, navigate}) {
    const location = useLocation();
    const [temp, setTemp] = useState('Temp');
  
    return (
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh"}}>
        <div style={{ display: "flex", flexDirection: "column", border: "1px solid black", padding: "50px", borderRadius: "5px", marginBottom: "10px", width: "50vh"}}>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <div style={{ display: "flex", flexDirection: "column"}}>
              <p style={{textAlign: "left"}}>No Invoice: #12</p>
              <p style={{textAlign: "left"}}>Agus Joko</p>
              <p style={{textAlign: "left"}}>agusjoko@gmail.com</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
              <p style={{textAlign: "center", alignSelf: "center", fontWeight: "bold"}}>UNPAID</p>
            </div>
          </div>

          <table style={{alignSelf: "center", border: "1px solid"}}>
                <tr>
                    <th style={{alignSelf: "center", border: "1px solid"}}>No</th>
                    <th style={{alignSelf: "center", border: "1px solid"}}>Deskripsi</th>
                    <th style={{alignSelf: "center", border: "1px solid"}}>Total</th>
                </tr>
                <tr>
                  <td style={{alignSelf: "center", border: "1px solid"}}>1</td>
                  <td style={{alignSelf: "center", border: "1px solid"}}>Pembelian domain {location.state.domain}</td>
                  <td style={{alignSelf: "center", border: "1px solid"}}>Rp {location.state.price}</td>
                </tr>
          </table>
          {/* <p style={{textAlign: "right"}}>Total: Rp {temp}</p> */}
          <p style={{textAlign: "right"}}>Total: Rp {location.state.price}</p>
          <p style={{textAlign: "center", fontWeight: "bold"}}>Silahkan bayar di no rekening berikut ini:</p>
          <p style={{textAlign: "center"}}>663721667321</p>
        </div>
      </div>
    );
}

export default InvoicePage;