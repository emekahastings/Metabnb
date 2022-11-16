import header from './header.png'
import location from './location.png'
import metaicon from './metaicon.png'
import mask from './mask (1).png'
import wallet from './wallet.png'
import cancel from './cancel.png'
import arrow from './arrow.png'
import homeicon from './homeicon.png'
import desert from './adv-desert.png'
import distance from './adv-distance.png'
import imbt from './adv-imbt.png'
import twowks from './adv-2wks.png'
import ten from './Image10.png'
import eleven from './image11.png'
import contact from './contact.png'
import adv1 from './adv1.png'
import adv2 from './adv2.png'
import adv3 from './adv3.png'
import adv4 from './adv4.png'
import adv5 from './adv5.png'
import adv6 from './adv6.png'
// import adv7 from './adv7.png'
import ham from './ham.png'
import { useState,  useEffect, useRef  } from 'react'


const Places=()=>{
   const [show, setshow]= useState(false)
   const [modal, setmodal]= useState(false)
   let menuref= useRef()
  
   useEffect(()=>{
      let handler=(event)=>{
      if(!menuref.current.contains(event.target)){
         console.log(menuref.current)
        setshow(false)
      }
   }
      document.addEventListener('mousedown', handler)
   })

   let modalref=useRef()
   useEffect(()=>{
      let appear=(event)=>{
      if(!menuref.current.contains(event.target)){
         console.log(menuref.current)
        setshow(false)
      }
   }
      document.addEventListener('mousedown', appear)
   })

  
 


 
    return(
        <div className='app'>
           <div className='navbar'>
              <img src={ham} className='hams' alt=''  onClick={()=>setshow(!show)}/>
<div className='diconbox '>
     <img  src={homeicon} className='homeicon' alt=''/>
     <img src={metaicon} className='metaicon' alt='' />
     </div>
     <p >Home</p>
            <p className='place'>Place to stay</p>
            <p className='nft' >NFTs</p> 
            <p  className='comm'>Community</p>
          
        
        <div className='connects'>
 <div className='conn'   onClick={()=>setmodal(!show)}>ConnectWallet</div>
 {
   modal? <div className='tags'>
   <div className='first'>
   <h2 className='co'>Connect wallet</h2>
<img src={cancel} className='x' alt='' onClick={()=>{setmodal(false)}} />
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
</div>:null
 }
 </div>
        </div>
      
   {/* <div className='headers'>
    <img src={header} alt=''/>
   </div>  */}
   <div className='dbar'>
   <p className='rest'>Restaurant</p>
    <p>Cottage</p>
    <p>Castle</p>
    <p>Fantast city</p>
    <p>Beach</p>
    <p>Cabins</p>
    <p>Offgrid</p>
    <p>Farm</p>
    <img src={location} alt='' className='locate' />

   </div>
   <div className='placebar'> 
   
         {
           show? <div className='sidemenu'>
    <p className='rest'>Restaurant</p>
    <p>Cottage</p>
    <p>Castle</p>
    <p>Fantast city</p>
    <p>Beach</p>
    <p>Cabins</p>
    <p>Offgrid</p>
    <p>Farm</p>
    <img src={location} alt='' className='locate' />

 
    </div>:null
   
    
}

  </div>

  <div className='part2b'>

<div className='b'>
<img src={adv5} alt='' className='imgb' />
<div className='b1main main'>
<div className='b1a'>
   <img src={desert} alt='' />
   <img src={imbt} className='per' alt='' />
</div>
<div className='b1b'>
<img src={distance} alt='' />
   <img src={twowks} className='pers' alt='' />
</div>
</div>
</div>

<div className='b'>
<img src={adv6} alt='' className='imgb' />
<div className='b1main1 '>
<div className='b1a'>
   <img src={desert} alt='' />
   <img src={imbt} className='per' alt='' />
</div>
<div className='b1b'>
<img src={distance} alt='' />
   <img src={twowks} className='pers' alt='' />
</div>
</div>
</div>

   <div className='b'>
<img src={eleven} alt='' className='imgb' />
<div className='b1main2 '>
<div className='b1a'>
   <img src={desert} alt='' />
   <img src={imbt} className='per' alt='' />
</div>
<div className='b1b'>
<img src={distance} alt='' />
   <img src={twowks} className='pers' alt='' />
</div>
</div>
</div>

   <div className='b'>
<img src={ten} alt='' className='imgb' />
<div className='b1main3'>
<div className='b1a'>
   <img src={desert} alt='' />
   <img src={imbt} className='per' alt='' />
</div>
<div className='b1b'>
<img src={distance} alt='' />
   <img src={twowks} className='pers' alt='' />
</div>
</div>
</div>





</div>

<div className='part2a'>
        <div className='a'>
        <img src={adv1} alt=''  />
       
        </div>

        <div className='a'>
        <img src={adv2} alt='' className='imgb' />
        <div className='a1main'>
         <div className='a1a'>
            <img src={desert} alt='' />
            <img src={imbt} className='per' alt='' />
         </div>
         <div className='a1b'>
         <img src={distance} alt='' />
            <img src={twowks} className='pers' alt='' />
         </div>
         </div>
         </div>

         <div className='b'>
        <img src={adv3} alt='' className='imgb' />
        <div className='a1main2'>
         <div className='a1a'>
            <img src={desert} alt='' />
            <img src={imbt} className='per' alt='' />
         </div>
         <div className='a1b'>
         <img src={distance} alt='' />
            <img src={twowks} className='pers' alt='' />
         </div>
         </div>
         </div>

         <div className='b'>
        <img src={adv4} alt='' className='imgb' />
        <div className='a1main3'>
         <div className='a1a'>
            <img src={desert} alt='' />
            <img src={imbt} className='per' alt='' />
         </div>
         <div className='a1b'>
         <img src={distance} alt='' />
            <img src={twowks} className='pers' alt='' />
         </div>
         </div>

   
         


      </div>

      </div>

  
  

  <div>
<img src={contact} alt='' className='contact' />
  </div>
   
        </div>
    )
}
export default Places