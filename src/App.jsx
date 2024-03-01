import './App.css'
import Example from './Components/AllComponents/NavbarComp/Navbar'
import Home from './Components/AllPages/HomePage/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import Productpage from './Components/AllPages/ProductPage/productpage'
import OurNewsPage from './Components/AllPages/OurNewsPage/OurNewsPage'
import ShoppingPage from './Components/AllPages/ShoppingPage/ShoppingPage'
import AddToCart from './Components/AllPages/AddToCartPage/AddToCart'
import OverView from './Components/AllPages/OverViewPage/OverView'
import Contactus from './Components/AllPages/Contactuspage/Contactus'
import Footer from './Components/AllPages/FooterPage/Footer'
import SignUp from './Components/AllComponents/SignUpComp/SignUp'

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Example />
              <Home />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/ProductPage"
          element={
            <>
              <Example />
              <Productpage />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/OurNewsPage"
          element={
            <>
              <Example />
              <OurNewsPage />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/ShoppingPage"
          element={
            <>
              <Example />
              <ShoppingPage />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/AddToCart"
          element={
            <>
              <Example /> <AddToCart />
            </>
          }
        />
        <Route
          path="/OverView"
          element={
            <>
              <Example />
              <OverView />
              <Footer />
            </>
          }
        />
        <Route
          path="/Contactus"
          element={
            <>
              <Example />
              <Contactus />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/SignUp"
          element={
            <>
              <Example />
              <SignUp />
            </>
          }
        ></Route>
      </Routes>
    </>
  )
}

export default App
