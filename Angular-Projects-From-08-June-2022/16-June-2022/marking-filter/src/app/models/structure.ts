import { Istudent } from "./student";

export interface IstudentStructure {
    section: string,
    id: number,
    students: Istudent[]
}