import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SocialVisual, SocialWrap } from "./socialStyle";
import "swiper/css";
import "swiper/css/pagination";
import SocialList from "../../components/social/SocialList";
import { useEffect, useState } from "react";
import SocialMenu from "../../components/social/SocialMenu";
import { socialData } from "../../assets/api/socialdata";
const Social = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="inner">
            <SocialWrap>
                <SocialVisual>
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                        loop={true}
                    >
                        <SwiperSlide>
                            <img src="./images/social/visual1.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="./images/social/visual2.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="./images/social/visual3.png" alt="" />
                        </SwiperSlide>
                    </Swiper>
                </SocialVisual>
                <h2>개발자 인터뷰</h2>
                <SocialMenu />
                <SocialList />
            </SocialWrap>
        </div>
    );
};
export default Social;
