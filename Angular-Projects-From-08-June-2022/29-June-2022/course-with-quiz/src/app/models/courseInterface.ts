export interface ILevels {
    levelName: string;
    isComplete: boolean;
    hasAccess: boolean;
    levelId: number;
    levelDetails: ILevelDetails;
}

export interface ILevelQuiz {
    id: number;
    quiz: string;
    options: string[];
    answer: string;
    isAttempted: boolean;
}

export interface ILevelDetails {
    videoEmbedIds: string[];
    quizQuestions: ILevelQuiz[];
}