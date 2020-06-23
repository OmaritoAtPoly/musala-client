import { Moment } from 'moment';

export enum DAY_STATE {
    EMPTY = 0,
    BLOCKED_DAY = 1,
    SINGLE_SELECTED = 2,
    FIRST_RANGE_SELECTED = 3,
    MIDDLE_RANGE_SELECTED = 4,
    LAST_RANGE_SELECTED = 5,
    BEFORE_CURRENT = 6,
    OUT_MONTH = 7,
    FIRST_IN_BOOKING_RANGE = 8,
    MIDDLE_IN_BOOKING_RANGE = 9,
    LAST_IN_BOOKING_RANGE = 10
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