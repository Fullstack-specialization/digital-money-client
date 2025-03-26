"use client";

import { useForm } from "react-hook-form";
import {RegisterFormValues} from "@/types/signup"

export default function RegisterForm() {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<RegisterFormValues>({
      defaultValues: {
        firstName: "",
        lastName: "",
        dni: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
      },
    });
  
    const onSubmit = (data: RegisterFormValues) => {
      console.log("Form submitted:", data);
    };
  
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full max-w-md mx-auto p-4">
        <input placeholder="Nombre" {...register("firstName")} />
        <input placeholder="Apellido" {...register("lastName")} />
        <input placeholder="DNI" {...register("dni")} />
        <input placeholder="Correo electrónico" type="email" {...register("email")} />
        <input placeholder="Contraseña" type="password" {...register("password")} />
        <input placeholder="Confirmar contraseña" type="password" {...register("confirmPassword")} />
        <input placeholder="Teléfono" type="tel" {...register("phone")} />
  
        <button type="submit" className="bg-primary text-black py-2 rounded">
          Crear cuenta
        </button>
      </form>
    );
  }
  