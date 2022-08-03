import nancyProfilePic from "./assets/images/nancy-avatar.png";
import terenceProfilePic from "./assets/images/terence-avatar.jpeg";
import vivekProfilePic from "./assets/images/vivek-avatar.jpeg";
import vijayProfilePic from "./assets/images/vijay-avatar.jpeg";
import tomProfilePic from "./assets/images/tom-avatar.jpeg";

/*
These are sample fictitious users to demonstrate the capabilities of the app changing between user login states.
The emails defined here are injected into the payload for Tableau embedded (see Investment.js as an example), 
which authenticates the respective user to the Tableau embedded dashboards.
*/

export const users = {
  nancy: {
    firstName: "Nancy",
    lastName: "Lim",
    email: "vkadervel@tableau.com",
    image: nancyProfilePic,
    title: "CIO",
  },
  terence: {
    firstName: "Terence",
    lastName: "Lim",
    email: "terence.lim@salesforce.com",
    image: terenceProfilePic,
    title: "CIO",
  },
  vivek: {
    firstName: "Vivek",
    lastName: "Mahapatra",
    email: "vmahapatra@salesforce.com",
    image: vivekProfilePic,
    title: "CIO",
  },
  vijay: {
    firstName: "Vijay",
    lastName: "Kadervel",
    email: "vkadervel@tableau.com",
    image: vijayProfilePic,
    title: "CXO",
  },
  tom: {
    firstName: "Tom",
    lastName: "Merritt",
    email: "tmerritt@salesforce.com",
    image: tomProfilePic,
    title: "CXO",
  },
};

// input the users key
export const defaultUser = "nancy";
