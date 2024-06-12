import React, {useEffect, useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Select from "react-select";

function ConfigPage({route, navigate}) {
    const location = useLocation();
    const [temp, setTemp] = useState('Temp');
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

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


    const handleInputChange = (event) => {
      setQuery(event.target.value);
    };

    const handleCheckoutButton = () => {
    
    }
  
    const fetchResults = async (searchQuery) => {
        setLoading(true);
        setError(null);
    
        try {
          const response = await fetch(`https://portal.qwords.com/apitest/whois.php?domain=${searchQuery}`);
          console.log(response);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setResults(data.results);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
  
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh"}}>
            <div style={{ display: "flex", flexDirection: "column", border: "1px solid black", padding: "50px", borderRadius: "5px", marginBottom: "10px", width: "50vh"}}>
              <div style={{ display: "flex", flexDirection: "row", alignSelf: "center"}}>
                <p style={{textAlign: "center", paddingRight: "30px"}}>{temp}</p>
                <Select
                  value={selectedOption}
                  onChange={setSelectedOption}
                  options={data}
                />
              </div>
              {price !== 0 && (
                    <>
                        <p style={{textAlign: "center"}}>Total: {price}</p>
                        <p style={{textAlign: "left"}}>Nama: Agus Joko</p>
                        <p style={{textAlign: "left"}}>Email: agusjoko@gmail.com</p>
                        <button 
                            onClick={handleCheckoutButton}
                            style={{ padding: "10px", borderRadius: "10px", border: "none", backgroundColor: "black", color: "white", width: "15vh", alignSelf: "center", cursor: "pointer"}}
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