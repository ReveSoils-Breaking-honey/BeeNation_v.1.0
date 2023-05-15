import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ProductLanding from "../components/ProductLanding";
import PortalPopup from "../components/PortalPopup";
import styles from "./Login.module.css";
const Login = () => {
  const navigate = useNavigate();
  const [isProductLandingOpen, setProductLandingOpen] = useState(false);

  const onElementSocialButtonsOutClick = useCallback(() => {
    // Please sync "Home - logedin-buyer" to the project
  }, []);

  const onElementSocialButtonsOut1Click = useCallback(() => {
    // Please sync "Home - logedin-buyer" to the project
  }, []);

  const onOrCreateAnClick = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  const onSupportTextClick = useCallback(() => {
    // Please sync "Support" to the project
  }, []);

  const onFrameContainer8Click = useCallback(() => {
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
      <div className={styles.login}>
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
        <div className={styles.component3}>
          <div className={styles.pendingParent}>
            <div className={styles.pending}>
              <div className={styles.paymentToDate}>Buyer</div>
            </div>
            <div className={styles.pending1}>
              <div className={styles.paymentToDate1}>Seller</div>
            </div>
          </div>
          <div className={styles.uiComponentsLoginSignI}>
            <div className={styles.loginToContinue}>Login to continue</div>
            <div className={styles.welcomeBack}>Welcome Back</div>
            <button
              className={styles.elementSocialButtonsOut}
              onClick={onElementSocialButtonsOutClick}
            >
              <div className={styles.container}>
                <img
                  className={styles.iconsSocialFacebook}
                  alt=""
                  src="/-icons--social--facebook.svg"
                />
                <div className={styles.continueWithFacebook}>
                  Continue with Facebook
                </div>
              </div>
            </button>
            <button
              className={styles.elementSocialButtonsOut1}
              onClick={onElementSocialButtonsOut1Click}
            >
              <div className={styles.container}>
                <img
                  className={styles.iconsSocialFacebook}
                  alt=""
                  src="/icons--social--google.svg"
                />
                <div className={styles.continueWithFacebook}>
                  Continue with Google
                </div>
              </div>
            </button>
            <button className={styles.elementSocialButtonsOut2}>
              <div className={styles.container}>
                <img className={styles.frameIcon} alt="" src="/frame.svg" />
                <div className={styles.continueWithFacebook}>
                  Continue with Email
                </div>
              </div>
            </button>
          </div>
          <div
            className={styles.orCreateAnContainer}
            onClick={onOrCreateAnClick}
          >
            <span className={styles.orCreateAn}>{`Or create an `}</span>
            <b>account</b>
          </div>
        </div>
        <div className={styles.headerLogin}>
          <div className={styles.headerLoginChild} />
          <div className={styles.support} onClick={onSupportTextClick}>
            Support
          </div>
          <div
            className={styles.firstCustomerOffer}
          >{`FIRST CUSTOMER OFFER  20% ON SHIPPING FEES                     FEB. 25–28. `}</div>
          <div className={styles.navbar}>
            <div
              className={styles.loginButtonParent}
              onClick={onFrameContainer8Click}
            >
              <button
                className={styles.loginButton}
                onClick={onLoginButtonClick}
              >
                <div className={styles.base} />
                <b className={styles.login1}>Login</b>
              </button>
              <button className={styles.signupButton}>
                <div className={styles.base1} />
                <div className={styles.signUp}>Sign Up</div>
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

export default Login;
