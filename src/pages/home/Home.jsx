import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import './home.scss';
import {Userdata} from '../../DummyData';
import WidgetLg from '../../components/widgetlg/WidgetLg';
import WidgetSm from '../../components/widgetsm/WidgetSm';
const Home = () => {
  return (
    <div className='home'>
        <FeaturedInfo />
        <Chart title='User Analytics' data={Userdata} dataKey='Active User' grid={true} />
        <div className="homeWidgets">
          <WidgetSm />
          <WidgetLg />
        </div>
    </div>
  )
}

export default Home
