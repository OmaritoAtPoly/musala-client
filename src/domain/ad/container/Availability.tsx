import { ApolloError } from 'apollo-boost'
import { Moment } from 'moment'
import React, { useCallback, useState } from 'react'
import { BlockedDay } from '../../../containers/calendar/Calendar'
import { OpsEnum, useCurrentAvailabilityQuery, useUpdateAvailabilityMutation } from '../../../generate/types'
import { getBlockedDateRange } from '../../../utils/calendar'
import { AVAILABLE, BLOCKED, DATE_FORMAT, UNDEFINED } from '../../../utils/constants'
import { fetchCurrentAd } from '../../../utils/mockDatas'
import { Range } from '../../../utils/type'
import Form from '../component/AvailableDayForm'

export const Availability = () => {
	const [range, setRange] = useState<Range>()
	const [availability, setAvailability] = useState<string>('undefined')
	const [isValidRange, setIsValidRange] = useState<boolean>(true)
	const [errorMessage, setAlertError] = useState<string | undefined>();
	const { data, loading: currentAdLoading, error: currentAdError } = useCurrentAvailabilityQuery()

	const [updateFn, { loading, error }] = useUpdateAvailabilityMutation()

	const ad = fetchCurrentAd()


	const closeError = useCallback(() => {
		setAlertError(undefined);
	}, [setAlertError]);

	const handleValidRange = () => {
		setIsValidRange(!isValidRange)
	}

	const handldeOnRangeChanged = (range: Range) => {
		if (range && range.checkin && range.checkout)
			setAvailability(handleAvailability(range, ad.blockedDays));
		setRange(range)
	}

	const onSubmit = (availability: string) => {
		updateFn({
			variables: {
				data: {
					adId: ad.id,
					checkin: range?.checkin?.format(DATE_FORMAT),
					checkout: range?.checkout?.format(DATE_FORMAT),
					ops: availability === OpsEnum.Blocked ? OpsEnum.Blocked : OpsEnum.Available
				}
			}
		}).catch((error: ApolloError) => { setAlertError(error?.graphQLErrors.map(({ message }) => message).join(', ')); });
	}

	return <Form
		adTitle={ad.title}
		adRanking={ad.ranking}
		blockedDays={ad.blockedDays}
		onChangeRange={handldeOnRangeChanged}
		handleValidRangeAlert={handleValidRange}
		errorMessage={errorMessage}
		closeError={closeError}
		validRange={isValidRange}
		onSubmit={onSubmit}
		updating={loading}
		range={range}
		availability={availability}
	/>

}

const handleAvailability = (range: Range, blockedDays: BlockedDay[]) => {
	if (isFullAvailable(range, blockedDays)) {
		return AVAILABLE;
	} else if (isFullBlocked(range, blockedDays)) {
		return BLOCKED;
	} else return UNDEFINED;
}

const isFullBlocked = (range: Range, blockedDateRange: BlockedDay[]) => {
	let checkIn = range.checkin?.clone()
	while (checkIn?.isBefore(range.checkout)) {
		const isBLocked = (isBlocked(checkIn, blockedDateRange));
		if (!isBLocked) return false;
		checkIn.add(24, 'hours')
	}
	return true
}

const isFullAvailable = (range: Range, blockedDateRange: BlockedDay[]) => {
	let checkIn = range.checkin?.clone()
	while (checkIn?.isBefore(range.checkout)) {
		if (isBlocked(checkIn, blockedDateRange)) return false
		checkIn.add(24, 'hours')
	}
	return true
}

const isBlocked = (date: Moment, blockedDay: BlockedDay[]) => {
	for (let i = 0; i < blockedDay.length; i++) {
		const range = getBlockedDateRange(blockedDay[i])
		if (date.isSameOrAfter(range.checkin) && date.isSameOrBefore(range.checkout))
			return true
	} return false
}
