import React from "react";
import { useState, useCallback } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProductLanding from "../components/ProductLanding";
import PortalPopup from "../components/PortalPopup";
import styles from "./SignUp.module.css";
const SignUp = () => {
  const [frame3AnchorEl, setFrame3AnchorEl] = useState(null);
  const navigate = useNavigate();
  const [isProductLandingOpen, setProductLandingOpen] = useState(false);
  const frame3Open = Boolean(frame3AnchorEl);
  const handleFrame3Click = (event) => {
    setFrame3AnchorEl(event.currentTarget);
  };
  const handleFrame3Close = () => {
    setFrame3AnchorEl(null);
  };

  const onSupportTextClick = useCallback(() => {
    // Please sync "Support" to the project
  }, []);

  const onFrameContainer10Click = useCallback(() => {
    navigate("/sign-up");
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

  const closeProductLanding = useCallback(() => {
    setProductLandingOpen(false);
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
    <>
      <div className={styles.signUp}>
        <div className={styles.footer}>
          <div className={styles.frame}>
            <div className={styles.iconsParent}>
              <img className={styles.icons} alt="" src="/icons.svg" />
              <div className={styles.content}>
                <p className={styles.p}>{`+351 964 300 963 `}</p>
                <p className={styles.p}>info@agrimp.com</p>
                <p className={styles.p}>&nbsp;</p>
              </div>
              <div className={styles.contactUs}>Contact Us</div>
            </div>
            <div className={styles.contentParent}>
              <div className={styles.content1}>
                <p className={styles.p}>About Us</p>
                <p className={styles.p}>Responsibility</p>
                <p className={styles.p}>{`Technology & Innovation`}</p>
                <p className={styles.p}>Explore our stories</p>
                <p className={styles.p}>&nbsp;</p>
                <p className={styles.p}>
                  <a
                    className={styles.blankLine3}
                    href="https://agrimp.com/cookies-policy"
                    target="_blank"
                  >
                    <span className={styles.blankLine4}>&nbsp;</span>
                  </a>
                </p>
              </div>
              <div className={styles.about}>About</div>
            </div>
            <div className={styles.contentGroup}>
              <div className={styles.content2}>
                <p className={styles.p}>{`Terms & Conditions
`}</p>
                <p className={styles.p}>Privacy Policy</p>
                <p className={styles.p}>Cookies Policy</p>
              </div>
              <div className={styles.legal}>Legal</div>
            </div>
            <div className={styles.contentContainer}>
              <div className={styles.content3}>
                <p className={styles.p}>Honey</p>
                <p className={styles.p}>Bee Wax</p>
                <p className={styles.p}>Honey Candles</p>
              </div>
              <div className={styles.shop}>Shop</div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.content4}>
                <p className={styles.p}>English</p>
                <p className={styles.p}>Hindi</p>
                <p className={styles.p}>Gujarati</p>
              </div>
              <div className={styles.language}>Language</div>
            </div>
            <div className={styles.contentParent1}>
              <div className={styles.content5}>
                <p className={styles.p}>Home</p>
                <p className={styles.p}>Product</p>
                <p className={styles.p}>Market Place</p>
                <p className={styles.p}>Fulfilement</p>
              </div>
              <div className={styles.navigation}>Navigation</div>
            </div>
          </div>
        </div>
        <form className={styles.signUp40}>
          <div className={styles.uiComponentsLoginSignI}>
            <b className={styles.sweetenYourBusiness}>
              Sweeten your business with our marketplace!
            </b>
            <div className={styles.signUp1}>Sign Up</div>
            <div className={styles.uiComponentsLoginSignIChild} />
            <b className={styles.basicDetails}>Basic Details</b>
            <input
              className={styles.frame1}
              type="text"
              placeholder="Email address"
            />
            <input
              className={styles.frame2}
              type="text"
              placeholder="First Name"
            />
            <input
              className={styles.frame3}
              type="text"
              placeholder="Last Name"
            />
            <div className={styles.frame4}>
              <div className={styles.dateOfBirth}>Date of Birth</div>
              <div className={styles.frame5}>
                <div className={styles.ddmmyyyy}>dd/mm/yyyy</div>
                <img
                  className={styles.thursdayIcon}
                  alt=""
                  src="/thursday@2x.png"
                />
              </div>
            </div>
            <div className={styles.frame6}>
              <Button
                sx={{ width: 496.0531311035156 }}
                id="button-India"
                aria-controls="menu-India"
                aria-haspopup="true"
                aria-expanded={frame3Open ? "true" : undefined}
                onClick={handleFrame3Click}
                color="primary"
              >
                India
              </Button>
              <Menu
                anchorEl={frame3AnchorEl}
                open={frame3Open}
                onClose={handleFrame3Close}
              />
            </div>
            <div className={styles.frame7}>
              <button className={styles.frame8}>
                <div className={styles.rectangle} />
                <div className={styles.male}>Male</div>
              </button>
              <button className={styles.frame9}>
                <div className={styles.rectangle1} />
                <div className={styles.female}>Female</div>
              </button>
            </div>
            <img className={styles.forwardIcon} alt="" src="/forward@2x.png" />
            <input
              className={styles.frame10}
              type="text"
              placeholder="Phone Number"
            />
          </div>
        </form>
        <div className={styles.headerSignUp}>
          <div className={styles.headerSignUpChild} />
          <div className={styles.support} onClick={onSupportTextClick}>
            Support
          </div>
          <div
            className={styles.firstCustomerOffer}
          >{`FIRST CUSTOMER OFFER  20% ON SHIPPING FEES                     FEB. 25–28. `}</div>
          <div className={styles.navbar}>
            <div
              className={styles.loginButtonParent}
              onClick={onFrameContainer10Click}
            >
              <button
                className={styles.loginButton}
                onClick={onLoginButtonClick}
              >
                <div className={styles.base} />
                <b className={styles.login}>Login</b>
              </button>
              <button className={styles.signupButton}>
                <div className={styles.base1} />
                <div className={styles.signUp2}>Sign Up</div>
              </button>
            </div>
            <div className={styles.homeParent}>
              <div className={styles.home1} onClick={onHomeTextClick}>
                Home
              </div>
              <div className={styles.home1} onClick={openProductLanding}>
                Product
              </div>
              <div className={styles.home1} onClick={onMarketPlaceTextClick}>
                Market Place
              </div>
              <div className={styles.home1} onClick={onMarketPlaceText1Click}>
                Fulfilment
              </div>
            </div>
            <b className={styles.logo} onClick={onLogoTextClick}>
              Name
            </b>
          </div>
        </div>
      </div>
      {isProductLandingOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeProductLanding}
        >
          <ProductLanding onClose={closeProductLanding} />
        </PortalPopup>
      )}
    </>
  );
};

export default SignUp;
