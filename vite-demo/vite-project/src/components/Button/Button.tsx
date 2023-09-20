import styled from 'styled-components';

export const Button = ({ variant, label }: { variant: "success" | "warning" | "danger", label: string }) => {

    const StyledButton = styled.button<{ variant: "success" | "warning" | "danger" }>`
        ${props => props.variant === "danger" && "background-color: red;"}
        ${props => props.variant === "warning" && "background-color: yellow;"}
        ${props => props.variant === "success" && "background-color: green;"}
    `;

    return <StyledButton variant={variant}>{label}</StyledButton>
}