import { useInput } from './input-hooks';
import { BiSearch } from 'react-icons/bi';
import { useState } from 'react';

export default function SearchForm({ changeCity = f => f}) {

  const geoKey = 'YOUR OPEN-CAGE-DATA KEY HERE'; 
  const [input, setInput] = useInput('');
  const [message, setMessage] = useState('');

  async function handleSubmit(e) {
       
    e.preventDefault();
    const location = await getCityLocation();

    if(location){
      changeCity(
        {
          name: input.value,
          ...location
        }
      );
      setMessage('');
    }else{
      setMessage('Invalid city');
      console.log("invalid city");
    }
  }

  async function getCityLocation() {

    const response = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${input.value}&key=${geoKey}`
    );
    const result = await response.json();
    
    if(result.results[0]){ 
      const geo = await result.results[0].geometry;
      return geo;
    }
    return null;
  }

  return (
    <div className="pt-4">
      <form className="search-form" onSubmit={handleSubmit}>
        <input 
          {...input}
          type='text' 
          placeholder='City' 
        />
        <button type='submit'><BiSearch /></button>
      </form>
      <span className='text-warning'>{message}</span>
    </div>
  );
  
}
