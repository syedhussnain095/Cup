import React from 'react';

const Login = () => {
    return (
        <>
 <div className="container-fluid px-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="Heading__Book py-3">
                    <h2>Login</h2>
                    </div>
                    <div className="main_from_div">
                        <form>
                            <div className="mb-3 col-sm-6 offset-sm-3">
                            <label>Email</label>
                                <input type="email" className="form-control" placeholder="Email"/>
                            </div>
                            <div className="mb-3 col-sm-6 offset-sm-3">
                            <label>Password</label>
                                <input type="password" className="form-control" placeholder="Password"/>
                            </div>
                            <div className="for_login_btn shop_now">
                                <button>Login</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
        </>
    );
};

export default Login;
