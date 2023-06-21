import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { fetchCompanies } from "../../store/companiesSlice";

export const CompaniesList = () => {

    const dispatch = useAppDispatch();
    const companies = useAppSelector(state => state.companies.companies);

    return <><h1>Companies</h1>
        <button onClick={() => dispatch(fetchCompanies())}>Hämta företag</button>
        { companies.map(company => (
            <div>{company.name}</div>
        ))}
    </>
}
