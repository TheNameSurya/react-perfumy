import one from "../assets/images/one.jpeg"
import two from "../assets/images/two.jpeg"
import three from "../assets/images/three.jpeg"


function Products() {
    return (
  
  
  
      <div class="products">
  
        <div class="box">
  
          <img src={three} alt="one"></img>
          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
        </div>
  
        <div class="box">
          <img src={one} alt="two"></img>
          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
        </div>
        <div class="box">
          <img src={two} alt="three"></img>
          <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
        </div>
      </div>
    )
  }

  export default Products