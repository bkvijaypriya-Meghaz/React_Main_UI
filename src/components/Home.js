import React from 'react';
import {Link} from 'react-router-dom'

function Home() {
    
    
    return (
        <div className="auth-wrapper">
            <div className="auth-content subscribe">
                <div className="card" style={{background: "transparent", boxShadow: "none"}}>
                    <div className="row no-gutters">
						<div className="col-md-6 col-lg-4 col-sm-12 col-xs-12 m-b-20">
							<Link to={"/Teacher"}>
							<div className="theme-bg align-items-center justify-content-center loginouterdiv">
								<div className="loginusericon">
                                    <img src="../../assets/images/user/teachericon.png" alt="lock images" className="img-fluid" />
								</div>
								<div className="loginusertxt">Teacher</div>
							</div>
							</Link>
                        </div>
						<div className="col-md-6 col-lg-4 col-sm-12 col-xs-12 m-b-20">
							<Link to={"/Student"}>
							<div className="theme-bg align-items-center justify-content-center loginouterdiv">
								<div className="loginusericon">
                                    <img src="assets/images/user/studenticon.png" alt="lock images" className="img-fluid" />
								</div>
								<div className="loginusertxt">Student</div>
							</div>
							</Link>
                        </div>
						<div className="col-md-6 col-lg-4 col-sm-12 col-xs-12 m-b-20">
							<Link to={"/Parent"}>
							{/* <a href="../parent"> */}
							<div className="theme-bg align-items-center justify-content-center loginouterdiv">
								<div className="loginusericon">
									<img src="assets/images/parent/parenticon.jpg" alt="lock images" className="img-fluid"/>
								</div>
								<div className="loginusertxt">Parent</div>
							</div>
							{/* </a> */}
							</Link>
                        </div>
					</div>
                </div>
            </div>
        </div>
      );
}

export default Home;