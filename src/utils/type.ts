import { Moment } from 'moment'

export type Range = {
    checkin: Moment | undefined,
    checkout: Moment | undefined,
}

export enum Role  {
    'CLIENT'='CLIENT',
    'HOST'='HOST'
}