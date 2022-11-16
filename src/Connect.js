import mask from './mask (1).png'
import wallet from './wallet.png'
import cancel from './cancel.png'
import arrow from './arrow.png'
const Connect=()=>{

     return(
      <div className="app" >
    
    <div className='tags'>
   <div className='first'>
   <h2 className='co'>Connect wallet</h2>
<img src={cancel} className='x' alt='' />
   </div>
   <p className='choose'>Choose your preferred wallet</p>
   <div className='oya'>
   <img src={mask} className='mask' aria-readonly alt='' />  <b className='txt'>MetaMask</b>
   <img src={arrow} className='arrow' aria-readonly alt='' /> 
   
   </div> 
   <div className='oya'>
   <img src={wallet} className='mask' aria-readonly alt='' />  <b className='txt'>WalletConnect</b>
   <img src={arrow} className='arrow2' aria-readonly alt='' /> 
   </div>
      </div>
      </div>
     )
}
export default Connect