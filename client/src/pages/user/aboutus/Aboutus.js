import React from 'react'
import { Container } from 'react-bootstrap'
import Usernav from '../../../components/Usernav'
import './aboutus.css'

function Aboutus() {
    return (
        <>
        <div className='navv'>
            <Usernav />
        </div>

    {/* <h2>hemlo</h2> */}
        <div class="about-section">
            <h1>About Us</h1>
            <p>Some text about who we are and what we do.</p>
            <p>Resize the browser window to see that this page is responsive by the way.</p>
        </div>

        <h2>Our Team</h2>
        <div class="row">
            <div class="column">
                <div class="card">
                <img src="" alt="Priyanshu"/>
                <div class="container">
                    <h2>Priyanshu Patel</h2>
                    <p class="title">CEO & Founder</p>
                    <p>FOODEE.</p>
                    <p>Priyanshu@example.com</p>
                    <p><button class="button">Contact</button></p>
                </div>
                </div>
            </div>

            <div class="column">
                <div class="card">
                <img src="" alt="Kashyap"/>
                <div class="container">
                    <h2>Kashyap Rajodiya</h2>
                    <p class="title">Art Director</p>
                    <p>FOODEE.</p>
                    <p>Kashyap@example.com</p>
                    <p><button class="button">Contact</button></p>
                </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default Aboutus