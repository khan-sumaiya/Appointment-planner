import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      
    <input value={name} 
    type="text" 
    onChange={e=>setName(e.target.value)} 
    required/>
    <input value={phone} 
    type="tel" 
    onChange={e=>setPhone(e.target.value)} 
    pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
    required/>
    <input value={email} 
    type="email" 
    onChange={e=>setEmail(e.target.value)}
    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
     required/>
    <button type="submit">Submit</button>

    </form>
  );
};

