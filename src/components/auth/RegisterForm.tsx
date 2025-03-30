"use client";

import { useForm } from "react-hook-form";
import {RegisterFormValues} from "@/types/signup"
import InputBase from "@/components/common/InputBase";

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
      <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md px-6 py-10 flex flex-col gap-4 text-sm md:max-w-4xl md:px-10 items-center"
    >
      <h2 className="text-center text-white font-semibold text-base md:text-lg md:col-span-2 mb-4">
        Crear cuenta
      </h2>
    
      <div className="grid grid-cols-1 gap-y-[20px] md:gap-x-10 md:grid-cols-2 md:gap-y-6 w-[300px] md:w-[715px] lg:w-[798px]">
        <InputBase {...register("firstName")} placeholder="Nombre*" />
        <InputBase {...register("lastName")} placeholder="Apellido*" />
        <InputBase {...register("dni")} placeholder="DNI*" />
        <InputBase {...register("email")} type="email" placeholder="Correo electrónico*" />

        <p className="text-white text-xs leading-tight md:text-sm md:col-span-2">
          Usa entre 6 y 20 caracteres (debe contener al menos 1 carácter especial, una mayúscula y un número).
        </p>

        <InputBase {...register("password")} type="password" placeholder="Contraseña*" />
        <InputBase {...register("confirmPassword")} type="password" placeholder="Confirmar contraseña*" />
        <InputBase {...register("phone")} type="tel" placeholder="Teléfono*" className="md:col-span-1" />

        <button
          type="submit"
          className="bg-primary hover:opacity-90 text-black text-base font-bold py-3 rounded-md mt-2 md:mt-0 md:col-span-1"
        >
          Crear cuenta
        </button>
      </div>
    </form>  
    );
  }
  