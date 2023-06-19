import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
    username: string,
    password: string
}

export const LoginFormHook = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()

    console.log('errors', errors);
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log('data från formulär', data)

    return (
        <>
            <h1>Logga in (useForm)</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Användarnamn:</label>
                    {errors.username?.type === "required" && <div style={{ color: "red" }}>Du har inte fyllt i användarnamn</div>}
                    <input
                        {...register("username", { required: true })}
                        type="text"
                    ></input>
                </div>

                <div>
                    <label>Password:</label>
                    {errors.password?.type === "required" && <div style={{ color: "red" }}>Du har inte fyllt i lösenord</div>}
                    {errors.password?.type === "minLength" && <div style={{ color: "red" }}>Lösenordet måste vara minst 3 tecken</div>}

                    <input
                        {...register("password", { required: true, minLength: 3 })}
                        type="password"></input>
                </div>

                <button type="submit">Logga in</button>
            </form>
        </>)
}