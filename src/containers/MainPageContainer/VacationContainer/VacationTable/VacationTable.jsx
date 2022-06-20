import {Table} from "components/Table";
import { VacationTableHeader } from "./VacationTableHeader";


export const VacationTable=({data, loading})=>{
    const thead= VacationTableHeader()

   return  <Table tbody={data} thead={thead} loading={loading} />

 
}