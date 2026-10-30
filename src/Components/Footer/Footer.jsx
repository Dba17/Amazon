import { BsFillArrowUpCircleFill } from "react-icons/bs";
import classes from "./footer.module.css";

// footer link columns
const footerColumns = [
  {
    title: "Get to Know Us",
    links: ["Careers", "Blog", "About Amazon", "Investor Relations", "Amazon Devices", "Amazon Science"],
  },
  {
    title: "Make Money with Us",
    links: [
      "Sell products on Amazon",
      "Sell on Amazon Business",
      "Become an Affiliate",
      "Advertise Your Products",
      "Self-Publish with Us",
      "Host an Amazon Hub",
    ],
  },
  {
    title: "Amazon Payment Products",
    links: [
      "Amazon Business Card",
      "Shop with Points",
      "Reload Your Balance",
      "Amazon Currency Converter",
    ],
  },
  {
    title: "Let Us Help You",
    links: [
      "Your Account",
      "Your Orders",
      "Shipping Rates & Policies",
      "Returns & Replacements",
      "Manage Your Content and Devices",
      "Amazon Assistant",
      "Help",
    ],
  },
];

function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className={classes.footer}>
      {/* back to top button */}
      <div className={classes.back_to_top} onClick={scrollTop}>
        <p>Back to top</p>
      </div>

      {/* main footer links */}
      <div className={classes.footer_links}>
        <div className={classes.footer_columns}>
          {footerColumns.map((column, index) => (
            <div key={index} className={classes.footer_column}>
              <h4>{column.title}</h4>
              <ul>
                {column.links.map((link, i) => (
                  <li key={i}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* logo divider */}
      <div className={classes.footer_divider}>
        <div className={classes.logo_wrapper}>
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
            alt="amazon logo"
          />
          <div className={classes.globe}>
            <BsFillArrowUpCircleFill size={16} />
            <select>
              <option value="">English</option>
            </select>
          </div>
        </div>
      </div>

      {/* bottom copyright */}
      <div className={classes.footer_bottom}>
        <ul>
          <li>
            <a href="#">Conditions of Use</a>
          </li>
          <li>
            <a href="#">Privacy Notice</a>
          </li>
          <li>
            <a href="#">Your Ads Privacy Choices</a>
          </li>
        </ul>
        <p>&copy; 1996-2024, Amazon.com, Inc. or its affiliates</p>
      </div>
    </footer>
  );
}

export default Footer;
