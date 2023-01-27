/**
 * External dependencies.
 */
import moment from 'moment';

/**
 * WordPress dependencies.
 */
import { dispatch, select } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies.
 */
import { getTimeZone } from './datetime';
import { getFromGlobal } from './globals';

export function isEventPostType() {
	return (
		getFromGlobal('post_type') ===
		select('core/editor').getCurrentPostType()
	);
}

export function CheckCurrentPostType() {
	return wp.data.select('core/editor').getCurrentPostType();
}

export function hasEventPast() {
	const dateTimeEnd = moment(getFromGlobal('event_datetime.datetime_end'));

	return (
		moment.tz(getTimeZone()).valueOf() >
		dateTimeEnd.tz(getTimeZone()).valueOf()
	);
}

export function hasEventPastNotice() {
	const id = 'gp_event_past';
	const notices = dispatch('core/notices');

	notices.removeNotice(id);

	if (hasEventPast()) {
		notices.createNotice(
			'warning',
			__('This event has already past.', 'gatherpress'),
			{
				id,
				isDismissible: false,
			}
		);
	}
}