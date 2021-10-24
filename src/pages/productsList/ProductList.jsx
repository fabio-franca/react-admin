import "./productList.css"
import {DataGrid} from "@material-ui/data-grid"
import {DeleteOutline} from "@material-ui/icons"
import { productRows } from "../../dummy";
import { Link } from "react-router-dom"
import { useState } from "react";

export default function ProductList() {
    const [data, setData] = useState(productRows)

    const handleDelete = (id)=>{
        setData(data.filter((item)=> item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'product', headerName: 'Product', width: 190, renderCell: (params)=>{
            return(
                <div className="productListItem">
                    <img className="productListImg" src={params.row.img} alt=""/>
                    {params.row.name}
                </div>
            )
        } },
        { field: 'stock', headerName: 'Stock', width: 190 },
        {
          field: 'status',
          headerName: 'Status',
          width: 150,
        },
        {
          field: 'price',
          headerName: 'Price',
          width: 210,
        },
        {
            field: "action",
            headerName: "Action",
            width: 160,
            renderCell: (params)=>{
                return(
                    <>
                    <Link to={"/product/"+params.row.id}>
                        <button className="productListEdit">Edit</button>
                    </Link>
                        <DeleteOutline className="productListDelete" onClick={()=>handleDelete(params.row.id)}/>
                    </>
                )
            }
        },
      ];

    return (
        <div className="productList">
            <DataGrid rows={data} columns={columns} pageSize={8} rowsPerPageOptions={[5]} checkboxSelection disableSelectionOnClick />
        </div>
    )
}
