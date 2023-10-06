import React, { useState } from 'react'
import '../style/AddUsers.css';
const AddUser = ({ users, setUsers }) => {
  const [isim, setIsım] = useState("");
  const [soyIsım, setSoyIsım] = useState("");
  const [yas, setYas] = useState("");
  const [cinsiyet, setCinsiyet] = useState("");
  const [email, setEmail] = useState("");



  const createUser = (e) => {
    e.preventDefault();
    const yeniVeri = {
      id: users.length + 1,
      ad: isim,
      soyad: soyIsım,
      yas: yas,
      cinsiyet: cinsiyet,
      email: email,
      isDeleted: false

    }
    setUsers(
      [...users, yeniVeri]
    )

    setIsım("");
    setSoyIsım("");
    setYas("");
    setCinsiyet("Cinsiyetinizi Seçiniz");
    setEmail("");
  }


  return (
    <div className='add-user-container'>
      <form onSubmit={createUser}>
        <input onChange={(e) => setIsım(e.target.value)} type="text" placeholder='İsim' value={isim} required />
        <input onChange={(e) => setSoyIsım(e.target.value)} type="text" placeholder='Soy isim'value={soyIsım}  required />
        <input onChange={(e) => setYas(e.target.value)} type="number" placeholder='Yaş'value={yas}  required />
        <select onChange={(e) => setCinsiyet(e.target.value)} required>
          <option value="">Cinsiyetinizi Seçiniz</option>
          <option value="Kadın">Kadın</option>
          <option value="Erkek">Erkek</option>
        </select>
        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='E-mail'value={email}  required />
        <input type="submit" value="Add- User" />
      </form>
    </div>
  )
}

export default AddUser