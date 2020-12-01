
const Student = () =>{
    return(
        <div class="auth-wrapper">
            <div class="auth-content subscribe">
                <div class="card">
                    <div class="row no-gutters">
						<div class="col-md-4 col-lg-6 theme-bg align-items-center justify-content-center">
							<div class="loginicondiv">
								<div class="loginusericon">
                                    <img src="../assets/images/user/studenticon.png" alt="lock images" class="img-fluid"/>
								</div>
								<div class="loginusertxt">Student Login</div>
							</div>
                        </div>
                        <div class="col-md-8 col-lg-6">
                            <div class="card-body text-center">
                                <div class="row justify-content-center">
                                    <div class="col-sm-10">
                                        <h3 class="mb-4">Login</h3>
                                        <div class="input-group mb-3">
                                            <input type="email" class="form-control" placeholder="Email"/>
                                        </div>
                                        <div class="input-group mb-4">
                                            <input type="password" class="form-control" placeholder="password"/>
                                        </div>
                                        <div class="form-group text-left">
                                            <div class="checkbox checkbox-fill d-inline">
                                                <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-a1" checked=""/>
                                                <label for="checkbox-fill-a1" class="cr"> Save credentials</label>
                                            </div>
                                        </div>
                                        <button class="btn btn-primary shadow-2 mb-4">Login</button>
                                        <p class="mb-2 text-muted">Forgot password? <a href="auth-reset-password-v4.html">Reset</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Student