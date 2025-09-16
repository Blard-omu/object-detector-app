"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { LucideArrowLeft } from "lucide-react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";


export interface RegisterFormInputs {
    username: string;
    email: string;
    password: string;
}

const Register = () => {
    const router = useRouter();
    const { signup } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<RegisterFormInputs>();

    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = async (formData: RegisterFormInputs) => {
        const toastId = toast.loading("Creating account...");

        try {
            await signup(formData);
            toast.success("Account created successfully!", { id: toastId });
            router.push("/login");
        } catch (err: unknown) {
            const errorMessage =
                err instanceof Error ? err.message : "Something went wrong";
            toast.error(errorMessage || "Signup failed", { id: toastId });
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
            <div className="realative bg-white p-8 rounded-md shadow-md w-full max-w-md">
                <div className="absolute">
                    <Link href="/" className="flex items-center gap-x-2 text-[#5c4efc] transition-all">
                        <LucideArrowLeft className="size-5 xl:size-6" />
                    </Link>
                </div>
                <h2 className="text-2xl font-bold text-center text-[#4A3AFF] mb-6">Register</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
                    <div>
                        <input
                            type="text"
                            placeholder="User Name"
                            {...register("username", { required: "Username is required" })}
                            className="p-3 border border-gray-300 rounded-md w-full"
                        />
                        {errors.username && <p className="text-red-600 text-sm mt-1">{errors.username.message}</p>}
                    </div>

                    <div>
                        <input
                            type="email"
                            placeholder="Email Address"
                            {...register("email", { required: "Email is required" })}
                            className="p-3 border border-gray-300 rounded-md w-full"
                        />
                        {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password must be at least 6 characters" },
                            })}
                            className="p-3 border border-gray-300 rounded-md w-full pr-10"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3 text-gray-500 focus:outline-none"
                            tabIndex={-1}
                        >
                            {showPassword ? (
                                <EyeIcon className="h-5 w-5" />
                            ) : (
                                <EyeSlashIcon className="h-5 w-5" />
                            )}
                        </button>
                        {errors.password && (
                            <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`p-3 rounded-md transition-all ${isSubmitting
                                ? "bg-[#5c4efc]/60 cursor-not-allowed"
                                : "bg-[#5c4efc] hover:bg-indigo-700 text-white"
                            }`}
                    >
                        {isSubmitting ? "Registering..." : "Register"}
                    </button>
                </form>

                <p className="text-sm text-center mt-4">
                    Already have an account?{" "}
                    <Link href="/login" className="text-[#5c4efc] font-medium hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;

