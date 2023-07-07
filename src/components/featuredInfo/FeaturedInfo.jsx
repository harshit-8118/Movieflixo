import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import "./featuredinfo.scss";

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$5322</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward className="featuredIcon Negative"/>
          </span>
        </div>
        <span className="featuredSub">Compare to last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,145</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward className="featuredIcon Negative"/>
          </span>
        </div>
        <span className="featuredSub">Compare to last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,196</span>
          <span className="featuredMoneyRate">
            11.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compare to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
