import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const [availability, setAvailability] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [searched, setSearched] = useState(false);
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
  
    const handleInputChange = (event) => {
      setQuery(event.target.value);
    };

    const handleOrderButton = () => {
        navigate('/Config', {state:{domain: query}});
    };

    const handleSearchButton = () => {
        fetchResponse(query);
    };
  
    const fetchResponse = async () => {
        setLoading(true);
    
        try {
            const resp = await fetch(`https://portal.qwords.com/apitest/whois.php?domain=${query}`);      
            if (!resp.ok) {
                throw new Error('There was a problem with the network');
            }
            const data = await resp.json();
            console.log(data);
            setError(data.resuls === "success" ? false : true);
            if(data.result === "success"){
                setAvailability(data.status === "available" ? true : false);
            }
        } catch (error) {
            setError(true);
            console.log(error.message);
        } finally {
            setError(false);
            setSearched(true);
            setLoading(false);
        }
      };
  
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh"}}>
            <div style={{ display: "flex", flexDirection: "column", border: "1px solid black", borderRadius: "5px", marginBottom: "10px", padding: "100px"}}>
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Cari domain contoh: example.com"
                    style={{ padding: "15px", borderRadius: "5px", border: "solid", width: "80vh"}}
                />
                <button 
                    onClick={handleSearchButton}
                    style={{ padding: "10px", borderRadius: "10px", border: "none", margin: "10px", backgroundColor: "black", color: "white", width: "15vh", alignSelf: "flex-end", cursor: "pointer"}}
                >
                    Cari
                </button>

                {loading &&  (<p style={{textAlign: "center"}}>Sedang mencari...</p>)}

                {
                    error && (
                        <p style={{textAlign: "center"}}>Terjadi kesalahan, silahkan coba lagi</p>
                    )
                }
                

                {availability && searched && (
                    <>
                        <p style={{textAlign: "center"}}>Selamat domain anda tersedia</p>
                        <button 
                            onClick={handleOrderButton}
                            style={{ padding: "10px", borderRadius: "10px", border: "none", backgroundColor: "black", color: "white", width: "15vh", alignSelf: "center", cursor: "pointer"}}
                        >
                            Pesan
                        </button>
                    </>
                )}

                {!availability && searched && (
                    <p style={{textAlign: "center"}}>Maaf, domain anda tidak tersedia</p>
                )}
            </div>
        </div>
    );
}

export default HomePage;