"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Building, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
// Custom Alert Component
const CustomAlert = ({ message, type, onClose }) => {
    return (
        <div
            className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg max-w-xs w-full ${
                type === "error" ? "bg-red-500 text-white" : "bg-green-500 text-white"
            }`}
        >
            <div className="flex justify-between items-center">
                <span>{message}</span>
                <button onClick={onClose} className="text-xl font-bold">
                    &times;
                </button>
            </div>
        </div>
    );
};

const Signup = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [alert, setAlert] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setAlert({
                message: "Passwords are not matching",
                type: "error",
            });
            setTimeout(() => setAlert(null), 3000); // 3-second timeout
            return;
        }

        try {
            const response = await fetch("https://caffetest-server.onrender.com/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                    confirmPassword: formData.confirmPassword,
                }),
            });

            const data = await response.json();
            console.log("Server response:", data);

            if (!response.ok) {
                setAlert({
                    message: data.message || "Signup failed",
                    type: "error",
                });
                setTimeout(() => setAlert(null), 3000); // 3-second timeout
            } else {
                setAlert({
                    message: "Signup successful! Welcome to CaffeTest!",
                    type: "success",
                });
                router.push("/login"); // Redirect to login page
                setTimeout(() => setAlert(null), 3000); // 3-second timeout
                setFormData({
                    name: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                });
            }
        } catch (error) {
            setAlert({
                message: "An error occurred. Please try again.",
                type: "error",
            });
            setTimeout(() => setAlert(null), 3000); // 3-second timeout
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="min-h-screen bg-gradient-to-tr from-blue-50 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4">
            {/* Display Custom Alert */}
            {alert && (
                <CustomAlert
                    message={alert.message}
                    type={alert.type}
                    onClose={() => setAlert(null)}
                />
            )}

            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl">
                {/* Left side - Signup Form */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-3xl shadow-2xl p-10 max-w-lg w-full space-y-6"
                >
                    <h2 className="text-3xl font-extrabold text-center text-blue-600 dark:text-white mb-4">
                        Create Account
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Google Sign In */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="button"
                            className="w-full flex items-center justify-center gap-3 bg-white dark:bg-gray-700 text-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 py-3 rounded-xl transition-all"
                        >
                            <FcGoogle size={24} />
                            Sign in with Google
                        </motion.button>

                        {/* OR Divider */}
                        <div className="flex items-center gap-4">
                            <div className="h-px flex-1 bg-gray-300 dark:bg-gray-600" />
                            <p className="text-gray-500 text-sm dark:text-gray-400">or</p>
                            <div className="h-px flex-1 bg-gray-300 dark:bg-gray-600" />
                        </div>

                        {/* Company Name */}
                        <div className="relative">
                            <Building className="absolute top-1/2 left-4 transform -translate-y-1/2 text-blue-500" size={22} />
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Company Name"
                                required
                                className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white bg-white/40"
                            />
                        </div>

                        {/* Company Email */}
                        <div className="relative">
                            <Mail className="absolute top-1/2 left-4 transform -translate-y-1/2 text-blue-500" size={22} />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Company Email ID"
                                required
                                className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white bg-white/40"
                            />
                        </div>

                        {/* Password */}
                        <div className="relative">
                            <Lock className="absolute top-1/2 left-4 transform -translate-y-1/2 text-blue-500" size={22} />
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Create Password"
                                required
                                className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white bg-white/40"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-blue-500"
                            >
                                {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                            </button>
                        </div>

                        {/* Confirm Password */}
                        <div className="relative">
                            <Lock className="absolute top-1/2 left-4 transform -translate-y-1/2 text-blue-500" size={22} />
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm Password"
                                required
                                className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white bg-white/40"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-blue-500"
                            >
                                {showConfirmPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                            </button>
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 rounded-xl transition-all"
                        >
                            Sign Up
                        </motion.button>
                    </form>
                </motion.div>

                {/* Right side Branding */}
                <div className="hidden md:block ml-10 max-w-md space-y-4">
                    <h3 className="text-4xl font-extrabold text-blue-600 dark:text-white mb-4">
                        Welcome to <span className="text-blue-800">CaffeTest</span>
                    </h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                        CaffeTest simplifies test case management, helping teams collaborate and optimize their QA process.
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                        Streamline your workflow, track progress, and get real-time insights—all in one platform.
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                        Empower your team to deliver high-quality software with ease.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
