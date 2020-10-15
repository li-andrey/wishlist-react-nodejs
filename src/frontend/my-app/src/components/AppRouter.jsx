import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PageHowItWorks from "./PageHowItWorks"
import PageAbout from "./PageAbout"
import PageHome from "./PageHome"
import PageSignIn from "./PageSignIn"
import PageNewWishList from "./PageNewWishList"
import PageEditWishList from "./PageEditWishList"


const PAGES = {
  wishList: {
    id: "wishList",
    title: "My WishList",
    path: "/"
  },
  about: {
    id: "about",
    title: "Немного о нас",
    path: "/about"
  },
  howItWorks: {
    id: "howItWorks",
    title: "Как это работает",
    path: "/how_it_works"
  },
  signIn: {
    id: "signIn",
    title: "Авторизация",
    path: "/sign_in"
  },
  newWishList: {
    id: "newWishList",
    title: "Создать свой WishList",
    path: "/new_wishlist"
  },
  editWishList: {
    id: "editWishList",
    title: "Редактирование WishList",
    path: "/wishlists/:wishListId"
  }
  //   wishListItemAssignee: {
  //   id: "wishListItemAssignee",
  //   title: "Забронировать подарок",
  //   path: "/wishlists/:wishListId/wishlist_item/:id"
  // }
}


export default function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={PAGES.wishList.path}> {PAGES.wishList.title} </Link>
            </li>
            <li>
              <Link to={PAGES.about.path}> {PAGES.about.title} </Link>
            </li>
            <li>
              <Link to={PAGES.howItWorks.path}> {PAGES.howItWorks.title} </Link>
            </li>
            <li>
              <Link to={PAGES.signIn.path}> {PAGES.signIn.title} </Link>
            </li>
            <li>
              <Link to={PAGES.newWishList.path}> {PAGES.newWishList.title} </Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path={PAGES.about.path}>
            <PageAbout />
          </Route>
          <Route exact path={PAGES.howItWorks.path}>
            <PageHowItWorks />
          </Route>
          <Route exact path={PAGES.wishList.path} >
            <PageHome />
          </Route>
          <Route exact path={PAGES.signIn.path} >
            <PageSignIn />
          </Route>
          <Route exact path={PAGES.newWishList.path} >
            <PageNewWishList />
          </Route>
          <Route exact path={PAGES.editWishList.path}>
            <PageEditWishList />
            {/* <Route exact path={PAGES.wishListItemAssignee.path}>
              <PageEditWishList /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}