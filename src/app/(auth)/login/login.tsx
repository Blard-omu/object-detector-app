"use client";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { LucideArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface LoginFormInputs {
  email: string;
  password: string;
}

const Login = () => {
  const router = useRouter();
  const { login, auth } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>();

  const [showPassword, setShowPassword] = useState(false);


  const onSubmit = async (data: LoginFormInputs) => {
    const toastId = toast.loading("Logging in...");

    try {
      await login(data.email, data.password);

      toast.success("Login successful!", { id: toastId });
      
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Something went wrong";
      toast.error(errorMessage || "Login failed", { id: toastId });
    }
  };

  useEffect(() => {
    if (!auth.token) return;
  
    const role = auth.user?.role;
    switch (role) {
      case "admin":
        router.push("admin/dashboard");
        break;
      default:
        router.push("/");
    }
  }, [auth?.token, auth.user?.role, router]);
  

  // console.log(auth);


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="relative bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <div className="absolute">
        <Link href="/" className="flex items-center gap-x-2 text-[#5c4efc] transition-all">
        <LucideArrowLeft className="size-5 xl:size-6" />
        </Link>
        </div>
      
        <h2 className="text-2xl font-bold text-center text-[#4A3AFF] mb-6">Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email Address"
              {...register("email", { required: "Email is required" })}
              className="p-3 border border-gray-300 rounded-md w-full"
            />
            {errors.email && (
              <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
            )}
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
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
              <p className="text-sm text-red-600 mt-1">{errors.password.message}</p>
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
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Don&rsquo;t have an account?{" "}
          <Link href="/register" className="text-[#5c4efc] font-medium hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

