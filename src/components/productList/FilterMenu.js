import React from 'react';

export default function FilterMenu(props) {
    function openNav() {
        document.getElementById("mySidepanel").style.width = "250px";
      }
      
      function closeNav() {
        document.getElementById("mySidepanel").style.width = "0";
      }

  return (
    <>
    <a className="Filter-sort"  onClick={openNav}>
        <img className="icon" src="./../../../assets/icons/sliders.png"  alt="profile icon"/>
    Filter Results</a> 
    <div id="mySidepanel" class="sidepanel">
        <a href="#" class="closebtn" onClick={closeNav}>×</a>
            <p>Attribute</p>
            {props.categoryNames}
        <div className="divider"></div>
            <p>Color</p>
            <a href="#" className="btn btn-black"></a>
            <a href="#" className="btn btn-white"></a>
            <a href="#" className="btn btn-darkGreen"></a>
            <a href="#" className="btn btn-yellow"></a>
            <a href="#" className="btn btn-blue"></a>
            <a href="#" className="btn btn-red "></a>
            <a href="#" className="btn btn-darkBlue"></a>
            <a href="#" className="btn btn-pink"></a>
            <a href="#" className="btn btn-orange"></a>
            <a href="#" className="btn btn-rainbow"></a>

        <div className="divider"></div>
            <p>Brand</p>
            <input type="checkbox"  id="Option" name="Option" value="Option" />
            <label htmlFor="Option"> Calvin Klein</label><br></br>
            <input type="checkbox"  id="Option" name="Option" value="Option" />
            <label htmlFor="Option"> Dolce & Gabbana</label><br></br>
            <input type="checkbox"  id="Option" name="Option" value="Option" />
            <label htmlFor="Option"> Miu Miu</label><br></br>
            <input type="checkbox"  id="Option" name="Option" value="Option" />
            <label htmlFor="Option"> Prada</label><br></br>
            <input type="checkbox"  id="Option" name="Option" value="Option" />
            <label htmlFor="Option"> Rag & Bone</label><br></br>
            <input type="checkbox"  id="Option" name="Option" value="Option" />
            <label htmlFor="Option"> Gucci </label><br></br>
            <input type="checkbox"  id="Option" name="Option" value="Option" />
            <label htmlFor="Option"> Chanel </label><br></br>
            <input type="checkbox"  id="Option" name="Option" value="Option" />
            <label htmlFor="Option"> Salvatore  Ferragamo </label><br></br>
            <input type="checkbox"  id="Option" name="Option" value="Option" />
            <label htmlFor="Option"> Marni </label><br></br>
            <input type="checkbox"  id="Option" name="Option" value="Option" />
            <label htmlFor="Option"> Dior </label><br></br>
            <p><a href="">Show more</a></p>

        <div className="divider"></div>
            <input type="checkbox"  id="Option" name="Option" value="Option" />
            <label htmlFor="Option"> Option</label><br></br>
            <input type="checkbox"  id="Option" name="Option" value="Option" />
            <label htmlFor="Option"> Option</label><br></br>
            <input type="checkbox"  id="Option" name="Option" value="Option" />
            <label htmlFor="Option"> Option</label><br></br>
            <input type="checkbox"  id="Option" name="Option" value="Option" />
            <label htmlFor="Option"> Option</label><br></br>
            <input type="checkbox"  id="Option" name="Option" value="Option" />
            <label htmlFor="Option"> Option</label><br></br>
            <input type="checkbox"  id="Option" name="Option" value="Option" />
            <label htmlFor="Option"> Option</label><br></br>
            <input type="checkbox"  id="Option" name="Option" value="Option" />
            <label htmlFor="Option"> Option</label><br></br>
            <input type="checkbox"  id="Option" name="Option" value="Option" />
            <label htmlFor="Option"> Option</label><br></br>

    </div>
    </>
  )
}
