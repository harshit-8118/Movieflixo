import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import './home.scss';
import WidgetLg from '../../components/widgetlg/WidgetLg';
import WidgetSm from '../../components/widgetsm/WidgetSm';
const Home = () => {
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  const [userStats, setUserStats] = useState([]);
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("users/stats", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjFhYjBlNGJjYjE3OWRjMDBlOWRkZiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2ODk2MjcwMTMsImV4cCI6MTY5MDA1OTAxM30.rjKtgQdRx04Lv00J58gqqB96d0PwKRO9nL8kMva39V4",
          },
        });
        const statsList = res.data.sort((a, b) =>{
          return a._id - b._id;
        } );
        statsList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "New User": item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);
  return (
    <div className='home'>
        <FeaturedInfo />
        <Chart title='User Analytics' data={userStats} dataKey='New User' grid={true} />
        <div className="homeWidgets">
          <WidgetSm />
          <WidgetLg />
        </div>
    </div>
  )
}

export default Home
