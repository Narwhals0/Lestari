import React, { useState } from "react";

const Gifts = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedVoucher, setSelectedVoucher] = useState(null);

  return (
    <div className="min-h-screen max-w-xs mx-auto bg-[#f1f7ec] p-4 font-sans text-gray-800">
      {/* Gift Header */}
        <h1 className="font-extrabold text-xl text-center mb-3">Gift</h1>

      {/* Greeting Message */}
      <div className="text-left mb-6">
        <p className="text-md font-semibold">Hello Rian,</p>
        <p className="text-xs text-gray-600">Welcome to Gift Page!</p>
      </div>

      {/* Main Card */}
      <div className="bg-[#6fad2e] p-4 rounded-xl mb-6 text-white relative flex justify-between items-center">
        {/* Left section: Current Points */}
        <div className="flex flex-col items-start">
          <p className="text-xs font-medium">Current Points</p>
          <p className="text-3xl font-bold">521</p>
          <button className="mt-2 bg-white text-[#6fad2e] px-4 py-1 rounded-full text-xs font-semibold z-10">Your Reward</button>
        </div>

        {/* Right section: Current Level and Trophy */}
        <div className="flex flex-col items-center space-y-2">
          <div className="flex items-center space-x-1 bg-white rounded-full px-2 py-1 mb-2">
            <img src="src/assets/medallion.png" alt="Medal" className="h-4 w-4" />
            <span className="text-[#6fad2e] text-xs font-semibold">Level 4</span>
          </div>
          <img src="src/assets/trophy.png" alt="Trophy" className="h-14 w-14" />
        </div>
      </div>

     {/* Rewards Section */}
     <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Rewards</h2>
        </div>

        {/* Reward Cards Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Shopee Voucher Card */}
          <div className="bg-white rounded-lg p-4 shadow-sm text-center border">
            <img src="src/assets/shopee.png" alt="Shopee" className="mx-auto mb-2 h-10" />
            <p className="text-xs font-medium">Shopee Voucher 5k</p>
            <button
              className="mt-2 px-3 py-1 border border-green-600 text-green-600 rounded-full text-xs flex items-center justify-center gap-1 mx-auto"
              onClick={() => {
                setSelectedVoucher({
                  name: 'Shopee Voucher 5k',
                  image: 'src/assets/shopee.png',
                  price: 500,
                });
                setShowPopup(true);
              }}
            >
              <img src="src/assets/coins-solid.svg" alt="Coins" className="h-3 w-3" />
              <span>500</span>
            </button>
          </div>

          {/* Another Shopee Voucher Card */}
          <div className="bg-white rounded-lg p-4 shadow-sm text-center border">
            <img src="src/assets/shopee.png" alt="Shopee" className="mx-auto mb-2 h-10" />
            <p className="text-xs font-medium">Shopee Voucher 10k</p>
            <button
              className="mt-2 px-3 py-1 border border-green-600 text-green-600 rounded-full text-xs flex items-center justify-center gap-1 mx-auto"
              onClick={() => {
                setSelectedVoucher({
                  name: 'Shopee Voucher 10k',
                  image: 'src/assets/shopee.png',
                  price: 1000,
                });
                setShowPopup(true);
              }}
            >
              <img src="src/assets/coins-solid.svg" alt="Coins" className="h-3 w-3" />
              <span>1000</span>
            </button>
          </div>

          {/* Gopay Voucher Card */}
          <div className="bg-white rounded-lg p-4 shadow-sm text-center border">
            <img src="src/assets/gopay.png" alt="Gopay" className="mx-auto mb-2 h-10" />
            <p className="text-xs font-medium">Gopay Voucher 10k</p>
            <button
              className="mt-2 px-3 py-1 border border-green-600 text-green-600 rounded-full text-xs flex items-center justify-center gap-1 mx-auto"
              onClick={() => {
                setSelectedVoucher({
                  name: 'Gopay Voucher 10k',
                  image: 'src/assets/gopay.png',
                  price: 1000,
                });
                setShowPopup(true);
              }}
            >
              <img src="src/assets/coins-solid.svg" alt="Coins" className="h-3 w-3" />
              <span>1000</span>
            </button>
          </div>

          {/* Another Gopay Voucher Card */}
          <div className="bg-white rounded-lg p-4 shadow-sm text-center border">
            <img src="src/assets/gopay.png" alt="Gopay" className="mx-auto mb-2 h-10" />
            <p className="text-xs font-medium">Gopay Voucher 20k</p>
            <button
              className="mt-2 px-3 py-1 border border-green-600 text-green-600 rounded-full text-xs flex items-center justify-center gap-1 mx-auto"
              onClick={() => {
                setSelectedVoucher({
                  name: 'Gopay Voucher 20k',
                  image: 'src/assets/gopay.png',
                  price: 2000,
                });
                setShowPopup(true);
              }}
            >
              <img src="src/assets/coins-solid.svg" alt="Coins" className="h-3 w-3" />
              <span>2000</span>
            </button>
          </div>

          {/* Ovo Voucher Card */}
          <div className="bg-white rounded-lg p-4 shadow-sm text-center border">
            <img src="src/assets/ovo.png" alt="Ovo" className="mx-auto mb-2 h-10" />
            <p className="text-xs font-medium">Ovo Voucher 10k</p>
            <button
              className="mt-2 px-3 py-1 border border-green-600 text-green-600 rounded-full text-xs flex items-center justify-center gap-1 mx-auto"
              onClick={() => {
                setSelectedVoucher({
                  name: 'Ovo Voucher 10k',
                  image: 'src/assets/ovo.png',
                  price: 1000,
                });
                setShowPopup(true);
              }}
            >
              <img src="src/assets/coins-solid.svg" alt="Coins" className="h-3 w-3" />
              <span>1000</span>
            </button>
          </div>

          {/*Another Ovo Voucher Card */}
          <div className="bg-white rounded-lg p-4 shadow-sm text-center border">
            <img src="src/assets/ovo.png" alt="Ovo" className="mx-auto mb-2 h-10" />
            <p className="text-xs font-medium">Ovo Voucher 15k</p>
            <button
              className="mt-2 px-3 py-1 border border-green-600 text-green-600 rounded-full text-xs flex items-center justify-center gap-1 mx-auto"
              onClick={() => {
                setSelectedVoucher({
                  name: 'ovo Voucher 15k',
                  image: 'src/assets/ovo.png',
                  price: 1500,
                });
                setShowPopup(true);
              }}
            >
              <img src="src/assets/coins-solid.svg" alt="Coins" className="h-3 w-3" />
              <span>1500</span>
            </button>
          </div>

        </div>
      </section>

      {/* Popup */}
      {showPopup && selectedVoucher && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <div className="bg-white rounded-lg p-6 relative w-80">
            {/* Close Icon */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl"
              onClick={() => setShowPopup(false)}
            >
              &times;
            </button>
            {/* Popup Content */}
            <h2 className="text-lg font-semibold mb-2 text-center">Purchase This Item?</h2>
            <p className="text-xs text-gray-600 mb-4 text-center">
              Please check again before you buy because there's no refund for this purchase.
            </p>
            {/* Reward Details */}
            <div className="flex items-center mb-4">
              <img src={selectedVoucher.image} alt="Reward" className="h-16 w-16 rounded-md mr-4" />
              <p className="text-sm font-medium">{selectedVoucher.name}</p>
            </div>
            {/* Use Coins Button */}
            <button
              className="w-full bg-green-600 text-white px-4 py-2 rounded-full"
              onClick={() => {
                // Add your purchase logic here
                setShowPopup(false);
              }}
            >
              Use Coins {selectedVoucher.price}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gifts;
