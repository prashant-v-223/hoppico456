import React, { useEffect, useMemo, useState } from 'react'
import data from "../data/index.json";
import { useNavigate, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import useStore from "../store";

function Productdetails() {
    const params = useParams();
    const navigation = useNavigate();
    const { setItem } = useStore();
    console.log(params.id);
    let data1 = data;
    const initialTime = 900; // 10 minutes in seconds
    const [time, setTime] = useState(initialTime);
    useEffect(() => {
        const timer = setInterval(() => {
            if (time <= 0) {
                clearInterval(timer);
            } else {
                setTime((prevTime) => prevTime - 1);
            }
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [time]);

    const [currentIndex, setCurrentIndex] = useState(0);
    let item = useMemo(
        () =>
            data1?.data?.find((item) => {
                return item.md5_id === params.id;
            }),
        [params.id]
    );
    const uniqueColorsObject = new Set();
    item?.verients.forEach((item) => {
        const { id, color, img1, storage } = item;
        if (!uniqueColorsObject[color]) {
            uniqueColorsObject[color] = { id, images: [img1], storage: [storage] };
        } else {
            uniqueColorsObject[color].images.push(img1);
            uniqueColorsObject[color].storage.push(storage);
        }
    });

    const uniqueColorsArray = Object.values(uniqueColorsObject);
    const [activeid, setactiveid] = useState(
        uniqueColorsArray && uniqueColorsArray[0]?.id
    );
    let img = uniqueColorsArray.find((e) => {
        return e.id == activeid;
    });
    let data123 = new Set(img?.storage);
    const uniqueStorageArray = [...data123]; //
    console.log(uniqueStorageArray);
    console.log(data123);

    const [activetorage, setactivetorage] = useState(
        uniqueColorsArray[0].storage[0]
    );
    const handleBuy = () => {
        setItem(item);
        navigation("/address");
        // router.push("/purchase");
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const percentageOff = ((item.mrp - item.mrp / 5) / item.mrp) * 100;
    return (
        <div id="container" style={{ overflow: "hidden" }}>
            <div style={{ height: "100%" }} data-reactroot="">
                <div
                    className=" p-2 header-container"
                    style={{ backgroundColor: "#2074ba" }}
                >
                    <div className="row header">
                        <div className="col-2">
                            <div className="menu-icon text-center" id="back_btn" onClick={() => {
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
                                        stroke="#FFF"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                    />
                                </svg>{" "}
                            </div>
                        </div>
                        <div className="col-4 p-0">
                            <div className="menu-logo">
                                <img
                                    alt="menu"
                                    src="https://firebasestorage.googleapis.com/v0/b/weqw-f4d84.appspot.com/o/b352b5bf-e370-4674-b49b-69f16455a71c.jfif?alt=media&token=2c35863e-4262-41d1-97b8-500c4d2c992f&_gl=1*1raxfqv*_ga*MTAzMDY1MDE4Mi4xNjg0MTQ2MjQw*_ga_CW55HF8NVT*MTY5NzYxNzY4NS40LjEuMTY5NzYxNzg0OC42MC4wLjA."
                                    className='img-fluid'
                                />
                            </div>
                        </div>
                        <div className="col-3"></div>
                        <div className="col-1">
                            <div className="menu-icon">
                                <svg
                                    width={16}
                                    height={16}
                                    viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g fill="#FFF" fillRule="evenodd">
                                        <path d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203" />
                                        <path d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467" />
                                    </g>
                                </svg>{" "}
                            </div>
                        </div>
                        <div className="col-1">
                            <div className="menu-icon">
                                <svg
                                    width={16}
                                    height={16}
                                    viewBox="0 0 15 15"
                                    xmlns="external452e452e452e452e.html?link=http://www.w3.org/2000/svg"
                                >
                                    <g fill="#fff" fillRule="evenodd">
                                        <path d="m5.189 13.04c0 .996-.791 1.804-1.767 1.804-.976 0-1.767-.808-1.767-1.804 0-.996.791-1.804 1.767-1.804.976 0 1.767.808 1.767 1.804" />
                                        <path d="m14.912 2.259h-14.298l2.247 6.917c.042.129.16.216.293.216h8.06c-.064.69-.629 1.841-1.702 1.841h-6.04l1.072 1.991h5.611c1.881 0 2.938-2.278 3.657-4.719.888-3.01 1.219-6.245 1.106-6.245" />
                                        <path d="m.615 2.259l-.592-1.828c-.08-.207.069-.431.287-.431h1.482c.126 0 .24.079.287.198l.682 2.061c0 0-.63 1.642-1.942.066" />
                                        <path d="m2.262.756c0 0 .498 1.503 2.234 1.503l-1.736.749-1.104-.749.607-1.503" />
                                        <path d="m13.424 13.325c0 .837-.664 1.516-1.484 1.516-.82 0-1.484-.679-1.484-1.516 0-.837.664-1.516 1.484-1.516.82 0 1.484.679 1.484 1.516" />
                                    </g>
                                </svg>{" "}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="_1fhgRH mb-5">
                    <div className="container p-1 card">
                        <div className="container-fluid px-0 product-slider">
                            <div className="love-icon" />
                            <div className="share-icon" />
                            <div id="sliderX" className="carousel slide" data-ride="carousel">
                                {/* <ol className="carousel-indicators">
                                    <li
                                        data-bs-target="#sliderX"
                                        data-bs-slide-to={0}
                                        className="active"
                                    />
                                </ol> */}
                                <div className="carousel-inner">
                                    <Slider {...settings}>

                                        {img.images.map((e, i) => {
                                            return (
                                                <div className="embla__slide">
                                                    <img
                                                        alt="hero"
                                                        src={e}
                                                        loading="lazy"
                                                        style={{ maxWidth: 700, margin: "auto" }}
                                                    />
                                                </div>
                                            );
                                        })}
                                    </Slider>
                                    {/* <div className="carousel-item active">
                                        <img
                                            className="d-block img-fluid m-auto"
                                            style={{ height: 400 }}
                                            src="https://cdn.shopify.com/s/files/1/0805/0475/0393/products/71yzJoE7WlL._SL1500.jpg?v=1690578986"
                                        />
                                    </div> */}
                                </div>
                            </div>
                            <div className="color-div">
                                <h4>Select Color</h4>
                                <div className="color-list p-2">
                                    {uniqueColorsArray?.map((e, i) => {
                                        return (
                                            <div
                                                className={`color-item p-2 me-2 Deep_Purple   ${activeid === e.id && "active"
                                                    }`}
                                                onClick={() => {
                                                    setactiveid(e.id);
                                                }}
                                            >
                                                <img
                                                    src={e.images[0]}
                                                    alt="img0"
                                                />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="storage-div mt-3">
                                <h4>Select Storage</h4>
                                {uniqueStorageArray[0] !== "" && (
                                    <div className="">
                                        <div className="color-list py-2">
                                            <div className="storage-list py-2">
                                                {uniqueStorageArray?.map((e, i) => {
                                                    console.log(uniqueStorageArray);
                                                    console.log(e);

                                                    if (e !== "") {
                                                        return (
                                                            <div
                                                                className={`storage-item p-3 me-2  ${activetorage === e && "active"
                                                                    }`}
                                                                onClick={() => {
                                                                    setactivetorage(e);
                                                                }}
                                                            >
                                                                <span className="storage-name">
                                                                    {e}
                                                                </span>
                                                            </div>
                                                        );
                                                    }
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="size-div mt-3" style={{ display: "none" }}>
                                <h4>Select Size</h4>
                                <div className="size-list p-2">
                                    {/*<span class="size-name">M</span>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid p-3 mt-1 card">
                        <div className="product-title">
                            {item?.name}
                        </div>
                        <div className="product-price d-flex my-2">
                            <span className="discount">{percentageOff.toFixed(2)}% off</span>
                            <span className="mrp">₹{item?.mrp}</span>
                            <span className="price"> ₹{item?.mrp / 5}</span>
                        </div>
                    </div>
                    <div className="container-fluid p-3 offerend-container  my-1 card">
                        <h4 className="m-0">
                            {" "}
                            Offer ends in{" "}
                            <span className="offer-timer" id="offerend-time">
                                {Math.floor(time / 60)}min {time % 60}sec
                            </span>
                        </h4>
                    </div>
                    <div className="container-fluid p-3 mb-1  d-flex">
                        <div style={{ width: "40%" }} className=''>
                            <img
                                className="my-2 d-block m-auto"
                                src="https://cdn3d.iconscout.com/3d/premium/thumb/pay-cash-5947822-4923143.png?f=webp"
                                alt="pay-latter"
                                style={{ width: '75%' }}
                            />
                        </div>
                        <div style={{ width: "60%", display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column' }}>
                            <p className='m-0' style={{ fontSize: "12px" }}>
                                Credit Up to ₹1 Lakh <br />
                                Shop Now & Pay Next Month or in EMIs
                            </p>
                            <a className='text-primary' style={{ fontSize: "12px" }}>
                                Activate now
                            </a>
                        </div>
                    </div>
                    <div className="container-fluid px-2 py-3 my-1 d-flex feature-container product-extra card">
                        <div className="col-4 featured-item d-flex align-items-center flex-column bd-highlight px-1">
                            <img
                                className="featured-img mb-3"
                                src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%3E%3Cg%20data-name%3D%2211%207%20Days%22%3E%3Cpath%20fill%3D%22%23f7f5fb%22%20d%3D%22M37.87%20195h436.26v257.25A48.75%2048.75%200%200%201%20425.38%20501H86.62a48.75%2048.75%200%200%201-48.75-48.75V195Z%22%2F%3E%3Cpath%20fill%3D%22%23f5d367%22%20d%3D%22M474.13%20121.12V195H37.87v-73.88a52.24%2052.24%200%200%201%2052.24-52.25h34.08v16.52a14.5%2014.5%200%200%200%2014.5%2014.5h50.6a14.5%2014.5%200%200%200%2014.5-14.5V68.87H308.2v16.52a14.5%2014.5%200%200%200%2014.5%2014.5h50.61a14.5%2014.5%200%200%200%2014.49-14.5V68.87h34.08a52.25%2052.25%200%200%201%2052.25%2052.25Z%22%2F%3E%3Cpath%20fill%3D%22%23cfdce5%22%20d%3D%22M143.69%2011h40.6a19.5%2019.5%200%200%201%2019.5%2019.5v54.89a14.5%2014.5%200%200%201-14.5%2014.5h-50.6a14.5%2014.5%200%200%201-14.5-14.5V30.5a19.5%2019.5%200%200%201%2019.5-19.5zm184.01%200h40.6a19.5%2019.5%200%200%201%2019.5%2019.5v54.89a14.5%2014.5%200%200%201-14.5%2014.5h-50.6a14.5%2014.5%200%200%201-14.5-14.5V30.5A19.5%2019.5%200%200%201%20327.7%2011z%22%2F%3E%3Cpath%20fill%3D%22%23e4e3e8%22%20d%3D%22M249.32%20501H86.62a48.75%2048.75%200%200%201-48.75-48.76V257.66A501.85%20501.85%200%200%200%20249.32%20501Z%22%2F%3E%3Cpath%20d%3D%22M425.37%20507H86.62a54.81%2054.81%200%200%201-54.75-54.76v-149a6%206%200%200%201%2012%200v149A42.8%2042.8%200%200%200%2086.62%20495h338.75a42.81%2042.81%200%200%200%2042.76-42.76V201H43.87v55.48a6%206%200%200%201-12%200V195a6%206%200%200%201%206-6h436.26a6%206%200%200%201%206%206v257.24A54.82%2054.82%200%200%201%20425.37%20507Z%22%2F%3E%3Cpath%20d%3D%22M37.87%20290.37a6%206%200%200%201-6-6v-9a6%206%200%200%201%2012%200v9a6%206%200%200%201-6%206zM474.13%20201H37.87a6%206%200%200%201-6-6v-73.88a58.31%2058.31%200%200%201%2058.24-58.25h34.08a6%206%200%200%201%206%206v16.52a8.51%208.51%200%200%200%208.5%208.5h50.6a8.51%208.51%200%200%200%208.5-8.5V68.87a6%206%200%200%201%206-6H308.2a6%206%200%200%201%206%206v16.52a8.51%208.51%200%200%200%208.5%208.5h50.61a8.5%208.5%200%200%200%208.49-8.5V68.87a6%206%200%200%201%206-6h34.08a58.31%2058.31%200%200%201%2058.25%2058.25V195a6%206%200%200%201-6%206zM43.87%20189h424.26v-67.88a46.31%2046.31%200%200%200-46.25-46.25H393.8v10.52a20.51%2020.51%200%200%201-20.49%2020.5H322.7a20.52%2020.52%200%200%201-20.5-20.5V74.87h-92.41v10.52a20.52%2020.52%200%200%201-20.5%2020.5h-50.6a20.52%2020.52%200%200%201-20.5-20.5V74.87H90.11a46.3%2046.3%200%200%200-46.24%2046.25z%22%2F%3E%3Cpath%20d%3D%22M189.29%20105.89h-50.6a20.52%2020.52%200%200%201-20.5-20.5V30.5A25.53%2025.53%200%200%201%20143.69%205h40.6a25.53%2025.53%200%200%201%2025.5%2025.5v54.89a20.52%2020.52%200%200%201-20.5%2020.5zM143.69%2017a13.51%2013.51%200%200%200-13.5%2013.5v54.89a8.51%208.51%200%200%200%208.5%208.5h50.6a8.51%208.51%200%200%200%208.5-8.5V30.5a13.51%2013.51%200%200%200-13.5-13.5zm229.62%2088.89H322.7a20.53%2020.53%200%200%201-20.5-20.5V30.5A25.53%2025.53%200%200%201%20327.7%205h40.61a25.53%2025.53%200%200%201%2025.5%2025.5v54.89a20.53%2020.53%200%200%201-20.5%2020.5zM327.7%2017a13.51%2013.51%200%200%200-13.5%2013.5v54.89a8.51%208.51%200%200%200%208.5%208.5h50.61a8.51%208.51%200%200%200%208.5-8.5V30.5a13.51%2013.51%200%200%200-13.5-13.5zm-55.42%20442a6%206%200%200%201-5.64-3.95l-10.36-28.48h-31.89l-12%2028.74a6%206%200%200%201-11.18-4.37l32.7-89.94a6%206%200%200%201%2011.28%200l32.73%2089.91a6%206%200%200%201-3.59%207.7%206.15%206.15%200%200%201-2.05.39zm-45.09-44.43h24.72l-12.36-33.95zM149.46%20459h-2.83a12.3%2012.3%200%200%201-12.28-12.28v-77.37a12.29%2012.29%200%200%201%2012.28-12.27h2.83a51%2051%200%200%201%200%20101.92zm-2.83-89.92a.28.28%200%200%200-.28.27v77.37a.29.29%200%200%200%20.28.28h2.83a39%2039%200%200%200%200-77.92zM349.15%20459c-.6%200-1.21%200-1.82-.06a28.43%2028.43%200%200%201-23.15-14.64%206%206%200%200%201%2010.49-5.83%2016.52%2016.52%200%201%200%2017.12-24.3%208.33%208.33%200%200%201-1.58%200%2012.26%2012.26%200%200%201-1.64-.26%2028.52%2028.52%200%201%201%2024.07-48%206%206%200%200%201-8.7%208.28A16.52%2016.52%200%201%200%20350%20402h.18c.39%200%201%20.05%202%20.11a1.84%201.84%200%200%201%20.33%200%2028.52%2028.52%200%200%201-3.36%2056.89zm-57.82%200a6%206%200%200%201-6-6v-50.74a6%206%200%200%201%2012%200V453a6%206%200%200%201-6%206z%22%2F%3E%3Cpath%20d%3D%22M291.33%20408.26a6%206%200%200%201-5.15-2.91l-23.52-39.18A6%206%200%201%201%20273%20360l23.52%2039.18a6%206%200%200%201-5.14%209.09Z%22%2F%3E%3Cpath%20d%3D%22M291.32%20408.26a6%206%200%200%201-5.14-9.09L309.71%20360a6%206%200%201%201%2010.29%206.17l-23.53%2039.18a6%206%200%200%201-5.15%202.91zM256%20340.46a6%206%200%200%201-5.62-8.11l31.82-84.89h-42.65a6%206%200%200%201%200-12h51.31a6%206%200%200%201%205.61%208.11l-34.85%2093a6%206%200%200%201-5.62%203.89z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                            />
                            <span className="feature-title"> 7 days Replacement </span>
                        </div>
                        <div className="col-4 featured-item d-flex align-items-center flex-column bd-highlight px-1">
                            <img
                                className="featured-img mb-3"
                                src="https://d3sxshmncs10te.cloudfront.net/icon/premium/png-128/7578782.png?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkM3N4c2htbmNzMTB0ZS5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTY5ODAxOTIwMCwicSI6bnVsbCwiaWF0IjoxNjk3ODIwNjY2fQ__.70c03fe3ea51996ad1420c2fe5c7f796930acfee6848f6b707ef04b20431e3aa"
                            />
                            <span className="feature-title"> No Cash On Delivery </span>
                        </div>
                        <div className="col-4 featured-item d-flex align-items-center flex-column bd-highlight px-1">
                            <img
                                className="featured-img mb-3 mt-1"
                                src="https://cdn3d.iconscout.com/3d/premium/thumb/lightning-3316342-2754155.png?f=webp"
                            />
                            <span className="feature-title"> Plus (H-Assured) </span>
                        </div>
                    </div>
                    <div className="container-fluid product-detail px-0 py-3 mb-4 card">
                        <h3 className="txt-product-detail">Product Detail</h3>
                        <div className="product-details">
                            {item && (
                                <div dangerouslySetInnerHTML={{ __html: item.features }} />
                            )}
                        </div>
                    </div>
                </div>
                <div className="button-container flex">
                    <button
                        className="buynow-button buynow-button-white product-page-buy"
                        onclick="buyNow();"
                    >
                        Add to Cart
                    </button>
                    <button className="buynow-button product-page-buy" onClick={handleBuy} >
                        Buy Now
                    </button>
                </div>
            </div>
            <footer className="seofooter" id="seofooter"></footer>
        </div>
    )
}

export default Productdetails
