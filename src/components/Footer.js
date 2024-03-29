const Footer = () => {
  return <div className='footer'>
    <div className='container'>
      <div className='row'>
       <div className='col-md-3'>
        <div className='footer-logo'>
          <img src='../../images/logo.png' id='mya' alt='logo'/>
        </div>
       </div>
       <div className='col-md-3'>
        <div className='quick-link'>
          <div className='title'>Quick links</div>
          <div className='detail'>
            Home<br/>
            Menu<br/>
            Reservation<br/>
            Blog<br/>
            Contact<br/>
            Pages<br/>
          </div>
        </div>
       </div>
       <div className='col-md-3'>
        <div className='footer-about-us'>
          <div className='title'>About Us</div>
          <div className='detail'>
            Some details about everithing in this crazy World
          </div>
        </div>
       </div>
       <div className='col-md-3'>
        <div className='footer-follow-us'>
          <div className='title'>Follow</div>
          <div className='footer-follow-us-icons'>
              <div className='footer-follow-us-icon'>
            <img src='../../images/fb.png' id='web' alt='facebook'/>
          </div>
          <div className='footer-follow-us-icon'>
            <img src='../../images/insta.png'id='web' alt='instagram'/>
          </div>
          <div className='footer-follow-us-icon'>
            <img src='../../images/pin.png' id='web' alt='pinterest'/>
          </div>
          <div className='footer-follow-us-icon'>
            <img src='../../images/twit.png' id='web' alt='twitter'/>
          </div>
          </div>        
        </div>
       </div>
      </div>
    </div>
  </div>
  } 
  
  export default Footer;