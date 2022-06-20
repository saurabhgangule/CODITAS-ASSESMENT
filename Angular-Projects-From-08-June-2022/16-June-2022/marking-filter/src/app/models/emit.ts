import { Istudent } from "./student";

export interface IEData {
    currentStudent: Istudent;
    fromId: number;
    toId: number;
    newStudent: Istudent;
}