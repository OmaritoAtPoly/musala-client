import { Moment } from 'moment';

export enum DAY_STATE {
    EMPTY = 0,
    BOOKED_DAY = 1,
    SINGLE_SELECTED = 2,
    FIRST_RANGE_SELECTED = 3,
    MIDDLE_RANGE_SELECTED = 4,
    LAST_RANGE_SELECTED = 5,
    BEFORE_CURRENT = 6,
    OUT_MONTH = 7
}

export type Range = {
    checkin: Moment | undefined;
    checkout: Moment | undefined;
}

export type DayModel = {
    dateOfDay: Moment,
    currentMonth: Moment;
    state: number;
}