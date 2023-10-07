import { IPictures } from "../../interface/pictures"
import { Daum, Link } from "../../interface/searchPictures"

const getInfo = (picture: IPictures | Link, item: Daum[] | []) => {
  if ('title' in picture) {
    const { title, explanation, url } = picture as IPictures
    return { title, explanation, url }
  } else {
    const link = picture as Link
    const url = link.href
    const explanation = item[0]?.description || ""
    const title = item[0]?.title || ""
    return { title, explanation, url }
  }
}

export default getInfo