import React, { useState, useEffect } from "react";
import classes from "../Modules/Producthome.module.css";
import MediaCard from "../Components/Listing/ListingCard";
import { publicRequest } from "../Axios/requestMethods";
import Navbar from "../Components/CommonComponents/Navbar";
import Plotscollection from "../Components/PlotsCollection";
import Popularlisting from "../Components/Popularlisting";
import Blogs from "../Components/Blogs";
import Faq from "../Components/Faq";
import { Link } from "react-router-dom";
import BottomBar from "../Components/CommonComponents/BottomBar";
import Customer from "../Components/Customer";
import Search from "../Components/CommonComponents/Search";
const ProductHome = () => {
  const [listings, setListings] = useState([{}]);
  const [showplot, setShowplot] = useState(true);
  const [showapart, setShowapart] = useState(false);
  const [showproper, setShowproper] = useState(false);

  const [tempListings, setTempListings] = useState([{}]);
  useEffect(() => {
    const getListings = async () => {
      const res = await publicRequest.get(`/listing/showListingsAll`);
      setListings(res.data);
      setTempListings(res.data);
      console.log(res.data);
    };
    getListings();
  }, []);
  const showplothandler = () => {
    setShowplot(true);
    setShowapart(false);
    setShowproper(false);
  };
  const showaparthandler = () => {
    setShowplot(false);
    setShowapart(true);
    setShowproper(false);
  };
  const showproperhandler = () => {
    setShowplot(false);
    setShowapart(false);
    setShowproper(true);
  };
  return (
    <React.Fragment>
      <Navbar />
      <div className={classes.main}>
        <div className={classes.overlay} />
        <div className={classes.overlaywritten}>
          <div className={classes.mainleft}>
            <div>
              <img src="/assets/Vector (2).png" />
            </div>
          </div>
          <div className={classes.maincenter}>
            <p>Modular Home Solutions</p>
            <Search />
          </div>
          <div className={classes.mainright}>
            <div>
              <img src="/assets/Vector.png" />
            </div>
            <div>
              <img src="/assets/Vector (1).png" />
            </div>
          </div>
        </div>
      </div>
      <p className={classes.title}>Plots Collection</p>
      <div className={classes.plotscollection}>
        {listings.slice(2, 10).map((item, index) => (
          <Plotscollection
            photo={item.titlePhoto}
            propertyType={item.propertyType}
          />
        ))}
      </div>
      <p className={classes.title}>Recently Added</p>
      <p className={classes.sub}>Preferences of people like you </p>
      <div className={classes.recently}>
        {listings.slice(0, 10).map((item, index) => (
          <MediaCard
            photo={item.titlePhoto}
            rate={item.rate}
            title={item.title}
            city={item.city}
            state={item.state}
          />
        ))}
      </div>
      <p className={classes.title}>
        Explore Real Estate in Popular Indian Cities{" "}
      </p>
      <div className={classes.explorecity}>
        <Popularlisting
          image={"Ellipse 153.png"}
          city={"Mumbai"}
          citytotal={"111,000+ Properties"}
        />
        <Popularlisting
          image={"Ellipse 155.png"}
          city={"Delhi"}
          citytotal={"51,000+ Properties"}
        />
        <Popularlisting
          image={"Ellipse 154.png"}
          city={"Hyderabad"}
          citytotal={"11,000+ Properties"}
        />
        <Popularlisting
          image={"Ellipse 153 (1).png"}
          city={"Pune"}
          citytotal={"40,000+ Properties"}
        />
        <Popularlisting
          image={"Ellipse 155 (1).png"}
          city={"Banglore"}
          citytotal={"21,000+ Properties"}
        />
        <Popularlisting
          image={"Ellipse 154 (1).png"}
          city={"Chennai"}
          citytotal={"37,000+ Properties"}
        />
      </div>
      <p className={classes.title}>Top Blogs and Articles</p>
      <div className={classes.blogs}>
        <div className={classes.blogbutton}>
          <button
            className={showplot === true ? classes.active : ""}
            onClick={showplothandler}
          >
            Plots/Land
          </button>
          <button
            className={showapart === true ? classes.active : ""}
            onClick={showaparthandler}
          >
            Apartment
          </button>
          <button
            className={showproper === true ? classes.active : ""}
            onClick={showproperhandler}
          >
            Properties
          </button>
        </div>
        {showplot && (
          <div className={classes.blogbutton}>
            <Blogs
              photo={"Rectangle 1579.png"}
              title={"Tips for buying a plot in India"}
            />
            <Blogs
              photo={"Rectangle 1579.png"}
              title={"Tips for buying a commercial land in India"}
            />
            <Blogs
              photo={"Rectangle 1579.png"}
              title={"Know all about investment"}
            />
          </div>
        )}
        {showapart && (
          <div className={classes.blogbutton}>
            <Blogs
              photo={"Rectangle 1579.png"}
              title={"Tips for buying a apartment in India"}
            />
            <Blogs
              photo={"Rectangle 1579.png"}
              title={"Tips for buying a plot in India"}
            />
            <Blogs
              photo={"Rectangle 1579.png"}
              title={"Tips for buying a plot in India"}
            />
          </div>
        )}
        {showproper && (
          <div className={classes.blogbutton}>
            <Blogs
              photo={"Rectangle 1579.png"}
              title={"Tips for buying a property in India"}
            />
            <Blogs
              photo={"Rectangle 1579.png"}
              title={"Tips for buying a plot in India"}
            />
            <Blogs
              photo={"Rectangle 1579.png"}
              title={"Tips for buying a plot in India"}
            />
          </div>
        )}
        <Link to="/offerChats">
          <button className={classes.blogbutt}>
            Chat and be a member in our community!
          </button>
        </Link>
      </div>
      <p className={classes.title}>What Our Customers Say About Us</p>
      <div className={classes.customer}>
        <Customer
          photo={"Ellipse 156.png"}
          name={"Nitin Kumar"}
          content={
            "House of friends has a better response rate as compared to others."
          }
          date={"11Feb 2022"}
        />
        <Customer
          photo={"Ellipse 155 (2).png"}
          name={"Pratik Patil"}
          content={
            "House of friends has a better response rate as compared to others."
          }
          date={"11Feb 2022"}
        />
        <Customer
          photo={"Ellipse 156 (1).png"}
          name={"Pankaj Joshi"}
          content={
            "House of friends has a better response rate as compared to others."
          }
          date={"11Feb 2022"}
        />
      </div>
      <p className={classes.title}>Frequently Asked Questions</p>
      <div className={classes.faq}>
        <Faq
          question={"What is the most popular / recognized category?"}
          answer={"lorem"}
        />
        <Faq
          question={"What is the most popular / recognized category?"}
          answer={"lorem"}
        />
        <Faq
          question={"What is the most popular / recognized category?"}
          answer={"lorem"}
        />
        <Faq
          question={"What is the most popular / recognized category?"}
          answer={"lorem"}
        />
        <Faq
          question={"What is the most popular / recognized category?"}
          answer={"lorem"}
        />
        <Faq
          question={"What is the most popular / recognized category?"}
          answer={"lorem"}
        />
        <Faq
          question={"What is the most popular / recognized category?"}
          answer={"lorem"}
        />
      </div>
      <BottomBar />
    </React.Fragment>
  );
};

export default ProductHome;
