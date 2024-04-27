import lecture_0 from "./lecture_0"
import lecture_1 from "./lecture_1"
import lecture_2 from "./lecture_2"
import lecture_3 from "./lecture_3"
import lecture_4 from "./lecture_4"
import lecture_5 from "./lecture_5"
import lecture_6 from "./lecture_6"
import lecture_7 from "./lecture_7"
import lecture_8 from "./lecture_8"
import lecture_9 from "./lecture_9"

export {
   lecture_0, lecture_1, lecture_2, lecture_3, lecture_4,
   lecture_5, lecture_6, lecture_7, lecture_8, lecture_9
}

export interface ILecture {
   title: string;
   text: string;
   test: Array<
      {
         question: string;
         options: Array<
            {
               answer: string;
               isCorrect: boolean;
            }
         >
      }
   >
}
