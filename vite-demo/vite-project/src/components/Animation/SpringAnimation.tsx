import { useSpring, animated } from '@react-spring/web'

export const SpringAnimation = () => {

    const springs = useSpring({
        from: { x: 0 },
        to: { x: 500 },
        loop: true
    })


    return (
        <animated.div
            style={{
                width: 80,
                height: 80,
                background: '#ff6d6d',
                borderRadius: 8,
                ...springs
            }}
        />
    )

}