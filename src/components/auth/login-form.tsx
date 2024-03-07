import { Button, Input } from "@nextui-org/react"
import { SubmitHandler, useForm } from "react-hook-form";
import { TLoginSchema, loginSchema } from "../../types/auth"

import { BackgroundGradient } from "../ui/background-gradient"
import { login } from "../../apis/auth";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginForm = () => {

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<TLoginSchema>({ resolver: zodResolver(loginSchema), });

    const mutation = useMutation({
        mutationFn: login,
        onSuccess: async () => {
            await navigate('/')
        },
    });

    const onSubmit: SubmitHandler<TLoginSchema> = async data => {
        mutation.mutate(data)
    };
    return (
        <BackgroundGradient className="rounded-[22px] max-w-7xl sm:p-10 bg-white dark:bg-zinc-900">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full flex flex-col gap-4 mb-4">
                    <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                        <Input size={'sm'} type="email" label="Email | Phone"
                            {...register("username")}
                            isInvalid={errors?.username && true}
                            errorMessage={errors.username?.message || ''}
                        />
                    </div>

                    <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                        <Input size={'sm'} type="password" label="Password"
                            {...register("password")}
                            isInvalid={errors?.password && true}
                            errorMessage={errors.password?.message || ''}
                        />
                    </div>

                </div>
                <Button type='submit' color="primary" variant="bordered" isLoading={isSubmitting}>Login</Button>
            </form>
        </BackgroundGradient>
    )
}

export default LoginForm