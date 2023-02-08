import React, { useEffect, useState } from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import axios from 'axios';
function TableData() {

  const [data, setData] = useState<IUserData[] | []>([])

  interface IUserData {
    userId: number,
    id: number,
    title: String,
    body: string
  }


  const columns: GridColDef[] = [
    { field: "userId", headerName: "User ID", flex: 0.2 },
    { field: "id", headerName: "ID", flex: 0.2 },
    { field: "title", headerName: "Title", flex: 0.4 },
    { field: "body", headerName: "Body", flex: 1 },
  ]

  function getData(): Promise<IUserData[] | []> {
    return axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.data)
      .catch((e) => console.log(e))
  }

  useEffect(() => {
    getData().then((d) => setData(d))
  }, [])
  return (
    <DataGrid
      columns={columns}
      rows={data}
    />
  )
}

export default TableData