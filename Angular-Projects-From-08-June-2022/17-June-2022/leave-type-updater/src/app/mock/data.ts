import { Ileave } from "../models/leave";

export const leaveData = async (): Promise<Ileave[]> => {
    return [
        {
            type: 'planned',
            dates: [
                '1-July-2022',
                '16-Aug-2022',
                '10-Nov-2022'
            ]
        },
        {
            type: 'unplanned',
            dates: [
                '19-June-2022',
                '20-Aug-2022',
            ]
        },
        {
            type: 'floating',
            dates: [
                '18-June-2022',
                '15-Aug-2022',
            ]
        }
    ];
}
