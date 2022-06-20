import { NotificationsPageTableHeader } from "./NotificationsPageTableHeader"
import { Table } from "components/Table"

export const NotificationsPageTable=({data})=>{
    const thead=NotificationsPageTableHeader()
    return <Table tbody={data} thead={thead} pagination/>
}