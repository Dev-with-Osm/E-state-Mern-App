import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import SwiperCore from "swiper";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import ListingItem from "../components/ListingItem";

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  console.log(offerListings);
  SwiperCore.use([Navigation, Autoplay, Pagination]); // Add necessary modules here

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=3");
        const data = await res.json();
        setOfferListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchSaleListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=sale&limit=3");
        const data = await res.json();
        setSaleListings(data);
        fetchRentListing();
      } catch (error) {}
    };
    const fetchRentListing = async () => {
      try {
        const res = await fetch("/api/listing/get?type=rent&limit=3");
        const data = await res.json();
        setRentListings(data);
      } catch (error) {}
    };
    fetchOfferListings();
  }, []);

  return (
    <div className=" sm:justify-center">
      {/* top head */}
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto justify-center">
        <h1 className="text-slate-600  font-bold text-3xl lg:text-6xl text-center">
          Find your next{" "}
          <span className="font-bold text-slate-400 stroke-2 ">perfect</span>
          <br />
          place with easly
        </h1>
        <div className="text-gray-400 text-xs sm:text-sm text-center">
          Osm Estate is the best place to find your next perfect place to live.
          <br />
          we have a wide range of properties for you to choose from.
        </div>
        <div className="flex justify-center">
          <Link
            className="  text-center border-[3px] border-slate-600 font-semibold py-2
             px-5 rounded-full hover:bg-slate-600 hover:text-white 
            transition-all duration-500 ease-in-out"
            to={"/search"}
          >
            Let's get started
          </Link>
        </div>
      </div>

      {/* swiper */}
      <div className="max-w-6xl mx-auto sm:rounded-lg overflow-hidden">
        <Swiper
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
        >
          {offerListings &&
            offerListings.length > 0 &&
            offerListings.map((listing) => (
              <SwiperSlide key={listing._id}>
                <div
                  style={{
                    background: `url(${listing.imageUrls[0]})  no-repeat center`,
                    backgroundSize: "cover",
                  }}
                  className="h-[250px] sm:h-[500px]"
                ></div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      {/* bottom */}
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10 ">
        {offerListings && offerListings.length > 0 && (
          <div className="">
            <div className="flex justify-between p-2 sm:px-14 items-center my-3">
              <h2 className="text-2xl font-bold text-slate-600">
                Recent offers
              </h2>
              <Link
                className="bg-slate-500 p-2 rounded-lg text-white hover:opacity-85 text-sm font-semibold px-3 "
                to={"/search?offer=true"}
              >
                Show more
              </Link>
            </div>
            <div className="flex gap-4 flex-wrap justify-center">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className="">
            <div className="flex justify-between p-2 sm:px-14 items-center my-3">
              <h2 className="text-2xl font-bold text-slate-600">
                Recent places for Sale
              </h2>
              <Link
                className="bg-slate-500 p-2 rounded-lg text-white hover:opacity-85 text-sm font-semibold px-3 "
                to={"/search?type=sale"}
              >
                Show more
              </Link>
            </div>
            <div className="flex gap-4 flex-wrap justify-center">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className="">
            <div className="flex justify-between p-2 sm:px-14 items-center my-3">
              <h2 className="text-2xl font-bold text-slate-600">
                Recent places for Rent
              </h2>
              <Link
                className="bg-slate-500 p-2 rounded-lg text-white hover:opacity-85 text-sm font-semibold px-3 "
                to={"/search?type=rent"}
              >
                Show more
              </Link>
            </div>
            <div className="flex gap-4 flex-wrap justify-center">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
