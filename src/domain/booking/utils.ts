import { Moment } from 'moment'

export type Range = {
    checkIn: Moment | undefined,
    checkOut: Moment | undefined,
}