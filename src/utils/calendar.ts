import moment from 'moment'
import { BlockedDay } from '../containers/calendar/Calendar'
import { DATE_FORMAT } from './constants'
import { Range } from './type'


export const getBlockedDateRange = (blockedDay: BlockedDay): Range => {
    return {
        checkin: moment(blockedDay.checkin, DATE_FORMAT),
        checkout: moment(blockedDay.checkout, DATE_FORMAT)
    }
}        