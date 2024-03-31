import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return <div className="headcontainer">
        <img src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg"  className="logo"/>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Card</li>
        </ul>
    </div>
}
const stylecard = {
    backgroundColor: "lightgray"
}


const Rescard = (arg) => {

    const {resdata} = arg;
    return <div className="rescard-cont" style={stylecard}>
        <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+ resdata.info.cloudinaryImageId} className="res-img" />
<h3>{resdata.info.name}</h3>
<h4>{resdata.info.cuisines.join(", ")}</h4>
<h4>{resdata.info.avgRating} stars</h4>
<h4>{resdata.info.sla.deliveryTime} minutes</h4>
    </div>
}

const resList =        [
  {
    "info": {
      "id": "704216",
      "name": "Narmada Chain Of Restaurant",
      "cloudinaryImageId": "88bc19ec0c1885e00c3eddb363beaced",
      "locality": "Sholinganallur",
      "areaName": "Karapakkam",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Biryani",
        "Andhra",
        "South Indian"
      ],
      "avgRating": 4.4,
      "parentId": "410569",
      "avgRatingString": "4.4",
      "totalRatingsString": "1K+",
      "promoted": true,
      "adTrackingId": "cid=12337385~p=0~adgrpid=12337385#ag1~mp=SWIGGY_IN~bl=FOOD~eid=7be8476e-fac5-4ef8-862b-43a2dae5b6d8~aet=RESTAURANT~aeid=704216~srvts=1711867491044",
      "sla": {
        "deliveryTime": 27,
        "lastMileTravel": 5.6,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "5.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-31 23:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textExtendedBadges": {
            
          },
          "textBased": {
            
          },
          "imageBased": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.5",
          "ratingCount": "1K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=704216",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "485445",
      "name": "Chinese Wok",
      "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
      "locality": "Old Mahabalipuram Road OMR",
      "areaName": "Old Mahabalipuram Road OMR",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Chinese",
        "Asian",
        "Tibetan",
        "Desserts"
      ],
      "avgRating": 3.9,
      "parentId": "61955",
      "avgRatingString": "3.9",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 4.2,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "4.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-01 02:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹179"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "3.4",
          "ratingCount": "20+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=485445",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "678545",
      "name": "Wow! Momo",
      "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
      "locality": "ST. Thomas Mount",
      "areaName": "Sholinganallur Signal",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Tibetan",
        "Healthy Food",
        "Asian",
        "Chinese",
        "Snacks",
        "Continental",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.2,
      "parentId": "1776",
      "avgRatingString": "4.2",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 1.6,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-01 03:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Chinese.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textExtendedBadges": {
            
          },
          "textBased": {
            
          },
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "imageId": "Rxawards/_CATEGORY-Chinese.png",
                  "description": "Delivery!"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹99"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=678545",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "64700",
      "name": "Ambur Star Briyani",
      "cloudinaryImageId": "83650e6ca1465c58063a70ad22be4f28",
      "locality": "Sholinganallur",
      "areaName": "Sholinganallur",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Indian",
        "Chinese",
        "Arabian",
        "Continental"
      ],
      "avgRating": 4.3,
      "parentId": "5455",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 19,
        "lastMileTravel": 2.4,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "2.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-31 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          },
          "textBased": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "3.6",
          "ratingCount": "1K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=64700",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "439677",
      "name": "Shri Ramanaas",
      "cloudinaryImageId": "krmrwsq3mooqa16b40ok",
      "locality": "Perumbakkam Main Road",
      "areaName": "Medavakkam",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "South Indian",
        "North Indian",
        "Chinese",
        "Beverages",
        "Ice Cream"
      ],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "373190",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "promoted": true,
      "adTrackingId": "cid=12335572~p=1~adgrpid=12335572#ag1~mp=SWIGGY_IN~bl=FOOD~eid=ea8b5851-8d34-4f9b-90fb-8ff4de9f6b2d~aet=RESTAURANT~aeid=439677~srvts=1711867491044",
      "sla": {
        "deliveryTime": 31,
        "lastMileTravel": 6.4,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "6.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-31 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              }
            ]
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=439677",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "808105",
      "name": "Burger King",
      "cloudinaryImageId": "aa77cb6fce4d94f3ad4b4e7fb42782db",
      "locality": "Nehru Nagar",
      "areaName": "OMR Thoraipakam",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "avgRating": 4.4,
      "parentId": "166",
      "avgRatingString": "4.4",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 3.5,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "3.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-01 01:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Burger.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "imageId": "Rxawards/_CATEGORY-Burger.png",
                  "description": "Delivery!"
                }
              }
            ]
          },
          "textExtendedBadges": {
            
          },
          "textBased": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=808105",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "444674",
      "name": "Andhra Gunpowder",
      "cloudinaryImageId": "o18xlrtaxapi2bq7rpoz",
      "locality": "Thoraipakkam",
      "areaName": "OMR Perungudi",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Andhra",
        "Biryani",
        "South Indian"
      ],
      "avgRating": 4.3,
      "parentId": "10496",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 5.5,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "5.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-31 23:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "description": "",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹399",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=444674",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "484181",
      "name": "Big Bowl",
      "cloudinaryImageId": "c99751d54e4e1847186c62b3309c1327",
      "locality": "Mahabalipuram Main Road",
      "areaName": "Karapakkam",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "North Indian",
        "Chinese",
        "Tibetan",
        "Desserts"
      ],
      "avgRating": 3.9,
      "parentId": "434792",
      "avgRatingString": "3.9",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 4.2,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "4.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-01 02:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textExtendedBadges": {
            
          },
          "textBased": {
            
          },
          "imageBased": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹179"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=484181",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "689910",
      "name": "SMOOR",
      "cloudinaryImageId": "82443d6e0bf5442d42e40ee3c35e6297",
      "locality": "East Coast Rd",
      "areaName": "Injambakkam",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Desserts",
        "Bakery"
      ],
      "avgRating": 4.3,
      "parentId": "3506",
      "avgRatingString": "4.3",
      "totalRatingsString": "50+",
      "promoted": true,
      "adTrackingId": "cid=12268047~p=3~adgrpid=12268047#ag1~mp=SWIGGY_IN~bl=FOOD~eid=461d75bf-1c27-4de8-a45c-8f09771ec660~aet=RESTAURANT~aeid=689910~srvts=1711867491044",
      "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 6.2,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "6.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-31 23:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "v1705582451/Ratnesh_Badges/Listing_HR.png",
            "shortDescription": "Perfect Cake Delivery",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "shortDescription": "Perfect Cake Delivery",
                  "fontColor": "#7E808C",
                  "iconId": "v1705582451/Ratnesh_Badges/Listing_HR.png"
                }
              }
            ]
          },
          "textBased": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=689910",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "564242",
      "name": "KFC",
      "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
      "locality": "Rajiv Gandhi Salai",
      "areaName": "Sholinganallur",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
      ],
      "avgRating": 4.2,
      "parentId": "547",
      "avgRatingString": "4.2",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 19,
        "lastMileTravel": 2.9,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "2.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-01 00:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Burger.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "imageId": "Rxawards/_CATEGORY-Burger.png",
                  "description": "Delivery!"
                }
              }
            ]
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=564242",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "698364",
      "name": "McDonald's",
      "cloudinaryImageId": "f62564e14944753903849c4ef673af4d",
      "locality": "Perumbakkam",
      "areaName": "Sekaran Mall",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Beverages",
        "Cafe",
        "Desserts"
      ],
      "avgRating": 4.3,
      "parentId": "630",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 4.3,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "4.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-31 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Burger.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "imageId": "Rxawards/_CATEGORY-Burger.png",
                  "description": "Delivery!"
                }
              }
            ]
          },
          "textExtendedBadges": {
            
          },
          "textBased": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "FREE ITEM"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=698364",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "104680",
      "name": "Domino's Pizza",
      "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
      "locality": "KAILASH OMR SHOLINAGANALLUR CHENNAI",
      "areaName": "Sholinganallur",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
      ],
      "avgRating": 4.3,
      "parentId": "2456",
      "avgRatingString": "4.3",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 1.2,
        "serviceability": "SERVICEABLE",
        "slaString": "25 mins",
        "lastMileTravelString": "1.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-31 22:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Pizza.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "imageId": "Rxawards/_CATEGORY-Pizza.png",
                  "description": "Delivery!"
                }
              }
            ]
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=104680",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "25912",
      "name": "FB Cakes",
      "cloudinaryImageId": "13ed25c0801d78e16087cb0be4ea3fa6",
      "locality": "Karapakkam",
      "areaName": "Karapakkam",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Bakery",
        "Sweets",
        "Snacks"
      ],
      "avgRating": 4.3,
      "parentId": "245423",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "promoted": true,
      "adTrackingId": "cid=12334199~p=4~adgrpid=12334199#ag1~mp=SWIGGY_IN~bl=FOOD~eid=90b97602-73a3-4bca-87e8-c16c25221984~aet=RESTAURANT~aeid=25912~srvts=1711867491044",
      "sla": {
        "deliveryTime": 19,
        "lastMileTravel": 2.9,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "2.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-31 23:58:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Desserts.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "imageId": "Rxawards/_CATEGORY-Desserts.png",
                  "description": "Delivery!"
                }
              }
            ]
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "3.8",
          "ratingCount": "100+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=25912",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "262391",
      "name": "Chickpet Donne Biryani",
      "cloudinaryImageId": "nk2bmuefxxjrr9rpolpc",
      "locality": "Shollinganallur",
      "areaName": "Sholinganallur",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Indian"
      ],
      "avgRating": 3.8,
      "parentId": "60857",
      "avgRatingString": "3.8",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 2.3,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "2.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-31 16:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80",
        "discountTag": "POCKET HERO",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=262391",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "801002",
      "name": "NH1 Bowls - Highway To North",
      "cloudinaryImageId": "9a57d2e2e5ff49ea8a0bce4351cb2ab9",
      "locality": "Sholinganallur",
      "areaName": "Parameswaran Nagar",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Punjabi",
        "Home Food"
      ],
      "avgRating": 4.5,
      "parentId": "22452",
      "avgRatingString": "4.5",
      "totalRatingsString": "5",
      "sla": {
        "deliveryTime": 16,
        "lastMileTravel": 2.7,
        "serviceability": "SERVICEABLE",
        "slaString": "11-21 mins",
        "lastMileTravelString": "2.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-01 02:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=801002",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "33743",
      "name": "Guntur Gongura",
      "cloudinaryImageId": "drsqbi7ullwgvkawp93z",
      "locality": "Shollinganallur",
      "areaName": "Sholinganallur",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Andhra",
        "North Indian",
        "South Indian",
        "Biryani",
        "Chinese",
        "Beverages"
      ],
      "avgRating": 4.2,
      "parentId": "18528",
      "avgRatingString": "4.2",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 15,
        "lastMileTravel": 0.5,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "0.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-31 23:58:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=33743",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  }
]
const Body = () =>{
    return <div className="body-cont">
        <div className="search">Search</div>

        <div className="res-cont">
       {
        resList.map((num) => <Rescard resdata={num} key={num.info.id} />)
        
       }

        </div>
    </div>
}
const Appmodule = () => {
   return <div className="container">
        <Header></Header>
        <Body></Body>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(<Appmodule />) ;  




