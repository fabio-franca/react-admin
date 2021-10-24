import "./WidgetSm.css"
import {Visibility} from "@material-ui/icons"

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">
                 New Join Members
            </span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="./images/avatar2.PNG" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anne Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="./images/avatar2.PNG" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anne Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="./images/avatar2.PNG" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anne Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="./images/avatar2.PNG" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anne Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="./images/avatar2.PNG" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anne Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
