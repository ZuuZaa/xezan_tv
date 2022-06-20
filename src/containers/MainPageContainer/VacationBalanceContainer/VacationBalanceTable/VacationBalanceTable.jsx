import {VacationBalanceTableHeader} from "./VacationBalanceTableHeader"
import {Table} from "components/Table";

export const VacationBalanceTable=({data , loading})=>{
    const thead=VacationBalanceTableHeader()
    return  <Table tbody={data} thead={thead} loading={loading} />


}