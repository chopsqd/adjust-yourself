import {
   ILecture,
   lecture_0,
   lecture_1,
   lecture_2,
   lecture_3,
   lecture_4,
   lecture_5,
   lecture_6,
   lecture_7,
   lecture_8,
   lecture_9
} from "../../content"

export const getLecture = (lvl: number): ILecture | null => {
   switch (lvl) {
      case 0:
         return lecture_0
      case 1:
         return lecture_1
      case 2:
         return lecture_2
      case 3:
         return lecture_3
      case 4:
         return lecture_4
      case 5:
         return lecture_5
      case 6:
         return lecture_6
      case 7:
         return lecture_7
      case 8:
         return lecture_8
      case 9:
         return lecture_9
      default:
         return null
   }
}
