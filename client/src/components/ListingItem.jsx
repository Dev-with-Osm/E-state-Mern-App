import React from "react";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { FaBath, FaBed, FaChair, FaParking } from "react-icons/fa";

export default function ListingItem({ listing }) {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow  overflow-hidden rounded-lg w-full sm:w-[330px]">
      <Link to={`/listing/${listing._id}`}>
        <img
          src={listing.imageUrls[0]}
          alt="listing cover"
          className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300"
        />
      </Link>
      <div className="p-3 flex flex-col gap-2 w-full">
        <p className="text-lg font-semibold text-slate-700 truncate ">
          {listing.name}
        </p>
        <div className="flex items-center  gap-1">
          <MdLocationOn className="h-4 w-4 text-green-800" />
          <p className="text-sm text-gray-500 font-medium w-full">
            {listing.address}
          </p>
        </div>

        <p className="text-sm text-gray-500 line-clamp-2">
          {listing.description}
        </p>
        <p className="text-slate-500 mt-2 font-semibold">
          $
          {listing.offer
            ? listing.discountPrice.toLocaleString("en-US")
            : listing.regularPrice.toLocaleString("en-US")}
          {listing.type === "rent" && " / month"}
        </p>
        <ul className="text-green-900 font-semibold text-sm mt-2 flex gap-4 items-center sm:gap-3 flex-wrap ">
          <li className="flex text-xs items-center gap-1 whitespace-nowrap ">
            <FaBed className="text-lg" />
            {listing.bedrooms > 1
              ? `${listing.bedrooms} beds`
              : `${listing.bedrooms} bed`}
          </li>

          <li className="flex text-xs items-center gap-1 whitespace-nowrap ">
            <FaBath className="text-lg" />
            {listing.bathrooms > 1
              ? `${listing.bathrooms} baths`
              : `${listing.bathrooms} bath`}
          </li>
          <li className="flex text-xs items-center gap-1 whitespace-nowrap ">
            <FaParking className="text-lg" />
            {listing.parking ? "Parking spot" : "No Parking"}
          </li>
        </ul>
      </div>
    </div>
  );
}
