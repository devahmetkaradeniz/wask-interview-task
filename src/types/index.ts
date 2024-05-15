export interface IInsight {
    spend: string
    clicks: string
    impressions: string
    date_start: Date
    date_end: Date
}

export interface IInsights {
    data: IInsight[]
}

export interface ICampaigns {
    data: ICampaign[]
}

export interface ICampaign {
    name: string
    status: string
    adsets: IAdsets
}

export interface IAdsets {
    data: IAdset[]
}

export interface IAdset {
    name: string
    status: string
    ads?: IAds
}

export interface IAds {
    data: IAd[]
}

export interface IAd {
    name: string
    status: string
}

export interface IAccount {
    id: string
    name: string
    sort: number
    currency: string
    insights: IInsights
    campaigns?: ICampaigns
}

export interface IAccountResponse {
    accounts: IAccount[]
}