import location from './location.png'
import metaicon from './metaicon.png'
import homeicon from './homeicon.png'
import desert from './adv-desert.png'
import distance from './adv-distance.png'
import imbt from './adv-imbt.png'
import twowks from './adv-2wks.png'
import ten from './Image10.png'
import eleven from './image11.png'
import mask from './mask (1).png'
import wallet from './wallet.png'
import cancel from './cancel.png'
import arrow from './arrow.png'
import fb from './fb.png'
import ig from './ig.png'
import twitter from './twitter.png'
import adv1 from './adv1.png'
import adv2 from './adv2.png'
import adv3 from './adv3.png'
import adv4 from './adv4.png'
import adv5 from './adv5.png'
import houseicon from './houseicon.png'
import adv6 from './adv6.png'
// import adv7 from './adv7.png'
import ham from './ham.png'
import { useState } from 'react'


const Places=()=>{
   const [show, setshow]= useState(false)
   const [modal, setmodal]= useState(false)

   function appear(){
      setmodal(!modal)
   }

  return(
        <div className='app'>
           <div className='navbar'>

              <img src={ham} className='ham' alt=''  onClick={()=>setshow(!show)}  />
      {
           show? <div className='sidemenu'>
            <p >Home</p>
            <p className='place'>Place to stay</p>
            <p className='nft' >NFTs</p> 
            <p  className='comm'>Community</p>
         </div>:null
         
}

<div className='diconbox '>
     <img  src={homeicon} className='homeicon' alt=''/>
     <img src={metaicon} className='metaicon' alt='' />
     </div>
        
     <div className='connect'>
 <div className='conn' onClick={appear}>  ConnectWallet</div>
          {
            modal &&(
               <div className='tags'>
      <div className='overlay'>
   <div className='first'>
   <h2 className='co'>Connect wallet</h2>
<img src={cancel} className='x' alt='' onClick={appear} />
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

  


<div className='part4'>
{/* <img src={contact} alt='' className='contact' /> */}

<div className='metab'> 
<div className='houseb'><img src={houseicon} alt='' className='houseicon'  /><h1>Metabnb</h1></div>

<div className='socials'>
<img alt='' src={fb} className='fb' />
<img alt='' src={twitter} className='twitter' />
<img alt='' src={ig} className='ig' />
</div>
<img alt='' />
</div>

<div className='community'>
<h2>Community</h2> 
<p> NFT</p>
<p>Tokens</p>
<p>Landlords</p>
<p>Discord</p>
</div>

<div className='places'>
<h2>Places</h2> 
<p>Farms</p>
<p>Beach</p>
<p>Castles</p>
<p>Learn more</p>
</div>

<div className='about'>
<h2>About</h2> 
<p>Road map</p>
<p>Creators</p>
<p>Career</p>
<p>Contact us</p>
</div>


</div>
   
        </div>
    )
}
export default Places