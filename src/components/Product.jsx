import favIcon1 from '../../src/fav1.png'
import favIcon1h from '../../src/fav1-hover.png'
import favIcon2 from '../../src/fav2.png'
import favIcon2h from '../../src/fav2-hover.png'
import {useState} from 'react'
import Button from './Button'

export default function Product(params) {

    const [fav, setFav] = useState(favIcon1)
    const [isfav, setIsFav] = useState(false)
  
    return (
      <div className="App">
        <div className="container_foto">
          <img src={params.product.img} className="produto" alt="logo" />
          <img 
            onMouseOver={()=>{
              if (isfav) {
                setFav(favIcon2h)
              } else setFav(favIcon1h)
            }}
            onMouseOut={()=>{
              if (isfav) {
                setFav(favIcon2)
              } else setFav(favIcon1)
            }}
            onClick={()=>{
              setFav(favIcon2)
              setIsFav(!isfav)
            }}
            src={fav} 
            className="App-logo" 
            alt="logo" 
          />
  
        </div>
        <p className='describe'>{params.product.describe}</p>
        <p className='oldValue'>R$ {params.product.oldValue}</p>
        <p className='value'>R$ {params.product.value}</p>
        <p className='parcela'>em até <strong>10x de R$ {params.product.valueNumber/10} sem juros</strong></p>
        <Button></Button>
      </div>
    )
  }