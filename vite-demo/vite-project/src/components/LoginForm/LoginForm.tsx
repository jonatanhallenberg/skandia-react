import { useState, useEffect, useCallback } from "react";

export const LoginForm = () => {

    const [formState, setFormState ] = useState({
        username: {
            value: "",
            valid: false,
            touched: false
        },
        password: {
            value: "",
            valid: false,
            touched: false
        }
    })

    const [username, setUsername] = useState("");
    const [usernameValid, setUsernameValid] = useState(true);
    const [usernameTouched, setUsernameTouched] = useState(false);

    const [password, setPassword] = useState("");
    const [passwordValid, setPasswordValid] = useState(true);
    const [passwordTouched, setPasswordTouched] = useState(false);

    const isFormValid = useCallback(() => {
        let formValid = true;
        if (username.length === 0) {
            formValid = false;
            setUsernameValid(false);
        } else {
            setUsernameValid(true);
        }

        if (password.length === 0) {
            formValid = false;
            setPasswordValid(false)
        } else {
            setPasswordValid(true);
        }

        return formValid;
    }, [username, password])

    useEffect(() => {
        isFormValid();
    }, [username, password, isFormValid])

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (isFormValid()) {
            console.log('formuläret skickas', username, password);
        }
    }

    return (<>

        <h1>Logga in</h1>
        <form onSubmit={submitForm}>
            <div>
                <label>Användarnamn:</label>
                {!usernameValid && usernameTouched && <span style={{ color: 'red' }}>Du har inte fyllt i användarnamn</span>}
                <input
                    name="username"
                    onChange={(event) => setUsername(event.target.value)}
                    onBlur={() => setUsernameTouched(true)}
                    value={username}
                    type="text"
                ></input>
                {username}
            </div>

            <div>
                <label>Password:</label>
                {!passwordValid && passwordTouched && <span style={{ color: 'red' }}>Du har inte fyllt i lösenord</span>}
                <input
                    name="password"
                    onChange={(event) => setPassword(event.target.value)}
                    onBlur={() => setPasswordTouched(true)}
                    value={password}
                    type="password"></input>
            </div>

            <button type="submit">Logga in</button>
        </form>

    </>);

}