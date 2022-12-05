import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import logo from '../../images/logo.png';

const Login = () => {
    let [login, setLogin] = useState("");
    let [password, setPassword] = useState("");
    return (
        <body className="text-center">
        <main className="form-signin w-100 m-auto">
            <form>
                <img className="mb-4" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me"/> Remember me
                    </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
            </form>
        </main>
        </body>
        // <div className="text-center">
        //     <main className="form-signin w-100 m-auto">
        //         <form>
        //             <img className="mb-4" src={logo} alt=""/>
        //             <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        //
        //             <div className="form-floating">
        //                 <input
        //                     onChange={event => setLogin(event.target.value)}
        //                     type="email"
        //                     className="form-control"
        //                     id="floatingInput"
        //                     placeholder="name@example.com"
        //                 />
        //                 <label htmlFor="floatingInput">Email address</label>
        //             </div>
        //             <div className="form-floating">
        //                 <input onChange={event => setPassword(event.target.value)}
        //                        type="password"
        //                        className="form-control"
        //                        id="floatingPassword"
        //                        placeholder="Password"/>
        //                 <label htmlFor="floatingPassword">Password</label>
        //             </div>
        //
        //             <div className="checkbox mb-3">
        //                 <label>
        //                     <input type="checkbox" value="remember-me"/> Remember me
        //                 </label>
        //             </div>
        //             <div>
        //                 Your login:
        //                 {login}
        //             </div>
        //             <div>
        //                 Your password:
        //                 {password}
        //             </div>
        //             <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        // {/*            <p className="mt-5 mb-3 text-muted">© 2017–2022</p>*/}
        // {/*        </form>*/}
        // {/*    </main>*/}
        // {/*</div>*/}
    );
};

export default Login;