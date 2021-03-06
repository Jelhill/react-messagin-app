import { Link } from "react-router-dom"
function LandingPage() {
  return (
    <div className="container">    

        <div className="left-side">
            <h1><span><svg width="50" height="50" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32.9314 64.6286C31.9317 63.629 30.3115 63.629 29.3118 64.6286L22.607 71.3335C21.6073 72.3315 21.6073 73.9534 22.607 74.9514C23.5996 75.9472 25.2218 75.9562 26.2265 74.9514L32.9314 68.2466C33.931 67.2468 33.931 65.6267 32.9314 64.6286ZM14.7441 46.4412C13.7461 45.4416 12.1259 45.4416 11.1262 46.4412L4.42136 53.1461C3.42171 54.1457 3.42171 55.766 4.42136 56.7656C5.41941 57.7635 7.03708 57.7678 8.03929 56.7656L14.7441 50.0608C15.7438 49.0613 15.7438 47.4409 14.7441 46.4412ZM26.8695 52.5033C25.8698 51.5036 24.2496 51.5052 23.25 52.5033L6.25752 69.4957C5.25787 70.4954 5.25787 72.1156 6.25752 73.1153C7.25685 74.1115 8.87388 74.1152 9.87705 73.1153L26.8695 56.1228C27.8691 55.1232 27.8691 53.5029 26.8695 52.5033ZM79.2032 3.39728L54.9525 77.6113C54.2669 79.7061 51.4203 80.0117 50.3077 78.1023L33.9998 50.0561C33.4848 49.1716 33.5472 48.0664 34.1565 47.2443L40.0121 39.3607L32.1285 45.2162C31.3063 45.8256 30.2011 45.888 29.3166 45.373L1.27046 29.0649C-0.632232 27.9583 -0.339534 25.1078 1.76149 24.4202L75.9755 0.169454C77.9591 -0.477839 79.8533 1.40534 79.2032 3.39728Z" fill="#154360"/>
                </svg>
                </span>PostIt</h1>
            <h4>Sending group notification made easier</h4>
        </div>
        <div className="right-side">
            <div className="form-div">
                <form action="">
                    <div>
                        <input type="email" placeholder="Email" name="email" id="email" autocomplete="on" />
                        <input type="password" placeholder="Password" name="password" id="password" autocomplete="off" /><br />
                    </div>
                    <div className="below-input">
                        <div className="below-input-right"><input type="checkbox" />Remember me </div>
                        <Link to="#">Forgot Password</Link>
                    </div>
                    <button id="login">Sign In</button>           
                    <button className="google-signIn" id="login">Sign In with Google</button>               
                </form>
                <div className="dontHaveAccount">
                    <p>Dont have an account? <Link to="/register">Sign Up</Link></p>
                </div>
            </div>

        </div> 
    </div>    
  );
}

export default LandingPage;
