import "./featuredInfo.css"
import {ArrowDownward, ArrowUpward} from "@material-ui/icons"

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,41</span>
                    <span className="featuredMoneyRate">-11,4 
                        <ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                    <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,40</span>
                    <span className="featuredMoneyRate">-8,9 
                        <ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                    <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$3,89</span>
                    <span className="featuredMoneyRate">+10,5 
                        <ArrowUpward className="featuredIcon"/>
                    </span>
                </div>
                    <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}
