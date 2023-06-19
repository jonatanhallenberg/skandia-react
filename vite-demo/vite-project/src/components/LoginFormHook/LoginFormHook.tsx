import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
    username: string,
    password: string,
    email: string,
    userType: "employee" | "customer"
}

export const LoginFormHook = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()

    const userType = watch("userType");
    console.log('userType', userType);

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log('data från formulär', data)

    return (
        <>
            <h1>Logga in (useForm)</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div>
                    <label htmlFor="employee">Anställd</label><input {...register("userType")} id="employee" type="radio" value="employee"></input>
                    <label htmlFor="customer">Kund</label><input {...register("userType")} id="customer" type="radio" value="customer"></input>
                </div>

                {userType === "customer" ? <>
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
                </> : <>

                    <div>
                        <label>E-post:</label>
                        {errors.email?.type === "required" && <div style={{ color: "red" }}>Du har inte fyllt i e-post</div>}
                        {errors.email?.type === "pattern" && <div style={{ color: "red" }}>Du måste fylla i en korrekt e-post</div>}
                        <input
                            {...register("email", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g })}
                            type="text"
                        ></input>
                    </div>

                </>}

                <button type="submit">Logga in</button>
            </form>
        </>)
}