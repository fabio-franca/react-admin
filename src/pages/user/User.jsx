import "./user.css"
import {PermIdentity, Today, PhoneIphone, MailOutline, PersonPinCircle, Publish} from "@material-ui/icons"
import { Link } from "react-router-dom"

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h2 className="userTitle">Edit User</h2>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>     
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img className="userShowImg" src="../images/avatar7.PNG" alt="" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Anna Becker</span>
                            <small className="userShowUserTitle">Web Designer</small>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon"/>
                            <span className="userShowInfoTitle">annabeck98</span>
                        </div>
                        <div className="userShowInfo">
                            <Today className="userShowIcon"/>
                            <span className="userShowInfoTitle">10/09/1998</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneIphone className="userShowIcon"/>
                            <span className="userShowInfoTitle">(85) 99676-6060</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon"/>
                            <span className="userShowInfoTitle">annabeck98@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <PersonPinCircle className="userShowIcon"/>
                            <span className="userShowInfoTitle">New York | USA</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form action="" className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type="text" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>E-mail</label>
                                <input type="text" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" className="userUpdateInput" />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="../images/avatar7.PNG" alt="" 
                                    className="userUpdateImg"/>
                                <label htmlFor="file">
                                    <Publish className="userUpdateIcon"/>
                                </label>
                                <input type="file" name="" id="file" style={{display:"none"}} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
