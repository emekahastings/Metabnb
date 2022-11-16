import metaicon from './metaicon.png'
import {Link} from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import homeicon from './homeicon.png'
import rent from './rent.png'
import sub from './subtext.png'
import mask from './mask (1).png'
import wallet from './wallet.png'
import cancel from './cancel.png'
import arrow from './arrow.png'
import metatext from './metantext.png'
import ham from './ham.png'
import one from './image 4.png'
import two from './image 3.png'
import three from './image 5.png'
import four from './image 6.png'
import platforms from './platforms.png'
import adv1 from './adv1.png'
import adv2 from './adv2.png'
import adv3 from './adv3.png'
import adv4 from './adv4.png'
import adv5 from './adv5.png'
import adv6 from './adv6.png'
import adv7 from './adv7.png'
import adv8 from './adv8.png'
import desert from './adv-desert.png'
import contact from './contact.png'
import distance from './adv-distance.png'
import imbt from './adv-imbt.png'
import twowks from './adv-2wks.png'
const Home=()=>{
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
       <div className='navbar' ref={menuref}>
      
      <img src={ham} className='ham' alt=''  onClick={()=>setshow(!show)}/>
         {
           show? <div className='sidemenu'>
            <p >Home</p>
            <p className='place'><Link to='places' style={{textDecoration:'none', color:'white'}}>Place to stay</Link></p>
            <p className='nft' >NFTs</p> 
            <p  className='comm'>Community</p>
         </div>:null
}
         

<div className='diconbox '>
     <img  src={homeicon} className='homeicon' alt=''/>
     <img src={metaicon} className='metaicon' alt='' />
     </div>
     <p >Home</p>
            <p className='place'><Link to='places' style={{textDecoration:'none', color:'black'}}>Place to stay</Link></p>
            <p className='nft' >NFTs</p> 
            <p  className='comm'>Community</p>
          
        
        <div className='connect'>
 <div className='conn'  onClick={()=>setmodal(!show)}>ConnectWallet</div>
 {
   modal? <div className='tag'>
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

     
       <div className='img-group'>
   
     <div className='part1g'>
      <div className='part1b' >
      <img src={rent} alt='' className='rent' /> <br />
       <img src={sub} alt='' className='subtext' /> <br />
       </div>
     <div className='part1c'>
        <input className='searchinput' />
        <div className='searchbtn'>
            <p className='search'>Search</p>
        </div>
     </div>

      </div>
    
    <div className='set'>
      <div className='set1'>
    <img src={four} alt='' className='one' />
    <img src={two} alt='' className='two' /> 
   </div> 
      <div className='set2'> 
    <img src={one}  alt='' className='four' />
    <img src={three} alt='' className='three' />
   </div>
   </div>
       </div>

       <div className='middle'>
       <img src={platforms} alt='' className='platforms'  />
       </div>

      <div className='part2'>
      <h2>INSPIRATION FOR YOUR NEXT ADVENTURE</h2>

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
<img src={adv2} alt='' className='imgb' />
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
<img src={adv1} alt='' className='imgb' />
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
        <img src={adv3} alt=''  />
       
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

     

        

        
      
      <div className='part3'>

        <div className='part3b'>
            <img src={metatext} alt='' className='metantext' /> <br />
            
            {/* <p className='letters'>Discover our NFT gift card collection, Loyal <br />
            customers get amazing gifdt cards which are <br />
            traded as NFTs. Thses Nfts, give our customers < br />
            access to loads of our exclusive services. 
            
            </p> */}

            

        </div>
        
      </div> 

<div className='part4'>
<img src={contact} alt='' className='contact' />
</div>


</div>
    </div>
    )
}
export default Home