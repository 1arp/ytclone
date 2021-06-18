import { FC, useEffect, useState } from "react";
import api from "../utils/api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const LikesAndDislikes: FC<any> = ({videoId}) => {
  const [likes, setLikes] = useState([])
  const [dislikes, setDislikes] = useState([])
  const [isLiked, setIsLiked] = useState<boolean>()
  const [isDisliked, setIsDisliked] = useState<boolean>()


  useEffect(()=>{
    (async()=>{
      const {data: likesResponse} = await api.get('/rating/likes', {data:{videoId}})
      const {data: dislikesResponse} = await api.get('/rating/dislikes',  {data:{videoId}})
      setLikes(likesResponse)
      setDislikes(dislikesResponse)
      setIsLiked(likesResponse.includes(el => el.user._id == "60c3e62a3b507de8b3c0af50"))
      setIsLiked(likesResponse.includes(el => el.user._id == "60c3e62a3b507de8b3c0af50"))
    })()
  },[isLiked])
  const handleLike = async() => {
    if(isLiked){
      await api.post('/rating/unlike')
      setIsLiked(false)
    }
    await api.post('/rating/like')
    setIsLiked(true)
  }

  return(
    <div className="d-flex align-items-center">
      <div className="mx-3">
      <FontAwesomeIcon icon={[isLiked? 'fas' : 'far' ,'thumbs-up']} />
      </div>
      <FontAwesomeIcon icon={[isDisliked? 'fas' : 'far' ,'thumbs-down']} />
    </div>
  )
}

export default LikesAndDislikes