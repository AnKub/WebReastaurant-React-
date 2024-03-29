const Menu = () => {

const menus =[
{
title:'Schezwan Noodles',
detail:'Schezwan noodles is completely vegan, and delicious to prepare as a tasty lunch or dinner.',
rating:4,
img:'./images/schaz.png'
},
{
title:'Veg Burdger',
detail:'Wheat bun, veggie cutlet, ketchup, honey cucumber, iceberg lettuce, tsibula, tomato.Served with potato fries or potato balls.',
rating:4,
img:'./images/vbur.png'
},
{
title:'Egg Carry',
detail:'Egg curry made in Punjabi dhaba style. Simple, flavorful & delicious egg curry for your everyday meal to pair with roti, jeera rice or rice.',
rating:4,
img:'./images/egg.png'
},
{
title:'Veg Pizza',
detail:'Fresh, warm Italian flatbread, smothered in bright and nutritious veggies… you will love this Flatbread Veggie-Lovers Pizza',
rating:4,
img:'./images/pizza.png'
},
{
title:'Fried Rice',
detail:'This Chinese-inspired fried rice recipe is my absolute fave. Customizable with any of your favorite mix-ins, and so irresistibly delicious.',
rating:4,
img:'./images/friedrice.png'
},
{
title:'Veg Thai',
detail:'This Thai Curry Soup, naturally gluten-free, and totally customizable with whatever veggies, proteins or noodles you happen to have on hand.',
rating:4,
img:'./images/thaiv.png'
},
]

  return <div className='menu'>
   <div className='container'>
    <div className='title'>Explore Our Menu</div>
    <div className='row'>

{
menus.map((menu)=>{
return (
   <div key={menu.title} className='col-md-4'>
      <div className='menu-card'>
        <div className='menu-card-img'>
          <img src={menu.img} alt={menu.title} id='eatfoto'/>
        </div>
        <div className='menu-card-title'>{menu.title}</div>
        <div className='menu-card-detail'>{menu.detail}</div>
          <div className='menu-card-rating'>
            {
            menu.rating === 4 && (
            <>
            <img src='./images/star.png' alt='star' id='star'/>
            <img src='./images/star.png' alt='star' id='star'/>
            <img src='./images/star.png' alt='star' id='star'/>
            <img src='./images/star.png' alt='star' id='star'/>
       
            </>
            )
            }
          </div>
      </div>
    </div>
  )
})
}

   
    </div>
   </div>
  </div>
  } 
  
  export default Menu;