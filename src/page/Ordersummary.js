"use client";
import { Link, useNavigate } from "react-router-dom";
import useStore from "../store";
import { IoIosArrowRoundBack } from "react-icons/io";
const Ordersummary = () => {
    const { item, user } = useStore();
    console.log(item, user);
    const navigation = useNavigate();
    const percentageOff = ((item.mrp - item.mrp / 5) / item.mrp) * 100;
    return (
        <div style={{ height: "100%" }} data-reactroot="">
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n    .form-control {\n        margin-bottom: 16px;\n    }\n\n    .card {\n        --bs-border-color-translucent: rgba(0, 0, 0, 0) !important;\n    }\n\n    .card.max-height {\n        height: calc(100vh - 42px) !important;\n    }\n\n    .card-footer {\n        background: none !important;\n        border-top: none !important;\n        position: absolute;\n        bottom: 0;\n        width: 90%;\n        left: 5%;\n    }\n"
                }}
            />
            <div className="container-fluid p-3 header-container">
                <div className="row header">
                    <div className="col-1">
                        <div className="menu-icon" id="back_btn"  onClick={() => {
                                navigation("/");
                            }}>
                            <svg
                                width={19}
                                height={16}
                                viewBox="0 0 19 16"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.556 7.847H1M7.45 1L1 7.877l6.45 6.817"
                                    stroke="#000"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                />
                            </svg>{" "}
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="menu-logo">
                            <h4 className="mb-0 mt-1 ms-2">Order Summary</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="_1fhgRH max-height mb-70">
                <div className="card pt-1 mb-1">
                    <div className="progress-box mb-0">
                        <img
                            className="w-100"
                            src="https://festive99.shop/assets/website/images/theme/progress-indicator-summary.png"
                        />
                    </div>
                </div>
                <div className="card px-3 py-4 mb-2">
                    <h3>Delivered to:</h3>
                    <div className="address-div mt-2">
                        <h4 className="customer-name">{user.name}</h4>
                        <div className="mb-2 customer-address">{user.address}</div>
                        <div className="customer-contact">{user.mobile}</div>
                    </div>
                </div>
                <div className="card px-3 py-4 mb-2">
                    <ul className="list-group list-group-flush" id="deals">
                        <li className="list-group-item px-0" data-timer={2000}>
                            <div className="flex recommended-product">
                                <img
                                    src={item.img1}
                                    id="item_image"
                                />
                                <div className="description">
                                    <div className="product-title mb-1" id="product-title">
                                        {item.name}
                                    </div>
                                    <div className="product-detail mb-1" id="product-detail">
                                        {"(" + item?.name?.split("(")[1]?.slice(0, -1)}
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="flex recommended-product mt-3">
                                <div className="timer qty mx-4">Qty: 1</div>
                                <div className="description">
                                    <div className="price flex">
                                        <span className="discount" id="discount">
                                            {percentageOff.toFixed(2)}% Off
                                        </span>
                                        &nbsp;&nbsp;
                                        <span className="strike mrp" id="mrp">
                                            ₹ {item.mrp}
                                        </span>
                                        &nbsp;&nbsp;
                                        <span className="selling_price" id="selling_price">
                                            ₹ {Number(item.mrp / 5)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="card px-3 py-4 mb-2" id="price-detail">
                    <h3>Price Details</h3>
                    <div className="price-detail-div mt-2">
                        <div className="product-price-list my-3">
                            <span className="title">Price (1 item)</span>
                            <span className="data mrp me-0 td-none">₹ {item.mrp}</span>
                        </div>
                        <div className="product-price-list my-3">
                            <span className="title">Discount</span>
                            <span className="data discount-amt text-success">-₹ {Number(item.mrp - item.mrp / 5) || 0}</span>
                        </div>
                        <div className="product-price-list my-3">
                            <span className="title">Delivery Charges</span>
                            <span className="data text-success">FREE Delivery </span>
                        </div>
                        <div className="product-price-list my-3 pt-3 total">
                            <span className="title">Total Amount </span>
                            <span className="data selling_price">   ₹ {Number(item.mrp / 5) || 0}</span>
                        </div>
                        <div className="product-price-list mt-3 pt-3 saved-div">
                            <span className="text-success">
                                You will save <span className="discount-amt">- ₹ {Number(item.mrp - item.mrp / 5 + 1) || 0}</span> on this
                                order
                            </span>
                        </div>
                    </div>
                </div>
                <div className="sefty-banner">
                    <img
                        className="sefty-img"
                        src="https://rukminim1.flixcart.com/www/60/70/promos/13/02/2019/9b179a8a-a0e2-497b-bd44-20aa733dc0ec.png?q=90"
                        loading="lazy"
                        alt=""
                    />
                    <div dir="auto" className="sefty-txt">
                        Safe and secure payments. Easy returns. 100% Authentic products.
                    </div>
                </div>
                <div className="my-5" style={{ padding: "30px" }}></div>
                <div className="button-container flex p-3 bg-white">
                    <div className="col-6 footer-price">
                        <span className="strike mrp ms-0 mb-1" id="mrp">
                            - ₹ {Number(item.mrp - item.mrp / 5 + 1) || 0}
                        </span>
                        <span className="selling_price" id="selling_price">
                            ₹ {Number(item.mrp / 5) || 0}
                        </span>
                    </div>
                    <button
                        className="buynow-button product-page-buy col-6 btn-continue"
                        onClick={() => {
                            navigation('/payment')
                        }}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Ordersummary;
