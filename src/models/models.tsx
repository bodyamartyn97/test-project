export interface CampaignModel {
    id: number,
    clicks: number,
    cost: number,
    creationDate: number
}

export interface ProfilesModel {
    id: number,
    country: string,
    marketplace: string
}

export interface AccountsModel {
    id: number,
    email: string,
    authToken: string,
    creationDate: number
}

export type TableDataType = AccountsModel | CampaignModel | ProfilesModel
export type PropertyType = keyof TableDataType
