import terenceProfilePic from "./assets/images/terence-avatar.jpeg";
import vivekProfilePic from "./assets/images/vivek-avatar.jpeg";
import vijayProfilePic from "./assets/images/vijay-avatar.jpeg";
import tomProfilePic from "./assets/images/tom-avatar.jpeg";

export const users = {
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
export const defaultUser = "terence";
