const Testimonal = () => {
  return <div className='testimonal'>
    <div className='title'>Testimonal</div>
    <div className='question'>What our customer say's</div>
    <div className='row'>
      <div className='col-lg-4 col-md-3 col-sm-2'></div>
      <div className='col-lg-4 col-md-6 col-sm-8'>
        <div className='testimonal-card'>
          <div className='testimonal-message'>
            <div className='quote'>"</div>
            <div className='message'>
            Incredible atmosphere, quality of products and cooking. I would also like to mention 
            the polite staff, you feel like you are at a dinner party with your family.
            </div>
          </div>
          <div className='testimonal-profile'>
            <div className='testimonal-profile-img'>
              <img src='/images/go.png' alt='profile' id='go'/>
            </div>
            <div className='testimonal-profile-name'>Abadon Brutio</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  } 
  
  export default Testimonal;