import Header from "../header/header"
import "./webpage.css"
import { LuBuilding } from "react-icons/lu";
import { FaBullseye } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { ScrollTop } from 'primereact/scrolltop';
function Webpage() {
    return <>
        <Header />
        <img id="baner" src={require("../images/sch1.jpg")}></img>
        <div id="baner1">
            <h1 id="wellcome">WELCOME TO HILTON MATRIC .HR.SEC <br />SCHOOL</h1>
            <p id="Hilton">Hilton matriculation School was founded in the year 1998 by Tagore Educational trust. <br />
                This Trust is very well recognized for running the following professional educations that have made their own landmark in the <br />
                field of education in Tamilnadu.
            </p>
            <button id="readmore">READ MORE</button>
        </div>
        <div><ScrollTop /></div>
        <div id="para">
            <div>
                <i id="building"><LuBuilding /></i>
                <h5>About Us</h5>
                <small>Hilton matric. School was founded<br /> in the year 1998</small><br />
                <button>Read More</button>
            </div>
            <div>
                <i id="bullseye"><FaBullseye /></i>
                <h5>Our Mission</h5>
                <small>To overcome the abstract hurdles<br /> through external activities.</small><br />
                <button>Read More</button>
            </div>
            <div>
                <i id="eye"><FaEye /></i>
                <h5>Our Vision</h5>
                <small>Our goal is to enhance the talents<br /> and creativity of the individual</small><br />
                <button>Read More</button>
            </div>
            <div>
                <i id="graduation"><FaGraduationCap /></i>
                <h5>Academics</h5>
                <small>The academic year for the school<br /> is from June to April</small><br />
                <button>Read More</button>
            </div>
        </div>

        {/* About  */}
        <div class="parent2">
            <div class="child1">
                <div class="img1"><img src={require("../images/images11.jpeg")} alt="" /></div>
                <div class="img2"><img src={require("../images/images12.jpeg")} alt="" /></div>
                <div class="img3"><img src={require("../images/IMG_20231119_153106.jpg")} alt="" /></div>
                <div class="img4"><img src={require("../images/images14.jpeg")} alt="" /></div>
            </div>
            <div class="child2">
                <h3>About Us</h3>
                <h1>Welcome to<span><i class="fa-solid fa-utensils"></i></span> Hilton</h1>
                <p id="p1">Hilton matriculation School was founded in the year 1998 by Tagore Educational Trust. This Trust is very well recognized for running the following professional educational ..
                    .</p>
                <p id="p1">
                    Hilton matriculation School was founded in the year 1998 by Tagore Educational Trust.
                    Our school is a co-educational institution consisting of classes Pre.K.G to XII.
                </p>
                <div class="parent3">
                    <div class="child3">
                        <div>
                            <h1>25</h1>
                        </div>
                        <div>
                            <p id="p1"> Years of</p>
                            <p id="p"> Experience</p>
                        </div>
                    </div>
                    <div class="child3">
                        <div>
                            <h1>65</h1>
                        </div>
                        <div>
                            <p id="p1">Popular</p>
                            <p id="p">teaching Masters</p>
                        </div>
                    </div>
                </div>
                <button id="button1">READ MORE</button>
            </div>
        </div>
        <h3 id="alumni">Alumni</h3>
        <div id="old">
            <div id="img1"><img src={require("../images/images23.jpeg")} alt="" />
                <dl>
                    <dt>Personal details</dt>
                    <dd>Name:Ayyalasomayajula Lalitha</dd>
                    <dd>Age:25</dd>
                    <dd>Job:Engineer</dd>
                </dl>

            </div>
            <div id="img2"><img src={require("../images/team-1.jpg")} alt="" />
                <dl>
                    <dt>Personal details</dt>
                    <dd>Name:Chef Ranjit Kuttikattu</dd>
                    <dd>Age:28</dd>
                    <dd>Job:Chef</dd>
                </dl>

            </div>
            <div id="img3"><img src={require("../images/images27.jpeg")} alt="" />
                <dl>
                    <dt>Personal details</dt>
                    <dd>Name:Dr. Nithya Vaidya</dd>
                    <dd>Age:32</dd>
                    <dd>Job:Doctor</dd>
                </dl>

            </div>
            <div id="img4"><img src={require("../images/testimonials-4.jpg")} alt="" />
                <dl>
                    <dt>Personal details</dt>
                    <dd>Name:John Abraham</dd>
                    <dd>Age:25</dd>
                    <dd>Job:Bollywood Actor</dd>
                </dl>

            </div>

        </div>
        <h3 id="fees">Our Fees</h3>

        <div id="feesimg">
            <div className="fees1"><img src={require("../images/images30.jpeg")} alt="" /></div>
            <div className="fees1"><img src={require("../images/images13.jpeg")} alt="" /></div>
            <div className="fees1"><img src={require("../images/images16.jpeg")} alt="" /></div>
            <div className="fees1"><img src={require("../images/images19.jpeg")} alt="" /></div>
        </div>



        <div className="fees">
            <div id="kg">
                <p>K.G</p>
                <table border={1}>
                    <tr>
                        <th>TERM</th>
                        <th>PRE.K.G</th>
                        <th>L.K.G</th>
                        <th>U.K.G</th>
                    </tr>
                    <tr>
                        <td>Term I</td>
                        <td>15000</td>
                        <td>18000</td>
                        <td>21000</td>
                    </tr>
                    <tr>
                        <td>Term II</td>
                        <td>7500</td>
                        <td>9000</td>
                        <td>10500</td>
                    </tr>
                    <tr>
                        <td>Term III</td>
                        <td>2500</td>
                        <td>3000</td>
                        <td>3500</td>
                    </tr>
                </table>
            </div>
            <div id="praimery">
                <p>STD I TO VIII</p>
                <table border={1}>
                    <tr>
                        <th>TERM</th>
                        <th>I & II</th>
                        <th>IIItoV</th>
                        <th>VItoVIII</th>
                    </tr>
                    <tr>
                        <td>Term I</td>
                        <td>27000</td>
                        <td>30000</td>
                        <td>33000</td>
                    </tr>
                    <tr>
                        <td>Term II</td>
                        <td>13500</td>
                        <td>15000</td>
                        <td>16500</td>
                    </tr>
                    <tr>
                        <td>Term III</td>
                        <td>4500</td>
                        <td>5000</td>
                        <td>5500</td>
                    </tr>
                </table>
            </div>
            <div id="secondary">
                <p>Secondary (IX & X)</p>
                <table border={1}>
                    <tr>
                        <th>TERM</th>
                        <th>STD IX</th>
                        <th>STD X</th>

                    </tr>
                    <tr>
                        <td>Term I</td>
                        <td>36000</td>
                        <td>39000</td>

                    </tr>
                    <tr>
                        <td>Term II</td>
                        <td>18000</td>
                        <td>15000</td>

                    </tr>
                    <tr>
                        <td>Term III</td>
                        <td>6000</td>
                        <td>6000</td>

                    </tr>
                </table>
            </div>
            <div id="hir_secondary">
                <p>Senior Secondary (XI & XII)</p>
                <table border={1}>
                    <tr>
                        <th>TERM</th>
                        <th>STD XI</th>
                        <th>STD XII</th>

                    </tr>
                    <tr>
                        <td>Term I</td>
                        <td>54000</td>
                        <td>58500</td>

                    </tr>
                    <tr>
                        <td>Term II</td>
                        <td>27000</td>
                        <td>22500</td>

                    </tr>
                    <tr>
                        <td>Term III</td>
                        <td>9000</td>
                        <td>9000</td>

                    </tr>
                </table>
            </div>
        </div>
        <div id="end">
            <div>
                <h5>ABOUT US</h5>
                <p>Hilton matriculation School was founded in the year<br /> 1998 by Tagore Educational Trust. This Trust is very<br /> well recognized for running the following ..</p>
                <p>Read More!</p>
            </div>
            <div>
                <h5>QUICK LINKS</h5>
                <a href="">Home</a><br />
                <a href="">Our Mission</a><br />
                <a href="">Downloads</a><br />
                <a href="">Gallery</a><br />
            </div>
            <div>
                <h5>...</h5>
                <a href="">About Us</a><br />
                <a href="">Our Vision</a><br />
                <a href="">Admission Enquiry</a><br />
                <a href="">Contact</a><br />
            </div>
            <div>
                <h5>QUICK LINKS</h5>
                <a href="">Academic Year</a><br />
                <a href="">Academic Structure</a><br />
                <a href="">Fee Regulations</a><br />
                <a href="">Dress Code</a><br />
            </div>
            <div>
                <h5>...</h5>
                <a href="">Academic Features</a><br />
                <a href="">Admission Procedures</a><br />
                <a href="">Time Capsule</a><br />
                <a href="">News & Events</a><br />
            </div>
        </div>
        <div id="address">
            <div>
                <i><FaLocationDot /></i>
                <h6>Address</h6>
                <p>7, Works Road, New Colony,<br />
                    Chromepet,Chennai - 600 044. </p>
            </div>
            <div>
                <i><FaPhoneAlt /></i>
                <h6>Phone Number</h6>
                <p>+044-22418061<br />
                    +044-22411552</p>
            </div>
            <div>
                <i><IoIosMail /></i>
                <h6>Email Address</h6>
                <p>hiltonschool90@ymail.com</p>
            </div>
        </div>
    </>
}
export default Webpage