"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Smartphone, User } from "lucide-react";
import { FaGooglePay, FaCreditCard, FaMoneyCheckAlt } from "react-icons/fa";
import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const SubscribePage = () => {
  const [selectedMethod, setSelectedMethod] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  return (
    <div className="scroll-container min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 via-white to-purple-100 p-4 overflow-hidden">
      <div className="flex justify-between items-start w-full max-w-7xl">
        {/* Subscription Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-sm space-y-2"
        >
          <div className="bg-white/10 backdrop-blur-2xl p-6 rounded-3xl shadow-2xl text-center border border-white/20">
            <h3 className="text-2xl font-semibold text-purple-600 mb-4">1 Year Subscription</h3>
            <p className="text-xl text-teal-300 mb-4">₹999</p>
            <p className="text-sm text-gray-300 mb-6">Get access to all features for 1 year.</p>
            <button
              onClick={() => setShowSuccess(true)}
              className="w-full py-2 bg-gradient-to-r from-teal-400 to-teal-600 text-white font-semibold rounded-lg"
            >
              Subscribe Now
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-2xl p-6 rounded-3xl shadow-2xl text-center border border-white/20">
            <h3 className="text-2xl font-semibold text-purple-600 mb-4">10 Year Subscription</h3>
            <p className="text-xl text-teal-300 mb-4">₹4999</p>
            <p className="text-sm text-gray-300 mb-6">Get access to all features for 10 years.</p>
            <button
              onClick={() => setShowSuccess(true)}
              className="w-full py-2 bg-gradient-to-r from-teal-400 to-teal-600 text-white font-semibold rounded-lg"
            >
              Subscribe Now
            </button>
          </div>
          <div className="bg-white/10 backdrop-blur-2xl p-6 rounded-3xl shadow-2xl text-center border border-white/20">
            <h3 className="text-2xl font-semibold text-purple-600 mb-4">20 Year Subscription</h3>
            <p className="text-xl text-teal-300 mb-4">₹6999</p>
            <p className="text-sm text-gray-300 mb-6">Get access to all features for 20 years.</p>
            <button
              onClick={() => setShowSuccess(true)}
              className="w-full py-2 bg-gradient-to-r from-teal-400 to-teal-600 text-white font-semibold rounded-lg"
            >
              Subscribe Now
            </button>
          </div>
        </motion.div>

        {/* Payment Form */}
        <AnimatePresence>
          {showSuccess ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-2xl p-10 rounded-3xl shadow-2xl flex flex-col items-center space-y-6 max-w-2xl w-full border border-white/20"
            >
              <h2 className="text-4xl font-bold text-green-400">Payment Successful!</h2>
              <p className="text-gray-300">Thank you for your payment 🎉</p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl rounded-3xl p-8 max-w-2xl w-full text-white"
            >
              <h2 className="text-3xl font-extrabold text-center mb-8 tracking-wide text-blue-400">
                Payment Details
              </h2>

              <form onSubmit={handlePayment} className="space-y-6">
                {/* Full Name */}
                <div className="flex items-center gap-3">
                  <User className="text-teal-300" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-transparent border-b border-gray-400 focus:border-teal-400 outline-none py-2 placeholder-gray-400"
                    required
                  />
                </div>

                {/* Email Address */}
                <div className="flex items-center gap-3">
                  <Mail className="text-pink-300" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-transparent border-b border-gray-400 focus:border-pink-400 outline-none py-2 placeholder-gray-400"
                    required
                  />
                </div>

                {/* Mobile Number */}
                <div className="flex items-center gap-3">
                  <Smartphone className="text-yellow-300" />
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    className="w-full bg-transparent border-b border-gray-400 focus:border-yellow-400 outline-none py-2 placeholder-gray-400"
                    required
                  />
                </div>

                {/* Payment Methods */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">
                    Choose Payment Method
                  </h3>
                  <div className="flex flex-col gap-4">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedMethod(selectedMethod === "upi" ? "" : "upi");
                        setShowQR(false);
                      }}
                      className={`flex items-center gap-4 p-3 rounded-lg transition-all duration-300 ${
                        selectedMethod === "upi"
                          ? "bg-gradient-to-r from-cyan-400 to-blue-500 shadow-md"
                          : "bg-white/5 hover:bg-white/10"
                      }`}
                    >
                      <FaGooglePay className="text-4xl text-cyan-600" />
                      <span className="font-medium text-purple-600">Google Pay / UPI</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setSelectedMethod(selectedMethod === "card" ? "" : "card");
                        setShowQR(false);
                      }}
                      className={`flex items-center gap-4 p-3 rounded-lg transition-all duration-300 ${
                        selectedMethod === "card"
                          ? "bg-gradient-to-r from-green-400 to-green-600 shadow-md"
                          : "bg-white/5 hover:bg-white/10"
                      }`}
                    >
                      <FaCreditCard className="text-4xl text-cyan-600 text-green-300" />
                      <span className="font-medium text-purple-600">Credit / Debit Card</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setSelectedMethod(selectedMethod === "netbanking" ? "" : "netbanking");
                        setShowQR(false);
                      }}
                      className={`flex items-center gap-4 p-3 rounded-lg transition-all duration-300 ${
                        selectedMethod === "netbanking"
                          ? "bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-md"
                          : "bg-white/5 hover:bg-white/10"
                      }`}
                    >
                      <FaMoneyCheckAlt className="text-4xl text-cyan-600 text-yellow-300" />
                      <span className="font-medium text-purple-600">Net Banking</span>
                    </button>
                  </div>
                </div>

                {/* Expanding Payment Details */}
                <AnimatePresence>
                  {selectedMethod && (
                    <motion.div
                      initial={{ opacity: 0, scaleY: 0 }}
                      animate={{ opacity: 1, scaleY: 1 }}
                      exit={{ opacity: 0, scaleY: 0 }}
                      transition={{
                        duration: 0.6,
                        type: "spring",
                        stiffness: 200,
                        damping: 30,
                      }}
                      style={{ transformOrigin: "top" }}
                      className="overflow-hidden space-y-4 pt-4"
                    >
                      {selectedMethod === "upi" && (
                        <div>
                          <input
                            type="text"
                            placeholder="Enter UPI ID"
                            className="w-full bg-transparent border-b border-gray-400 focus:border-cyan-400 outline-none py-2 placeholder-gray-400"
                          />
                          <button
                            type="button"
                            onClick={() => setShowQR(true)}
                            className="text-cyan-300 underline text-sm"
                          >
                            Show QR Code
                          </button>
                          {showQR && (
                            <div className="flex justify-center pt-4">
                              <QRCodeCanvas
                                value="upi://pay?pa=yourupiid@okaxis&pn=YourName"
                                size={150}
                                fgColor="#00FFFF"
                                bgColor="transparent"
                                includeMargin
                              />
                            </div>
                          )}
                        </div>
                      )}

                      {selectedMethod === "card" && (
                        <div>
                          <input
                            type="text"
                            placeholder="Card Number"
                            className="w-full bg-transparent border-b border-gray-400 focus:border-green-400 outline-none py-2 placeholder-gray-400"
                            required
                          />
                          <div className="flex gap-4">
                            <input
                              type="text"
                              placeholder="Expiry (MM/YY)"
                              className="w-full bg-transparent border-b border-gray-400 focus:border-green-400 outline-none py-2 placeholder-gray-400"
                              required
                            />
                            <input
                              type="text"
                              placeholder="CVV"
                              className="w-full bg-transparent border-b border-gray-400 focus:border-green-400 outline-none py-2 placeholder-gray-400"
                              required
                            />
                          </div>
                        </div>
                      )}

                      {selectedMethod === "netbanking" && (
                        <div>
                          <select
                            className="w-full bg-transparent border-b border-gray-400 focus:border-yellow-400 outline-none py-2 text-gray-400"
                            required
                          >
                            <option value="">Select Bank</option>
                            <option value="sbi">State Bank of India</option>
                            <option value="hdfc">HDFC Bank</option>
                            <option value="icici">ICICI Bank</option>
                            <option value="axis">Axis Bank</option>
                          </select>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-teal-400 to-teal-600 text-white font-semibold rounded-lg"
                  >
                    Proceed to Payment
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SubscribePage;
const metadata = {
  title: "Subscribe",
  description: "Subscribe to our service",
}