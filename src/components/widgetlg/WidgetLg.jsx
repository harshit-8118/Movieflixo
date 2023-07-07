import { Visibility } from "@mui/icons-material";
import "./widgetlg.scss";

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <span className="widgetLgTitle">Latest Transactions</span>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWRtaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Susan carel</span>
          </td>
          <td className="widgetLgDate">2 jun, 2021</td>
          <td className="widgetLgAmount">$1214</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWRtaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Susan carel</span>
          </td>
          <td className="widgetLgDate">2 jun, 2021</td>
          <td className="widgetLgAmount">$1214</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWRtaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Susan carel</span>
          </td>
          <td className="widgetLgDate">2 jun, 2021</td>
          <td className="widgetLgAmount">$1214</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWRtaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Susan carel</span>
          </td>
          <td className="widgetLgDate">2 jun, 2021</td>
          <td className="widgetLgAmount">$1214</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWRtaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Susan carel</span>
          </td>
          <td className="widgetLgDate">2 jun, 2021</td>
          <td className="widgetLgAmount">$1214</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
