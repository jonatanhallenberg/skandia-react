import { useState, useEffect } from 'react';

export const useCookie = (cookieName: string) => {
    const [cookie, setCookie] = useState("");

    useEffect(() => {
        const cookieString = document.cookie;
        const cookieArray = cookieString.split(';');
        const cookieObject = cookieArray.map((cookie) => {
            const [key, value] = cookie.split('=');
            return {
                key: key.trim(),
                value: value.trim(),
            };
        });
        const cookie = cookieObject.find((cookie) => cookie.key === cookieName);
        if (cookie) {
            setCookie(cookie?.value)
        }
    }, []);

    return cookie;
};