import { ArrowBackOutlined } from '@mui/icons-material'
import './watch.scss'
const vid = require('../../components/listitem/video.mp4')

const Watch = () => {
  return (
    <div className='watch'>
      <div className="back">
        <ArrowBackOutlined /> Home
      </div>
      <video className='video' src={vid} autoPlay progress controls/>
    </div>
  )
}

export default Watch
