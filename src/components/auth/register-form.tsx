import { Button, Input } from "@nextui-org/react"
import { SubmitHandler, useForm } from "react-hook-form";
import { TRegisterSchema, registerSchema } from "../../types/auth";

import { BackgroundGradient } from "../ui/background-gradient"
import { zodResolver } from "@hookform/resolvers/zod";

const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<TRegisterSchema>({ resolver: zodResolver(registerSchema), });

    const onSubmit: SubmitHandler<TRegisterSchema> = async data => {
        console.log(data)
    };
    return (
        <BackgroundGradient className="rounded-[22px] max-w-7xl p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full flex flex-col gap-4 mb-4">
                    <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                        <Input size={'sm'} type="text" label="Name"
                            {...register("name")}
                            isInvalid={errors?.name && true}
                            errorMessage={errors.name?.message || ''}
                        />
                    </div>
                    <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                        <Input size={'sm'} type="email" label="Email"
                            {...register("email")}
                            isInvalid={errors?.email && true}
                            errorMessage={errors.email?.message || ''}
                        />
                    </div>
                    <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                        <Input size={'sm'} type="password" label="Password"
                            {...register("password")}
                            isInvalid={errors?.password && true}
                            errorMessage={errors.password?.message || ''}
                        />
                    </div>
                    <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                        <Input size={'sm'} type="password" label="Confirm Password"
                            {...register("confirmPassword")}
                            isInvalid={errors?.confirmPassword && true}
                            errorMessage={errors.confirmPassword?.message || ''}
                        />
                    </div>
                </div>
                <Button type='submit' color="primary" variant="bordered" isLoading={isSubmitting}>Register</Button>
            </form>
        </BackgroundGradient>
    )
}

export default RegisterForm