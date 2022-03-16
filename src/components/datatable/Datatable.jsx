import React from 'react'
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatablesource';
import { Link } from 'react-router-dom';

const Datatable = () => {

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 140,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <button className="viewButton">View</button>
            </Link>
            <button className="deleteButton">Delete</button>
          </div>
        );
      },
    },
  ]
  return (
    <div className='datatable'>
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" style={{ textDecoration: "none" }} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
      className='datagrid'
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable