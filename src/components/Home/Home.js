import React from 'react'
import './Home.css';
import Product from '../Products/Product';


function Home() {
    return (
        <div className="home__container">
        <div className="home">
            <img 
            className="banner_image"
            src = "banner_1.jpg"
            alt = "banner"
            />
            <div  className="product__home">
        <Product 
        id = "1231231"
        title = "1080P Webcam with Microphone, Wansview USB 2.0 Desktop Laptop Computer Web Camera with Auto Light Correction, Plug and Play, for Windows Mac OS, for Video Streaming, Conference, Gaming, Online Classes"
        price = {11.96}
        rating = {5}
        image = "camera.jpg"
        />
        <Product 
        id = "1232231"
        title = "Acer Nitro VG240Y Pbiip 23.8 Inches Full HD (1920 x 1080) IPS Gaming Monitor with AMD Radeon FREESYNC Technology, Zero Frame, 144Hz, 1ms VRB, (2 x HDMI 2.0 Ports & 1 x Display Port), Black"
        price = {211.96}
        rating = {4}
        image = "led.jpg"
        />
        
        </div>
        <div  className="product__home"
        style={{
           
            marginTop : "100px"

        }}
        
        >
        <Product 
        id = "1231231"
        title = "subrtex High Stretch Jacquard Slipcover with 3 Separate Cushion Common Couch Sofa Cover Coat for 3-Seater Conventional Settee Spandex Washable Furniture"
        price = {43.40}
        rating = {4}
        image = "sofa.jpg"
        />
        <Product 
        id = "1231231"
        title = "1080P Webcam with Microphone, Wansview USB 2.0 Desktop Laptop Computer Web Camera with Auto Light Correction, Plug and Play, for Windows Mac OS, for Video Streaming, Conference, Gaming, Online Classes"
        price = {11.96}
        rating = {3}
        image = "camera.jpg"
        />
        <Product 
        id = "1241231"
        title = "Acer Aspire 5 A515-55-56VK, 15.6inch Full HD IPS Display, 10th Gen Intel Core i5-1035G1, 8GB DDR4, 256GB NVMe SSD, WiFi 6, HD Webcam, Fingerprint Reader, Backlit Keyboard, Windows 10 Home"
        price = {549.99}
        rating = {4.5}
        image = "laptop.jpg"
        />
        
        </div>
        <div  className="product__home"
        style={{
           
            marginTop : "100px",
            width : "100%"

        }}
        
        >
        <Product 
        id = "1231231"
        title = "1080P Webcam with Microphone, Wansview USB 2.0 Desktop has a Laptop Computer Web Camera with Auto Light Correction, Plug and Play, for Windows Mac OS, for Video Streaming, Conference, Gaming, Online Classes"
        price = {11.96}
        rating = {3}
        image = "camera.jpg"
        />
        
        </div>
        </div>
        
        </div>
    )
}

export default Home
