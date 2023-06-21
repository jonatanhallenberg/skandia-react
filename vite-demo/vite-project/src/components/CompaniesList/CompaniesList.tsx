import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { fetchCompanies } from "../../store/companiesSlice";
import { redirect } from "react-router-dom";
import { useEffect } from "react";

export const CompaniesList = () => {

    const dispatch = useAppDispatch();
    const companies = useAppSelector(state => state.companies.companies);
    useEffect(() => {
        dispatch(fetchCompanies());
    }, [])

    return <><h1>Companies</h1>
        {/* <button onClick={() => dispatch(fetchCompanies())}>Hämta företag</button> */}
        { companies.map(company => (
            <div key={company.id}>{company.name}</div>
        ))}
    </>
}
