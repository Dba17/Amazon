import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import classes from "./header.module.css";
function Header() {
  return (
    <>
      <section>
        <div className={classes.header_container}>
          <div className={classes.logo_container}>
            {/* logo section */}
            <a href="">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
                alt="amazon logo"
              />
            </a>
            <div className={classes.delivary}>
              {/* delivery */}
              <span>
                <IoLocationOutline size={25} />
              </span>
              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          <div className={classes.search}>
            {/* search */}
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="Search Amazon" />
            <IoSearchSharp size={25} />
          </div>

          <div className={classes.order_container}>
            {/* right side link */}
            
              <a href="" className={classes.language}><img src="https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg"
                alt=""
              />

              <select>
                <option value="">EN</option>
              </select>
              </a>
                
              
            

            <a href="">
              <div>
                <p>Sign In</p>
                <span>Account & Lists</span>
              </div>
            </a>

            <a href="">
              <p>returns</p>
              <span>& orders</span>
            </a>

            <a href="" className={classes.cart}>
              <BsCart2 size={35}/>
              <span>0</span>
              <p>Cart</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
