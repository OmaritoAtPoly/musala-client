import { Moment } from 'moment'

export type Range = {
    checkin: Moment | undefined,
    checkout: Moment | undefined,
}