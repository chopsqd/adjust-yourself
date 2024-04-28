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

export const getTest = (lvl: number): ILecture["test"] | null => {
   switch (lvl) {
      case 0:
         return lecture_0.test
      case 1:
         return lecture_1.test
      case 2:
         return lecture_2.test
      case 3:
         return lecture_3.test
      case 4:
         return lecture_4.test
      case 5:
         return lecture_5.test
      case 6:
         return lecture_6.test
      case 7:
         return lecture_7.test
      case 8:
         return lecture_8.test
      case 9:
         return lecture_9.test
      default:
         return null
   }
}
