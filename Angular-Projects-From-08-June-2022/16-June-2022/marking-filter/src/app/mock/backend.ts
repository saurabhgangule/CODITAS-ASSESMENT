import { IstudentStructure } from "../models/structure";

export const backendStudentList = async (): Promise<IstudentStructure[]> => {
    return [
        {
            section: 'greater than 70',
            id: 1,
            students: [
                { name: 'Akash', marks: 71 },
                { name: 'Saurabh', marks: 72 }
            ]
        },
        {
            section: 'less than 70 & greater than 50',
            id: 2,
            students: [
                { name: 'Anil', marks: 65 },
                { name: 'Nana', marks: 60 }
            ]
        },
        {
            section: 'less than 50',
            id: 3,
            students: [
                { name: 'Aniket', marks: 49 },
                { name: 'Sufan', marks: 41 }
            ]
        },
    ];
}
