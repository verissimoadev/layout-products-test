import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import produto from '../src/image.svg'
import Product from './components/Product';

function App() {

  const arrayProduct = [
    {
      img: produto,
      describe: 'Monitor LED 27" Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50',
      value: '2.599,00',
      oldValue: '2.813,99',
      valueNumber: 2599
    },
    {
      img: produto,
      describe: 'Monitor LED 24" Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50',
      value: '2.000,00',
      oldValue: '2.513,99',
      valueNumber: 2000
    }

  ]

  return (
    <div className="Container">
      {
        arrayProduct.map((product) => <Product product={product} ></Product>
        )
      }
    </div>
  );
}

export default App;
