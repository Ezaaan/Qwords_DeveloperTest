import React, {useEffect, useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Select from "react-select";

function ConfigPage({route, navigation}) {
    const location = useLocation();
    const [temp, setTemp] = useState('Temp');
    const navigate = useNavigate();


    const [selectedOption, setSelectedOption] = useState(null);
    const [price, setPrice] = useState(0);
    const data = [
      { label: '1 bulan', value: '1 bulan' },
      { label: '6 bulan', value: '6 bulan' },
      { label: '1 tahun', value: '1 tahun' },
    ];

    useEffect(()=>{
      if(selectedOption === null) return;
      if(selectedOption.value === '1 bulan'){
        setPrice(20000);
      }else if(selectedOption.value === '6 bulan'){
        setPrice(50000);
      }else if(selectedOption.value === '1 tahun'){
        setPrice(100000);
      }
    }, [selectedOption]);

    const handleCheckoutButton = () => {
      navigate('/Invoice', {state:{domain: location.state.domain, duration: selectedOption.value, price: price}});
    }
  
    return (
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh"}}>
        <div style={{ display: "flex", flexDirection: "column", border: "1px solid black", padding: "50px", borderRadius: "5px", marginBottom: "10px", width: "50vh"}}>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <p style={{textAlign: "left", paddingRight: "30px"}}>{location.state.domain}</p>
          <Select
            style={{textAlign: "right"}}
            value={selectedOption}
            onChange={setSelectedOption}
            options={data}
          />
          </div>
          {price !== 0 && (
            <>
              <p style={{textAlign: "right"}}>Total: Rp {price}</p>
              <p style={{textAlign: "left"}}>Nama: Agus Joko</p>
              <p style={{textAlign: "left"}}>Email: agusjoko@gmail.com</p>
              <button 
                onClick={handleCheckoutButton}
                style={{ marginTop: "50px",padding: "10px", borderRadius: "10px", border: "none", backgroundColor: "black", color: "white", width: "15vh", alignSelf: "center", cursor: "pointer"}}
              >
                Checkout
              </button>
            </>
          )}
        </div>
      </div>
    );
}

export default ConfigPage;