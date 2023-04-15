import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';
import { AppContextProps } from "./contractProvider";

export const LocationContext = createContext<any | undefined>(undefined);

export function LocationProvider({ children }: AppContextProps) {

  const [location, setLocation] = useState<object | undefined>(undefined)

  const getlocation = async () => {
    const response = await axios.get(`https://geolocation-db.com/json/${process.env['NEXT_PUBLIC_GEO_LOCATION']}`)
    console.log('location',response.data)
    setLocation(response.data)
  }
  useEffect(()=>{
     getlocation();
  },[])
  return (
    <LocationContext.Provider
      value={{
        location,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('You must use LocationProvider in order to consume this context');
  }
  return context;
}


