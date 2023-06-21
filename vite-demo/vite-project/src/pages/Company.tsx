import { useParams } from "react-router-dom";

export const Company = () => {
    const params = useParams();
    return <h1>Companyid: {params.companyId}</h1>
}