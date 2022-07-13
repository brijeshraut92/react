import React from "react";

export default function Filter(props) {
  return (
    <div className="aem-GridColumn  aem-GridColumn--default--3 aem-GridColumn--phone--hide">
        <div className="filter">
            <p className="tiltle">Filters</p>
            <div className="divider"></div>
            <p>Attribute</p>
            <input type="checkbox" onClick={() =>props.filterSelection("")} id="Blank" name="Blank" value="Blank" />
            <label htmlFor="Blank"> Reset</label><br></br>
            {props.categoryNames}
            <p><a href="">Show more</a></p>
            <div className="divider"></div>
            <p>Style</p>
            <input type="checkbox"  id="Option" name="Option" value="Option" />
            <label htmlFor="Option"> Outdoor</label><br></br>
            <input type="checkbox"  id="Option" name="Option" value="Option" />
            <label htmlFor="Option"> Casual</label><br></br>
            <input type="checkbox"  id="Option" name="Option" value="Option" />
            <label htmlFor="Option"> Athleisure</label><br></br>
            <input type="checkbox"  id="Option" name="Option" value="Option" />
            <label htmlFor="Option"> Running</label><br></br>
            <input type="checkbox"  id="Option" name="Option" value="Option" />
            <label htmlFor="Option"> Active</label><br></br>
            <p><a href="">Show more</a></p>

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
    </div>
  );
}
