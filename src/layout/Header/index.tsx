import React from "react";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import { Home } from "../../pages/Home";
import { router } from "../../router";

export const Header: React.FC = () => {
  return (
    <div className="container-fluid headBox">
      <div className="container">
        <div className="row">
          <div className="col-md-12 header">
            <RouterProvider router={router}/>
            {/* <BrowserRouter basename="/app">
              <Routes>
                <Route path="/" render={()=><Home/>} />
              </Routes>
            </BrowserRouter> */}
            {/* <nav className="navbar navbar-expand-lg navbar-light ">
            <button
              className="navbar-toggler smNav"
              type="button"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <router-link
              :to="{ name: 'index' }"
              className="logoA"
            >
              <img
                src="@/assets/images/logo.png"
                alt=""
                className="logo"
              >
              <div className="logoName">
                來呷飽貓食堂
              </div>
            </router-link>
            <div
              id="bs-example-navbar-collapse-1"
              className="collapse navbar-collapse"
            >
              <ul className="navbar-nav nav">
                <li className="nav-item">
                  <router-link to="/index">
                    <i className="fas fa-home" />首頁
                  </router-link>
                </li>
                <li className="nav-item">
                  <router-link to="/product/all">
                    <i className="fas fa-cookie-bite" />商品列表
                  </router-link>
                </li>
                <li className="nav-item">
                  <router-link to="/coupon">
                    <i className="fas fa-bell" />好康活動
                  </router-link>
                </li>
              </ul>

              <ul className="navbar-nav ml-md-auto nav2">
                <li className="nav-item cartBtn">
                  <router-link to="/cart">
                    <i className="fas fa-shopping-cart" />購物車
                  </router-link>
                </li>
                <li className="nav-item">
                  <router-link to="/login">
                    管理中心
                  </router-link>
                </li>
              </ul>
            </div>
          </nav> */}
          </div>
        </div>
      </div>
    </div>
  )
} 