import React, { useContext } from 'react';
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";


const Navbar = () => {
    const navigate = useNavigate();
    // const {user} = useContext(AuthContext);
    // const handleLogout = async () =>{
    //     await signOut(auth);
    //     Navigate("/login")
    //   }

  const [isProductLandingOpen, setProductLandingOpen] = useState(false);

  const onSupportTextClick = useCallback(() => {
      navigate("/login");
  }, []);

  const onSignUpButtonClick = useCallback(() => {
    navigate("/SignUp");
  }, [navigate]);

  const onLoginButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
  const openProductLanding = useCallback(() => {
    setProductLandingOpen(true);
  }, []);

  const onMarketPlaceTextClick = useCallback(() => {
    navigate("/marketplacelanding");
  }, [navigate]);

  const onMarketPlaceText1Click = useCallback(() => {
    navigate("/fulfilmentlanding");
  }, [navigate]);

  const onLogoTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

    return (
        <nav className={styles.headerHome}>
            <div className={styles.headerHomeChild} />
            
            <div className={styles.support} onClick={onSupportTextClick}>
                Support
            </div>
            <div className={styles.firstCustomerOffer}>
                {`FIRST CUSTOMER OFFER  20% ON SHIPPING FEES                     FEB. 25–28. `}
            </div>
            
            <div className={styles.navbar}>
            <div className={styles.loginButtonParent}>
                <button
                    className={styles.loginButton}
                    onClick={onLoginButtonClick}
                >
                    <div className={styles.base} />
                    <b className={styles.login}>Login</b>
                </button>

                <button
                    className={styles.signupButton}
                    onClick={onSignUpButtonClick}
                >
                    <div className={styles.base1} />
                    <div className={styles.signUp}>Sign Up</div>
                </button>
            </div>
                <b className={styles.logo} onClick={onLogoTextClick}>
                    Name
                </b>
                <div className={styles.homeParent}>
                    <b className={styles.home1} onClick={onHomeTextClick}>
                        Home
                    </b>
                    <div className={styles.product1} onClick={openProductLanding}>
                        Product
                    </div>
                    <div className={styles.product1} onClick={onMarketPlaceTextClick}>
                        Market Place
                    </div>
                    <div
                        className={styles.product1}
                        onClick={onMarketPlaceText1Click}
                    >
                        Fulfilment
                    </div>
                </div>
            </div>
      
        </nav>

    )
}

export default Navbar