import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ProductLanding from "../components/ProductLanding";
import PortalPopup from "../components/PortalPopup";
import styles from "./HomeLanding.module.css";
const HomeLanding = () => {
  const navigate = useNavigate();
  const [isProductLandingOpen, setProductLandingOpen] = useState(false);

  const onSupportTextClick = useCallback(() => {
    // Please sync "Support" to the project
  }, []);

  const onFrameContainer22Click = useCallback(() => {
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
      <div className={styles.homeLanding}>
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
        <div className={styles.testimonials}>
          <div className={styles.customerTestimonialsWrapper}>
            <div className={styles.customerTestimonials}>
              {" "}
              CUSTOMER TESTIMONIALS
            </div>
          </div>
          <div className={styles.customerReviews}>
            <div className={styles.boxParent}>
              <div className={styles.box}>
                <div className={styles.topContent}>
                  <div className={styles.profile}>
                    <img className={styles.imageIcon} alt="" src="/image.svg" />
                    <div className={styles.vikkiStarr}>Vikki Starr</div>
                  </div>
                  <div className={styles.line} />
                  <div className={styles.testimony}>
                    <div className={styles.star}>
                      <img
                        className={styles.vuesaxlinearstarIcon}
                        alt=""
                        src="/vuesaxlinearstar.svg"
                      />
                      <img
                        className={styles.vuesaxlinearstarIcon}
                        alt=""
                        src="/vuesaxlinearstar1.svg"
                      />
                      <img
                        className={styles.vuesaxlinearstarIcon}
                        alt=""
                        src="/vuesaxlinearstar2.svg"
                      />
                      <img
                        className={styles.vuesaxlinearstarIcon}
                        alt=""
                        src="/vuesaxlinearstar.svg"
                      />
                      <img
                        className={styles.vuesaxlinearstarIcon}
                        alt=""
                        src="/vuesaxlinearstar3.svg"
                      />
                    </div>
                    <div className={styles.absolutelyLoveWeb}>
                      Absolutely love web page.A great consolidation of the
                      fragmented honey Industry
                    </div>
                  </div>
                </div>
                <div className={styles.january152023}>January 15, 2023</div>
              </div>
              <div className={styles.box}>
                <div className={styles.topContent}>
                  <div className={styles.profile}>
                    <img
                      className={styles.imageIcon}
                      alt=""
                      src="/group-19.svg"
                    />
                    <div className={styles.vikkiStarr}>Terry Baskey</div>
                  </div>
                  <div className={styles.line} />
                  <div className={styles.testimony}>
                    <div className={styles.star}>
                      <img
                        className={styles.vuesaxlinearstarIcon}
                        alt=""
                        src="/vuesaxlinearstar4.svg"
                      />
                      <img
                        className={styles.vuesaxlinearstarIcon}
                        alt=""
                        src="/vuesaxlinearstar5.svg"
                      />
                      <img
                        className={styles.vuesaxlinearstarIcon}
                        alt=""
                        src="/vuesaxlinearstar1.svg"
                      />
                      <img
                        className={styles.vuesaxlinearstarIcon}
                        alt=""
                        src="/vuesaxlinearstar4.svg"
                      />
                      <img
                        className={styles.vuesaxlinearstarIcon}
                        alt=""
                        src="/vuesaxlinearstar5.svg"
                      />
                    </div>
                    <div className={styles.absolutelyLoveWeb}>
                      Best damn place to sell products at great prices
                    </div>
                  </div>
                </div>
                <div className={styles.january152023}>January 5, 2023</div>
              </div>
              <div className={styles.box}>
                <div className={styles.topContent}>
                  <div className={styles.profile}>
                    <img
                      className={styles.imageIcon}
                      alt=""
                      src="/group-18.svg"
                    />
                    <div className={styles.vikkiStarr}>Terry Baskey</div>
                  </div>
                  <div className={styles.line} />
                  <div className={styles.testimony}>
                    <div className={styles.star}>
                      <img
                        className={styles.vuesaxlinearstarIcon}
                        alt=""
                        src="/vuesaxlinearstar6.svg"
                      />
                      <img
                        className={styles.vuesaxlinearstarIcon}
                        alt=""
                        src="/vuesaxlinearstar7.svg"
                      />
                      <img
                        className={styles.vuesaxlinearstarIcon}
                        alt=""
                        src="/vuesaxlinearstar8.svg"
                      />
                      <img
                        className={styles.vuesaxlinearstarIcon}
                        alt=""
                        src="/vuesaxlinearstar6.svg"
                      />
                      <img
                        className={styles.vuesaxlinearstarIcon}
                        alt=""
                        src="/vuesaxlinearstar7.svg"
                      />
                    </div>
                    <div className={styles.absolutelyLoveWeb}>
                      Best damn place to buy your honey Products at great prices
                    </div>
                  </div>
                </div>
                <div className={styles.january152023}>January 5, 2023</div>
              </div>
              <div className={styles.box3}>
                <div className={styles.topContent}>
                  <div className={styles.profile}>
                    <img
                      className={styles.imageIcon}
                      alt=""
                      src="/image1.svg"
                    />
                    <div className={styles.vikkiStarr}>Vikki Starr</div>
                  </div>
                  <div className={styles.line} />
                  <div className={styles.testimony}>
                    <div className={styles.star}>
                      <img
                        className={styles.vuesaxlinearstarIcon}
                        alt=""
                        src="/vuesaxlinearstar8.svg"
                      />
                      <img
                        className={styles.vuesaxlinearstarIcon}
                        alt=""
                        src="/vuesaxlinearstar6.svg"
                      />
                      <img
                        className={styles.vuesaxlinearstarIcon}
                        alt=""
                        src="/vuesaxlinearstar9.svg"
                      />
                      <img
                        className={styles.vuesaxlinearstarIcon}
                        alt=""
                        src="/vuesaxlinearstar8.svg"
                      />
                      <img
                        className={styles.vuesaxlinearstarIcon}
                        alt=""
                        src="/vuesaxlinearstar10.svg"
                      />
                    </div>
                    <div className={styles.absolutelyLoveWeb}>
                      Absolutely love TopShelfBC; affordable on any budget and
                      such fast delivery, straight to my door! I recommend them
                      to all my friends and family for their 420 needs.
                    </div>
                  </div>
                </div>
                <div className={styles.january152023}>January 15, 2023</div>
              </div>
            </div>
            <div className={styles.left}>
              <img
                className={styles.vuesaxlineararrowLeftIcon}
                alt=""
                src="/vuesaxlineararrowleft.svg"
              />
            </div>
            <div className={styles.right}>
              <img
                className={styles.vuesaxlineararrowLeftIcon}
                alt=""
                src="/vuesaxlineararrowright.svg"
              />
            </div>
            <div className={styles.box4}>
              <div className={styles.votedBestOnline}>
                VOTED BEST ONLINE B2B APICULTURE MARKETPLACE IN INDIA
              </div>
              <div className={styles.line4} />
              <img
                className={styles.googlegoogleLogoSvg150pxIcon}
                alt=""
                src="/googlegooglelogosvg150px.svg"
              />
              <div className={styles.review}>
                <div className={styles.vikkiStarr}>EXELLENCET</div>
                <div className={styles.row}>
                  <div className={styles.star}>
                    <img
                      className={styles.vuesaxlinearstarIcon20}
                      alt=""
                      src="/vuesaxlinearstar11.svg"
                    />
                    <img
                      className={styles.vuesaxlinearstarIcon20}
                      alt=""
                      src="/vuesaxlinearstar12.svg"
                    />
                    <img
                      className={styles.vuesaxlinearstarIcon20}
                      alt=""
                      src="/vuesaxlinearstar13.svg"
                    />
                    <img
                      className={styles.vuesaxlinearstarIcon20}
                      alt=""
                      src="/vuesaxlinearstar11.svg"
                    />
                    <img
                      className={styles.vuesaxlinearstarIcon20}
                      alt=""
                      src="/vuesaxlinearstar12.svg"
                    />
                  </div>
                  <div className={styles.line5} />
                  <div className={styles.row1}>
                    <div className={styles.vikkiStarr}>on</div>
                    <div className={styles.vikkiStarr}>2 mil+</div>
                    <div className={styles.reviews}>Reviews</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.howToSell}>
          <div className={styles.heding}>
            <div className={styles.howToSell1}>
              HOW TO BUY OR SELL PRODUCTS?
            </div>
          </div>
          <div className={styles.content6}>
            <div className={styles.description}>
              <div className={styles.number}>
                <div className={styles.label}>
                  <div className={styles.div}>2</div>
                </div>
              </div>
              <div className={styles.icon}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                <div className={styles.iconChild} />
              </div>
              <div className={styles.text}>
                <div className={styles.bidsellorder}>BID/SELL/ORDER</div>
                <div className={styles.asASeller}>
                  As a seller go to Add Product.As a Buyer visit
                  Marketplace.Start Bidding with with seller/buyer
                </div>
              </div>
            </div>
            <div className={styles.description1}>
              <div className={styles.number1}>
                <div className={styles.label1}>
                  <div className={styles.div1}>1</div>
                </div>
              </div>
              <img className={styles.icon1} alt="" src="/icon.svg" />
              <div className={styles.text1}>
                <div className={styles.bidsellorder}>REGISTER</div>
                <div className={styles.asASeller}>
                  Sign up for an account with us. This is quick and simple. We
                  don’t require any more details from you than the bare minimum
                  needed for you to place an order and get your product
                  delivered.
                </div>
              </div>
            </div>
            <div className={styles.description2}>
              <div className={styles.number1}>
                <div className={styles.label1}>
                  <div className={styles.div1}>3</div>
                </div>
              </div>
              <div className={styles.icon2}>
                <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
                <div className={styles.iconItem} />
              </div>
              <div className={styles.text1}>
                <div className={styles.bidsellorder}>MAKE PAYMENT</div>
                <div className={styles.asASeller}>
                  Pay securely. Our site boasts sturdy protection certificates
                  to keep your card details and related data safe.
                </div>
              </div>
            </div>
            <div className={styles.description3}>
              <div className={styles.number}>
                <div className={styles.label1}>
                  <div className={styles.div1}>4</div>
                </div>
              </div>
              <div className={styles.phcircleWavyCheckLight}>
                <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
                <div className={styles.phcircleWavyCheckLightChild} />
              </div>
              <div className={styles.text}>
                <div className={styles.bidsellorder}>RELAX</div>
                <div className={styles.asASeller}>
                  Your product will be packaged discretely and shipped by Canada
                  Post Xpresspost. We will provide you with a tracking number so
                  then you can follow your mail order marijuana every step of
                  the way.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.gettingStarted}>
          <div className={styles.heading}>
            <div className={styles.gettingStarted1}>Getting Started</div>
          </div>
          <div className={styles.content7}>
            <button className={styles.registerAsBuyerWrapper}>
              <div className={styles.registerAsBuyer}>Register As Buyer</div>
            </button>
            <button className={styles.registerAsSellerWrapper}>
              <div className={styles.registerAsSellerContainer}>
                <p className={styles.p}>Register As</p>
                <p className={styles.p}>Seller</p>
              </div>
            </button>
            <div className={styles.weOpenThe}>
              We open the door to thousands of approved buyers and sellers. Post
              your honey bid as a registered buyer, or create your honey offer
              as a platform verified seller. Through our rigorous customer
              compliance we make sure that only reliable users gain access to
              our digital marketplace. There are two ways to get started:
            </div>
          </div>
        </div>
        <div className={styles.whyChooseUs}>
          <div className={styles.heading1}>
            <div className={styles.gettingStarted1}>Why Choose us</div>
          </div>
          <div className={styles.content8}>
            <div className={styles.part1}>
              <img
                className={styles.maskGroupIcon}
                alt=""
                src="/mask-group@2x.png"
              />
              <div className={styles.frameParent}>
                <div className={styles.qualityServiceParent}>
                  <div className={styles.qualityService}>Quality Service</div>
                  <div className={styles.ourDeviceWill}>
                    Our device will ensure the proper quality and grading of
                    honey using our indeginous device which will in few minutes
                    access your honey quality so that you can get better prices.
                  </div>
                </div>
                <button className={styles.learnMoreWrapper}>
                  <div className={styles.learnMore}>Learn more</div>
                </button>
              </div>
            </div>
            <div className={styles.part2}>
              <div className={styles.frameGroup}>
                <div className={styles.qualityServiceParent}>
                  <div className={styles.qualityService}>
                    MarketPlace Bidding
                  </div>
                  <div className={styles.ourDeviceWill}>
                    An Efficient Platform for bidding and settling deals among
                    food processors,beekepers,whitle labelers and many more
                  </div>
                </div>
                <button className={styles.learnMoreWrapper}>
                  <div className={styles.learnMore}>Learn more</div>
                </button>
              </div>
              <img
                className={styles.maskGroupIcon}
                alt=""
                src="/mask-group1@2x.png"
              />
            </div>
            <div className={styles.part3}>
              <img
                className={styles.maskGroupIcon}
                alt=""
                src="/mask-group2@2x.png"
              />
              <div className={styles.frameContainer}>
                <div className={styles.qualityServiceParent}>
                  <div className={styles.qualityService}>
                    Seamless Experience
                  </div>
                  <div className={styles.ourDeviceWill}>
                    EasyPayments, Reliable Delivery and a remeberable experience
                  </div>
                </div>
                <button className={styles.learnMoreWrapper}>
                  <div className={styles.learnMore}>Learn more</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.products}>
          <div className={styles.heading2}>
            <div className={styles.products1}>Products</div>
          </div>
          <img className={styles.comtentIcon} alt="" src="/comtent@2x.png" />
        </div>
        <div className={styles.featuredCollection}>
          <div className={styles.heading3}>
            <div className={styles.gettingStarted1}>Featured Collection</div>
          </div>
          <div className={styles.content9}>
            <div className={styles.frameParent1}>
              <div className={styles.frameParent2}>
                <button className={styles.viewCollectionWrapper}>
                  <div className={styles.viewCollection}>View Collection</div>
                </button>
                <div className={styles.loremmIpsum}>{`Loremm Ipsum `}</div>
                <div className={styles.nilgiriHoney}>Nilgiri Honey</div>
                <img
                  className={styles.maskGroupIcon3}
                  alt=""
                  src="/mask-group3@2x.png"
                />
              </div>
              <div className={styles.frameParent3}>
                <button className={styles.viewCollectionContainer}>
                  <div className={styles.viewCollection}>View Collection</div>
                </button>
                <div
                  className={styles.loremmIpsum}
                >{`Ante mus blandit sapien sociosqu per consequat ad. Aenean habitasse interdum letius lobortis primis `}</div>
                <div className={styles.mustardHoney}>Mustard Honey</div>
                <img
                  className={styles.maskGroupIcon3}
                  alt=""
                  src="/mask-group4@2x.png"
                />
              </div>
              <div className={styles.frameParent4}>
                <button className={styles.viewCollectionContainer}>
                  <div className={styles.viewCollection}>View Collection</div>
                </button>
                <div className={styles.loremmIpsum}>
                  Ante mus blandit sapien sociosqu per consequat ad. Aenean
                  habitasse interdum letius lobortis prim.
                </div>
                <div className={styles.fennelHoney}>Fennel Honey</div>
                <img
                  className={styles.maskGroupIcon5}
                  alt=""
                  src="/mask-group5@2x.png"
                />
              </div>
              <div className={styles.frameParent5}>
                <button className={styles.viewCollectionContainer}>
                  <div className={styles.viewCollection}>View Collection</div>
                </button>
                <div className={styles.loremmIpsum}>
                  Ante mus blandit sapien sociosqu per consequat ad. Aenean
                  habitasse interdum letius lobortis prim.
                </div>
                <div className={styles.fennelHoney}>Fennel Honey</div>
                <img
                  className={styles.maskGroupIcon6}
                  alt=""
                  src="/mask-group6@2x.png"
                />
              </div>
            </div>
            <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
            <img className={styles.vectorIcon4} alt="" src="/vector4.svg" />
          </div>
        </div>
        <div className={styles.front}>
          <img className={styles.rectangleIcon} alt="" src="/rectangle.svg" />
          <img className={styles.rectangleIcon1} alt="" src="/rectangle1.svg" />
          <div className={styles.tParent}>
            <div className={styles.t}>Welcome To BeeNation</div>
            <div className={styles.penatibusSemVitae}>
              Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend
              aptent dapibus metus maecenas consequat. Elementum interdum a
              semper. Netus nullam eros nisi volutpat nibh ex ultricies.
              Pharetra sagittis sit aliquet at. Magna nam platea justo.
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <img className={styles.frameItem} alt="" src="/rectangle-26.svg" />
            <div className={styles.frameChild} />
            <div className={styles.frameChild} />
          </div>
          <img className={styles.image21Icon} alt="" src="/image-21@2x.png" />
          <img className={styles.frontChild} alt="" src="/frame-75.svg" />
        </div>
        <div className={styles.headerHome}>
          <div className={styles.headerHomeChild} />
          <div className={styles.support} onClick={onSupportTextClick}>
            Support
          </div>
          <div
            className={styles.firstCustomerOffer}
          >{`FIRST CUSTOMER OFFER  20% ON SHIPPING FEES                     FEB. 25–28. `}</div>
          <div className={styles.navbar}>
            <div
              className={styles.loginButtonParent}
              onClick={onFrameContainer22Click}
            >
              <button
                className={styles.loginButton}
                autoFocus
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

export default HomeLanding;
