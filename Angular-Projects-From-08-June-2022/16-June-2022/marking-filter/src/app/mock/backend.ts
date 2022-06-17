import { Istudent } from "../models/student";

export const backendStudentList = async (): Promise<Istudent[]> => {
    return [
        { name: 'Akash', marks: 71 },
        { name: 'Saurabh', marks: 72 },
        { name: 'Anil', marks: 65 },
        { name: 'Nana', marks: 60 },
        { name: 'Aniket', marks: 48 },
        { name: 'Sufan', marks: 41 }
    ];
}
