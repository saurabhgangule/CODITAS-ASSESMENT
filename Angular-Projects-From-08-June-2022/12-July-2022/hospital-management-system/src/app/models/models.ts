// Page Info Interfaces
export interface IPageInfo {
    title: string;
    config?: IPageConfig;
}

export interface IRequestReminder {

}

export interface IPageData {
    _id?: string;
    title?: string;
    name?: string;
    email?: string;
    role?: string;
    action?: string;
    speciality?: string;
    assignedDoctor?: string | [];
    for?: string;
    replacement?: string;
    reason?: string;
    to?: string;
    message?: string;
    docsList?: string[];
    assignedDocsList?: string[];
    nurses?: any[];
    newNurses?: string[];
}

export interface IPageConfig {
    isAction?: boolean;
    action?: string;
    actions?: IAction[];
}

// Table data interfaces
export interface IAction {
    icon: string;
    title: string;
    color?: string;
    handleAction?: (x: any) => {};
}

export interface ITableConfig {
    isSpecial?: boolean;
    handleSpecial?: (x: any) => {};
    isAction?: boolean;
    actions?: IAction[];
}

export interface ITableColsData {
    key: string;
    display: string;
    config?: ITableConfig;
}

// Login Data Interface
export interface ILogin {
    role: string;
    email: string;
    password: string;
}

export interface ILoginResponse {
    data: {
        name: string;
        role: string;
        token: string;
        userId: string;
    }
}