import React from "react";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ProductLanding from "../components/ProductLanding";
import PortalPopup from "../components/PortalPopup";
import styles from "./MarketplaceLanding.module.css";
const MarketplaceLanding = () => {
  const navigate = useNavigate();
  const [isProductLandingOpen, setProductLandingOpen] = useState(false);

  const onGroupButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onGroupButton1Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onGroupButton2Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onGroupButton3Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onGroupButton4Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onGroupContainer6Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onGroupContainer7Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onGroupContainer8Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onGroupContainer9Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onGroupContainer10Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onGroupContainer11Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onGroupContainer12Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onSupportTextClick = useCallback(() => {
    // Please sync "Support" to the project
  }, []);

  const onFrameContainer1Click = useCallback(() => {
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
      <div className={styles.marketplaceLanding}>
        <div className={styles.filter}>
          <div className={styles.filterChild} />
          <div className={styles.groupParent}>
            <div className={styles.groupContainer}>
              <div className={styles.groupWrapper}>
                <div className={styles.filterListAltParent}>
                  <img
                    className={styles.filterListAlt}
                    alt=""
                    src="/filter-list-alt.svg"
                  />
                  <b className={styles.filters}>Filters</b>
                </div>
              </div>
              <div className={styles.groupChild} />
              <b className={styles.asPerMy}>As per my preferences</b>
            </div>
            <div className={styles.groupFrame}>
              <div className={styles.rectangleParent}>
                <div className={styles.groupItem} />
                <b className={styles.filter1}>Filter 1</b>
                <div className={styles.groupInner} />
                <b className={styles.filter2}>Filter 2</b>
                <div className={styles.rectangleDiv} />
                <b className={styles.filter3}>Filter 3</b>
                <div className={styles.groupChild1} />
                <b className={styles.filter4}>Filter 4</b>
                <div className={styles.groupChild2} />
                <b className={styles.filter5}>Filter 5</b>
                <div className={styles.groupChild3} />
                <b className={styles.filter6}>Filter 6</b>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.fulfilmentDisplay}>
          <div className={styles.displayingXxxxxRecords}>
            Displaying xxxxx records
          </div>
          <div className={styles.basedOnYour}>Based on Your Search</div>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameChild} />
            <b className={styles.typeHereTo}>
              Type here to filter even further...
            </b>
            <img className={styles.searchIcon} alt="" src="/search1.svg" />
          </div>
          <div className={styles.marketplaceHoneyOrder}>
            <div className={styles.marketplaceHoneyOrderChild} />
            <div className={styles.maskGroup}>
              <img
                className={styles.maskGroupChild}
                alt=""
                src="/rectangle-6712@2x.png"
              />
            </div>
            <button
              className={styles.rectangleContainer}
              onClick={onGroupButtonClick}
            >
              <div className={styles.groupChild4} />
              <div className={styles.buy}>BUY</div>
            </button>
            <div className={styles.requirementXxxLocationContainer}>
              <p className={styles.requirementXxx}>
                Requirement: xxx location: xyz
              </p>
              <p className={styles.requirementXxx}>By Date: yyy</p>
            </div>
            <div className={styles.honey1}>Honey 1</div>
          </div>
          <div className={styles.marketplaceHoneyOrder1}>
            <div className={styles.marketplaceHoneyOrderChild} />
            <div className={styles.maskGroup}>
              <img
                className={styles.maskGroupChild}
                alt=""
                src="/rectangle-6713@2x.png"
              />
            </div>
            <button
              className={styles.rectangleContainer}
              onClick={onGroupButton1Click}
            >
              <div className={styles.groupChild4} />
              <div className={styles.buy}>BUY</div>
            </button>
            <div className={styles.requirementXxxLocationContainer}>
              <p className={styles.requirementXxx}>
                Requirement: xxx location: xyz
              </p>
              <p className={styles.requirementXxx}>By Date: yyy</p>
            </div>
            <div className={styles.honey1}>Honey 1</div>
          </div>
          <div className={styles.marketplaceHoneyOrder2}>
            <div className={styles.marketplaceHoneyOrderChild} />
            <div className={styles.maskGroup}>
              <img
                className={styles.maskGroupChild}
                alt=""
                src="/rectangle-6714@2x.png"
              />
            </div>
            <button
              className={styles.rectangleContainer}
              onClick={onGroupButton2Click}
            >
              <div className={styles.groupChild4} />
              <div className={styles.buy}>BUY</div>
            </button>
            <div className={styles.requirementXxxLocationContainer}>
              <p className={styles.requirementXxx}>
                Requirement: xxx location: xyz
              </p>
              <p className={styles.requirementXxx}>By Date: yyy</p>
            </div>
            <div className={styles.honey1}>Honey 1</div>
          </div>
          <div className={styles.marketplaceHoneyOrder3}>
            <div className={styles.marketplaceHoneyOrderChild} />
            <div className={styles.maskGroup}>
              <img
                className={styles.maskGroupChild}
                alt=""
                src="/rectangle-6715@2x.png"
              />
            </div>
            <button
              className={styles.rectangleContainer}
              onClick={onGroupButton3Click}
            >
              <div className={styles.groupChild4} />
              <div className={styles.buy}>BUY</div>
            </button>
            <div className={styles.requirementXxxLocationContainer}>
              <p className={styles.requirementXxx}>
                Requirement: xxx location: xyz
              </p>
              <p className={styles.requirementXxx}>By Date: yyy</p>
            </div>
            <div className={styles.honey1}>Honey 1</div>
          </div>
          <div className={styles.marketplaceHoneyOrder4}>
            <div className={styles.marketplaceHoneyOrderChild} />
            <div className={styles.maskGroup}>
              <img
                className={styles.maskGroupChild}
                alt=""
                src="/rectangle-6716@2x.png"
              />
            </div>
            <button
              className={styles.rectangleContainer}
              onClick={onGroupButton4Click}
            >
              <div className={styles.groupChild4} />
              <div className={styles.buy}>BUY</div>
            </button>
            <div className={styles.requirementXxxLocationContainer}>
              <p className={styles.requirementXxx}>
                Requirement: xxx location: xyz
              </p>
              <p className={styles.requirementXxx}>By Date: yyy</p>
            </div>
            <div className={styles.honey1}>Honey 1</div>
          </div>
          <div className={styles.marketplaceHoneyOrder5}>
            <div className={styles.marketplaceHoneyOrderChild} />
            <div className={styles.maskGroup}>
              <img
                className={styles.maskGroupChild}
                alt=""
                src="/rectangle-6717@2x.png"
              />
            </div>
            <div className={styles.groupDiv} onClick={onGroupContainer6Click}>
              <div className={styles.groupChild4} />
              <div className={styles.buy5}>BUY</div>
            </div>
            <div className={styles.requirementXxxLocationContainer5}>
              <p className={styles.requirementXxx}>
                Requirement: xxx location: xyz
              </p>
              <p className={styles.requirementXxx}>By Date: yyy</p>
            </div>
            <div className={styles.honey15}>Honey 1</div>
          </div>
          <div className={styles.marketplaceHoneyOrder6}>
            <div className={styles.marketplaceHoneyOrderChild} />
            <div className={styles.maskGroup}>
              <img
                className={styles.maskGroupChild}
                alt=""
                src="/rectangle-6718@2x.png"
              />
            </div>
            <div className={styles.groupDiv} onClick={onGroupContainer7Click}>
              <div className={styles.groupChild4} />
              <div className={styles.buy5}>BUY</div>
            </div>
            <div className={styles.requirementXxxLocationContainer5}>
              <p className={styles.requirementXxx}>
                Requirement: xxx location: xyz
              </p>
              <p className={styles.requirementXxx}>By Date: yyy</p>
            </div>
            <div className={styles.honey15}>Honey 1</div>
          </div>
          <div className={styles.marketplaceHoneyOrder7}>
            <div className={styles.marketplaceHoneyOrderChild} />
            <div className={styles.maskGroup}>
              <img
                className={styles.maskGroupChild}
                alt=""
                src="/rectangle-6719@2x.png"
              />
            </div>
            <div className={styles.groupDiv} onClick={onGroupContainer8Click}>
              <div className={styles.groupChild4} />
              <div className={styles.buy5}>BUY</div>
            </div>
            <div className={styles.requirementXxxLocationContainer5}>
              <p className={styles.requirementXxx}>
                Requirement: xxx location: xyz
              </p>
              <p className={styles.requirementXxx}>By Date: yyy</p>
            </div>
            <div className={styles.honey15}>Honey 1</div>
          </div>
          <div className={styles.marketplaceHoneyOrder8}>
            <div className={styles.marketplaceHoneyOrderChild} />
            <div className={styles.maskGroup}>
              <img
                className={styles.maskGroupChild}
                alt=""
                src="/rectangle-6720@2x.png"
              />
            </div>
            <div className={styles.groupDiv} onClick={onGroupContainer9Click}>
              <div className={styles.groupChild4} />
              <div className={styles.buy5}>BUY</div>
            </div>
            <div className={styles.requirementXxxLocationContainer5}>
              <p className={styles.requirementXxx}>
                Requirement: xxx location: xyz
              </p>
              <p className={styles.requirementXxx}>By Date: yyy</p>
            </div>
            <div className={styles.honey15}>Honey 1</div>
          </div>
          <div className={styles.marketplaceHoneyOrder9}>
            <div className={styles.marketplaceHoneyOrderChild} />
            <div className={styles.maskGroup}>
              <img
                className={styles.maskGroupChild}
                alt=""
                src="/rectangle-6721@2x.png"
              />
            </div>
            <div className={styles.groupDiv} onClick={onGroupContainer10Click}>
              <div className={styles.groupChild4} />
              <div className={styles.buy5}>BUY</div>
            </div>
            <div className={styles.requirementXxxLocationContainer5}>
              <p className={styles.requirementXxx}>
                Requirement: xxx location: xyz
              </p>
              <p className={styles.requirementXxx}>By Date: yyy</p>
            </div>
            <div className={styles.honey15}>Honey 1</div>
          </div>
          <div className={styles.marketplaceHoneyOrder10}>
            <div className={styles.marketplaceHoneyOrderChild} />
            <div className={styles.maskGroup}>
              <img
                className={styles.maskGroupChild}
                alt=""
                src="/rectangle-6722@2x.png"
              />
            </div>
            <div className={styles.groupDiv} onClick={onGroupContainer11Click}>
              <div className={styles.groupChild4} />
              <div className={styles.buy5}>BUY</div>
            </div>
            <div className={styles.requirementXxxLocationContainer5}>
              <p className={styles.requirementXxx}>
                Requirement: xxx location: xyz
              </p>
              <p className={styles.requirementXxx}>By Date: yyy</p>
            </div>
            <div className={styles.honey15}>Honey 1</div>
          </div>
          <div className={styles.marketplaceHoneyOrder11}>
            <div className={styles.marketplaceHoneyOrderChild} />
            <div className={styles.maskGroup}>
              <img
                className={styles.maskGroupChild}
                alt=""
                src="/rectangle-6723@2x.png"
              />
            </div>
            <div className={styles.groupDiv} onClick={onGroupContainer12Click}>
              <div className={styles.groupChild4} />
              <div className={styles.buy5}>BUY</div>
            </div>
            <div className={styles.requirementXxxLocationContainer5}>
              <p className={styles.requirementXxx}>
                Requirement: xxx location: xyz
              </p>
              <p className={styles.requirementXxx}>By Date: yyy</p>
            </div>
            <div className={styles.honey15}>Honey 1</div>
          </div>
          <div className={styles.lable4}>
            <div className={styles.lable4Child} />
            <div className={styles.featured}>Featured</div>
          </div>
          <div className={styles.lable3}>
            <div className={styles.lable4Child} />
            <div className={styles.featured}>Featured</div>
          </div>
          <div className={styles.lable2}>
            <div className={styles.lable4Child} />
            <div className={styles.featured}>Featured</div>
          </div>
          <div className={styles.lable1}>
            <div className={styles.lable4Child} />
            <div className={styles.featured}>Featured</div>
          </div>
        </div>
        <div className={styles.pageToggel}>
          <img
            className={styles.arrowPreviousIcon}
            alt=""
            src="/arrowprevious.svg"
          />
          <img className={styles.arrowNextIcon} alt="" src="/arrownext.svg" />
          <div className={styles.page2}>
            <img className={styles.page2Child} alt="" src="/ellipse-800.svg" />
            <div className={styles.div}>2</div>
          </div>
          <div className={styles.page1}>
            <img className={styles.page2Child} alt="" src="/ellipse-799.svg" />
            <div className={styles.div1}>1</div>
          </div>
        </div>
        <div className={styles.headerFulfilment}>
          <div className={styles.headerFulfilmentChild} />
          <div className={styles.support} onClick={onSupportTextClick}>
            Support
          </div>
          <div
            className={styles.firstCustomerOffer}
          >{`FIRST CUSTOMER OFFER  20% ON SHIPPING FEES                     FEB. 25–28. `}</div>
          <div className={styles.navbar}>
            <div
              className={styles.loginButtonParent}
              onClick={onFrameContainer1Click}
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
                <div className={styles.signUp}>Sign Up</div>
              </button>
            </div>
            <div className={styles.homeParent}>
              <div className={styles.home} onClick={onHomeTextClick}>
                Home
              </div>
              <div className={styles.home} onClick={openProductLanding}>
                Product
              </div>
              <b
                className={styles.marketPlace}
                onClick={onMarketPlaceTextClick}
              >
                Market Place
              </b>
              <div className={styles.home} onClick={onMarketPlaceText1Click}>
                Fulfilment
              </div>
            </div>
            <b className={styles.logo} onClick={onLogoTextClick}>
              Name
            </b>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.frame}>
            <div className={styles.iconsParent}>
              <img className={styles.icons} alt="" src="/icons.svg" />
              <div className={styles.content}>
                <p className={styles.requirementXxx}>{`+351 964 300 963 `}</p>
                <p className={styles.requirementXxx}>info@agrimp.com</p>
                <p className={styles.requirementXxx}>&nbsp;</p>
              </div>
              <div className={styles.contactUs}>Contact Us</div>
            </div>
            <div className={styles.contentParent}>
              <div className={styles.content1}>
                <p className={styles.requirementXxx}>About Us</p>
                <p className={styles.requirementXxx}>Responsibility</p>
                <p
                  className={styles.requirementXxx}
                >{`Technology & Innovation`}</p>
                <p className={styles.requirementXxx}>Explore our stories</p>
                <p className={styles.requirementXxx}>&nbsp;</p>
                <p className={styles.requirementXxx}>
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
                <p className={styles.requirementXxx}>{`Terms & Conditions
`}</p>
                <p className={styles.requirementXxx}>Privacy Policy</p>
                <p className={styles.requirementXxx}>Cookies Policy</p>
              </div>
              <div className={styles.legal}>Legal</div>
            </div>
            <div className={styles.contentContainer}>
              <div className={styles.content3}>
                <p className={styles.requirementXxx}>Honey</p>
                <p className={styles.requirementXxx}>Bee Wax</p>
                <p className={styles.requirementXxx}>Honey Candles</p>
              </div>
              <div className={styles.shop}>Shop</div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.content4}>
                <p className={styles.requirementXxx}>English</p>
                <p className={styles.requirementXxx}>Hindi</p>
                <p className={styles.requirementXxx}>Gujarati</p>
              </div>
              <div className={styles.language}>Language</div>
            </div>
            <div className={styles.contentParent1}>
              <div className={styles.content5}>
                <p className={styles.requirementXxx}>Home</p>
                <p className={styles.requirementXxx}>Product</p>
                <p className={styles.requirementXxx}>Market Place</p>
                <p className={styles.requirementXxx}>Fulfilement</p>
              </div>
              <div className={styles.navigation}>Navigation</div>
            </div>
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

export default MarketplaceLanding;
