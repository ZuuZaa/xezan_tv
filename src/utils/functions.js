import { subMenusBelongTo } from "constants";
import { breadcrumbTranslations } from "constants";


export const breadcrumbTranslation = arr => {
  const array = [];
  arr.map(item => {
    return breadcrumbTranslations.forEach(obj => {
      if (obj[item]) {
        array.push(obj[item])
      }
    })
  })
  subMenusBelongTo[arr[0]] && array.unshift(subMenusBelongTo[arr[0]])
  return array;
}