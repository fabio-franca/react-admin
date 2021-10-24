import { Publish } from "@material-ui/icons"
import "./newProduct.css"

export default function NewProduct() {
    return (
        <div className="newProduct">
            <h2 className="addProductTitle">New Product</h2>
            <form className="addProductForm">
                <div className="addProductItemImg">
                    <img src="../images/camera fundo.png" alt="" className="addProductItemImgFundo" />
                    <label for="file"><p>Image</p>
                        <Publish className="addProductItemIcon"/>
                    </label>
                    <input type="file" name="file" id="file" style={{display:"none"}}/>
                </div>
                <div className="addProductItem">
                    <label>Name</label>
                    <input type="text" placeholder="Apple Airpods"/>
                </div>
                <div className="addProductItem">
                    <label>Stock</label>
                    <input type="text" placeholder="123"/>
                </div>
                <div className="addProductItem">
                    <label>Active</label>
                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="addProductButton">Create</button>
            </form>
        </div>
    )
}
