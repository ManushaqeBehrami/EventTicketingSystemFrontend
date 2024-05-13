import React from "react";

const OrderCard = () => {
  return (
    <div className="bg-black border border-purple-600 rounded-lg p-4 mb-4 text-white">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Thursday, November 28</h2>
        <h3 className="text-base font-titles text-[#e70ce3aa]">Exploring & Healing Indigenous Intergenerational Trauma</h3>
      </div>
      <div>
        <h4 className="text-base font-semibold mb-2">Order Summary</h4>
        <div className="flex justify-between mb-1">
          <p>1 x General Admission</p>
          <p>$7.00</p>
        </div>
        <div className="flex justify-between mb-1">
          <p>Subtotal</p>
          <p>$7.00</p>
        </div>
        <div className="flex justify-between mb-1">
          <p>Fees</p>
          <p>$1.38</p>
        </div>
        <div className="flex justify-between mb-1">
          <p>Delivery</p>
          <p>1 x eTicket</p>
        </div>
        <div className="flex justify-between mt-2">
          <p className="font-semibold">Total</p>
          <p className="font-semibold">$8.38</p>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
