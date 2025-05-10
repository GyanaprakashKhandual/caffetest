"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Building, Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";

// ✅ Custom Alert Component
const Alert = ({ message, type, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={`fixed top-6 right-6 px-6 py-3 rounded-xl shadow-lg z-50 transition-all
            ${type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
            {message}
        </div>
    );
};

const Login = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        companyName: ""
    });

    const [showPassword, setShowPassword] = useState(false);
    const [alert, setAlert] = useState({ message: "", type: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // You should replace the following URL with your actual login endpoint
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("token", data.token); // ✅ Save JWT
                setAlert({ message: "Login successful!", type: "success" });
                router.push("/caffeetest"); // Protected route            
            } else {
                setAlert({ message: data.message || "Login failed!", type: "error" });
            }
        } catch (error) {
            setAlert({ message: "An error occurred. Please try again.", type: "error" });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-tr from-blue-50 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4">
            {alert.message && (
                <Alert
                    message={alert.message}
                    type={alert.type}
                    onClose={() => setAlert({ message: "", type: "" })}
                />
            )}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-3xl shadow-2xl p-10 max-w-lg w-full space-y-6"
            >
                <h2 className="text-3xl font-extrabold text-center text-blue-600 dark:text-white mb-4">
                    Welcome Back
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Company Name */}
                    <div className="relative">
                        <Building className="absolute top-1/2 left-4 transform -translate-y-1/2 text-blue-500" size={22} />
                        <input
                            type="text"
                            name="companyName"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Company Name"
                            required
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white bg-white/40"
                        />
                    </div>

                    {/* Email */}
                    <div className="relative">
                        <Mail className="absolute top-1/2 left-4 transform -translate-y-1/2 text-blue-500" size={22} />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                            required
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white bg-white/40"
                        />
                    </div>

                    {/* Password with Toggle */}
                    <div className="relative">
                        <Lock className="absolute top-1/2 left-4 transform -translate-y-1/2 text-blue-500" size={22} />
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            required
                            className="w-full pl-12 pr-12 py-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white bg-white/40"
                        />
                        <div
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-blue-500"
                        >
                            {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                        </div>
                    </div>

                    {/* Login Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 rounded-xl transition-all"
                    >
                        Login
                    </motion.button>

                    {/* OR Divider */}
                    <div className="flex items-center gap-4">
                        <div className="h-px flex-1 bg-gray-300 dark:bg-gray-600" />
                        <p className="text-gray-500 text-sm dark:text-gray-400">or</p>
                        <div className="h-px flex-1 bg-gray-300 dark:bg-gray-600" />
                    </div>

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
                </form>
            </motion.div>
        </div>
    );
};

export default Login;
