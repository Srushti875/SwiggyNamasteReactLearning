import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * ------Logo
 * ------Nav items
 * body
 * ------search
 * ------restaurant container
 * --------restaurant card
 *            -img
 *            -name of res,star rating,cuisine,etc
 * footer
 * ------copyright
 * ------links
 * -------address
 * -------contact
 * 
 */

const Header = () => {
  return(
    <div className="header">
      <div className="logobucket">
      <img className="imageforfoodlogo" src="data:image/jpeg;base64,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"/>
      </div>
      <div className="navigation-items">
        <ul>
          <li className="navBarContents">Home</li>
          <li className="navBarContents">About us</li>
          <li className="navBarContents">contact us</li>
          <li className="navBarContents">cart</li>
        </ul>

      </div>
    </div>
  )
};

const CDN_URL = "https://res.cloudinary.com/swiggy/image/upload/";

const RestoCard = (props) => {
  console.log(props);

  const{restoData}=props;

  const{cloudinaryImageId,cuisines,avgRating,costForTwo,deliveryTime,sla}=restoData.info;
  return (
    <div className="rest-card" style={{backgroundColor:"pink"}}>
      
      <img 
      className="resto-logo"
      
      alt="resto-logo"
      src={CDN_URL+cloudinaryImageId}
       />
      <h3>{restoData.info.name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>₹{costForTwo/100}</h4>
      <h4>{sla.deliveryTime}minutes</h4>
    </div>
  );
};

const restoObj = [
  {
    info: {
    id: "123456",
    name: "Pizza Paradise",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/6def0f0f-9e6c-45c0-b5e6-05af750f27b5_795906.JPG",
    locality: "MG Road",
    areaName: "Central District",
    costForTwo:40000,
    costForTwoString: "₹400 for two",
    cuisines: ["Pizza", "Italian", "Fast Food"],
    avgRating: 4.3,
    avgRatingString: "4.3",
    totalRatingsString: "10K+ ratings",
    veg: false,
    sla: {
      deliveryTime: 30,
      lastMileTravel: 3.5,
      slaString: "30 mins",
    },
    aggregatedDiscountInfoV3: {
      header: "50% OFF",
      subHeader: "UPTO ₹100",
    },
  }
},
  {
    info: {
      id: "234567",
      name: "Burger Hub",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/acfcaacc-edf0-4189-8264-d614d312c0ee_740457.JPG",
      locality: "Park Street",
      areaName: "Downtown",
      costForTwo: 30000,
      cuisines: ["Burgers", "American", "Fast Food"],
      avgRating: 4.5,
      totalRatingsString: "15K+ ratings",
      veg: false,
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2,
        slaString: "25 mins",
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
    },
  },
  {
    info: {
      id: "345678",
      name: "Green Bites",
      cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
      locality: "Residency Road",
      areaName: "South Zone",
      costForTwo: 25000,
      cuisines: ["Healthy Food", "Salads", "Vegan"],
      avgRating: 4.7,
      totalRatingsString: "8K+ ratings",
      veg: true,
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.5,
        slaString: "20 mins",
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
    },
  },
  {
    info: {
      id: "456789",
      name: "Spice Kingdom",
      cloudinaryImageId: "rng/md/carousel/production/indian101",
      locality: "Brigade Road",
      areaName: "City Center",
      costForTwo: 50000,
      cuisines: ["Indian", "North Indian", "Biryani"],
      avgRating: 4.2,
      totalRatingsString: "12K+ ratings",
      veg: false,
      sla: {
        deliveryTime: 35,
        lastMileTravel: 4,
        slaString: "35 mins",
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
    },
  },
  {
    info: {
      id: "567890",
      name: "Chinese Dragon",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/ba9f1f59-30d5-44de-afad-df6db8471ead_9648.jpg",
      locality: "Commercial Street",
      areaName: "East District",
      costForTwo: 35000,
      cuisines: ["Chinese", "Asian", "Thai"],
      avgRating: 4.4,
      totalRatingsString: "9K+ ratings",
      veg: false,
      sla: {
        deliveryTime: 28,
        lastMileTravel: 2.8,
        slaString: "28 mins",
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
    },
  },
  {
    info: {
      id: "678901",
      name: "Dessert Delight",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/8/731001f1-f1c4-4f5f-849f-79a697cb0b72_390173.jpg",
      locality: "Lavelle Road",
      areaName: "West End",
      costForTwo: 20000,
      cuisines: ["Desserts", "Ice Cream", "Bakery"],
      avgRating: 4.6,
      totalRatingsString: "7K+ ratings",
      veg: true,
      sla: {
        deliveryTime: 22,
        lastMileTravel: 1.8,
        slaString: "22 mins",
      },
      aggregatedDiscountInfoV3: {
        header: "25% OFF",
        subHeader: "UPTO ₹60",
      },
    },
  },
  {
    info: {
      id: "789012",
      name: "Sushi Station",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/acfcaacc-edf0-4189-8264-d614d312c0ee_740457.JPG",
      locality: "Indiranagar",
      areaName: "Uptown",
      costForTwo: 80000,
      cuisines: ["Japanese", "Sushi", "Asian"],
      avgRating: 4.8,
      totalRatingsString: "5K+ ratings",
      veg: false,
      sla: {
        deliveryTime: 40,
        lastMileTravel: 5.2,
        slaString: "40 mins",
      },
      aggregatedDiscountInfoV3: {
        header: "15% OFF",
        subHeader: "UPTO ₹150",
      },
    },
  },
];



const Body = () =>{
  return(
    <div>
      <div className="search">Search</div>

       {/* <div className="resto-container">
        <RestoCard restoData ={restoObj[0]} />
        <RestoCard restoData ={restoObj[1]} />
        <RestoCard restoData ={restoObj[2]} />
        <RestoCard restoData ={restoObj[3]} />
        <RestoCard restoData ={restoObj[4]} />
        <RestoCard restoData ={restoObj[5]} />
        <RestoCard restoData ={restoObj[6]} />
        <RestoCard restoData ={restoObj[7]} />
      </div>  */}

      <div className="resto-container">
        {restoObj.map((resto,index) => (
          <RestoCard key={resto.info.id} restoData={resto} />
        ))}
      </div>
    </div>
  );
};

const Footer = () =>{
  return(
  <div>
    
  </div>)

}
const ApplicationLayout = () => {
  return (
    <div className="application">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<ApplicationLayout/>);


