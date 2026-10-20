import { useState } from 'react'

import './App.css'
import Panel from './components/Panel'
import KartuMenu from './components/KartuMenu'

function App() {
  const [count, setCount] = useState(0)
  const nama = "rifky";
  const gayaJudul = {color: '#1f3a5f', fontSize: '28px'}
  const N = 26;
  const jam = 9;
  
  return (
    <>
      <h1 className= "judul" style={gayaJudul}>Kantin {nama} </h1> 
      <p>{(jam) < 12 ? "Selamat Pagi" : "Selamat Siang"}</p>
      <p>Saldo awal kartu kantin: Rp {N * 1000}</p>
      <button disabled> Bayar </button>
    
      <Panel judul = "Menu Hari ini">
        <KartuMenu nama="Nasi Ayam Geprek" harga={1000 + (N * 100)} />
        <KartuMenu nama="Nasi Ayam" harga={1000 + (N * 100)} />
        <KartuMenu nama="pop ecs" harga={1000 + (N * 100)} kategori="minuman"/>
      </Panel>
    </>
    
  )
}

export default App
