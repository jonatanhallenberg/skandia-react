import { useForm, SubmitHandler } from "react-hook-form"
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { logIn } from '../../store/loginSlice';
import { useNavigate } from "react-router-dom";

type Inputs = {
    username: string,
    password: string,
    email: string,
    userType: "employee" | "customer"
}

export const LoginFormHook = () => {

    const dispatch = useAppDispatch();
    const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);
    const navigate = useNavigate();

    if (isLoggedIn) {
        navigate("/companies");
    }
    
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()

    const userType = watch("userType");
    console.log('userType', userType);

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        dispatch(logIn({ username: data.username, password: data.password }))
    }

    return (
        <>
            <h1>Logga in (useForm)</h1>
            <h2>{isLoggedIn ? "Inloggad" : "Utloggad"}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div>
                    <label htmlFor="employee">Anställd</label><input {...register("userType")} data-testid="usertype-employee" id="employee" type="radio" value="employee"></input>
                    <label htmlFor="customer">Kund</label><input {...register("userType")} data-testid="usertype-customer" id="customer" type="radio" value="customer"></input>
                </div>

                {userType === "customer" ? <>
                    <div>
                        <label>Användarnamn:</label>
                        {errors.username?.type === "required" && <div style={{ color: "red" }}>Du har inte fyllt i användarnamn</div>}
                        <input
                            data-testid="username"
                            {...register("username", { required: true })}
                            type="text"
                        ></input>
                    </div>

                    <div>
                        <label>Password:</label>
                        {errors.password?.type === "required" && <div style={{ color: "red" }}>Du har inte fyllt i lösenord</div>}
                        {errors.password?.type === "minLength" && <div style={{ color: "red" }}>Lösenordet måste vara minst 3 tecken</div>}

                        <input
                            data-testid="password"
                            {...register("password", { required: true, minLength: 3 })}
                            type="password"></input>
                    </div>
                </> : <>

                    <div>
                        <label>E-post:</label>
                        {errors.email?.type === "required" && <div style={{ color: "red" }}>Du har inte fyllt i e-post</div>}
                        {errors.email?.type === "pattern" && <div style={{ color: "red" }}>Du måste fylla i en korrekt e-post</div>}
                        <input
                            data-testid="email"
                            {...register("email", { required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g })}
                            type="text"
                        ></input>
                    </div>

                </>}

                <button type="submit" data-testid="login-button">Logga in</button>
            </form>
        </>)
}