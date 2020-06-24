import { ApolloError } from 'apollo-boost'
import { Moment } from 'moment'
import React, { useCallback, useMemo, useState } from 'react'
import { BlockedDay } from '../../../containers/calendar/Calendar'
import { OpsEnum, useCurrentAvailabilityQuery, useUpdateAvailabilityMutation } from '../../../generate/types'
import { getBlockedDateRange } from '../../../utils/calendar'
import { AVAILABLE, BLOCKED, DATE_FORMAT, UNDEFINED } from '../../../utils/constants'
import { Range } from '../../../utils/type'
import Form from '../component/AvailableDayForm'

const initialValues = {
	adTitle: '',
	adRanking: 0,
	blockedDays: []
}

export const Availability = () => {
	const [range, setRange] = useState<Range>()
	const [availability, setAvailability] = useState<string>('undefined')
	const [isValidRange, setIsValidRange] = useState<boolean>(true)
	const [errorMessage, setAlertError] = useState<string | undefined>();
	const { data, loading: loadingCurrentAd, error: currentAdError, refetch } = useCurrentAvailabilityQuery()
	const [updateFn, { loading: updating }] = useUpdateAvailabilityMutation()

	if (currentAdError) setAlertError(currentAdError?.graphQLErrors.map(({ message }) => message).join(', '))

	const querySetValues = useMemo(() => {
		if (!data || !data.currentAvailability?.ad) return initialValues;
		return {
			adTitle: data.currentAvailability.ad.id,
			adRanking: data.currentAvailability.ad.ranking,
			blockedDays: data.currentAvailability.ad.blockedDays
		}
	}, [data])

	const closeError = useCallback(() => {
		setAlertError(undefined);
	}, [setAlertError]);

	const handleValidRange = () => {
		setIsValidRange(!isValidRange)
	}

	const handldeOnRangeChanged = useCallback((range: Range) => {
		if (range && range.checkin && range.checkout && data && data.currentAvailability && data.currentAvailability.ad)
			setAvailability(handleAvailability(range, data.currentAvailability.ad.blockedDays));
		setRange(range)
	}, [range])

	const onSubmit = (availability: string) => {
		if (data && data.currentAvailability?.ad)
			updateFn({
				variables: {
					data: {
						adId: data.currentAvailability.ad.id,
						checkin: range?.checkin?.format(DATE_FORMAT),
						checkout: range?.checkout?.format(DATE_FORMAT),
						ops: availability === OpsEnum.Blocked ? OpsEnum.Blocked : OpsEnum.Available
					}
				}
			})
				.then(() => refetch())
				.catch((error: ApolloError) => { setAlertError(error?.graphQLErrors.map(({ message }) => message).join(', ')); });
	}

	return <Form
		onChangeRange={handldeOnRangeChanged}
		handleValidRangeAlert={handleValidRange}
		errorMessage={errorMessage}
		closeError={closeError}
		validRange={isValidRange}
		onSubmit={onSubmit}
		loadingCurrentAd={loadingCurrentAd}
		updating={updating}
		range={range}
		availability={availability}
		{...querySetValues}
	/>
}

const handleAvailability = (range: Range, blockedDays: BlockedDay[] | undefined) => {
	if (blockedDays && isFullAvailable(range, blockedDays)) {
		return AVAILABLE;
	} else if (blockedDays && isFullBlocked(range, blockedDays)) {
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
