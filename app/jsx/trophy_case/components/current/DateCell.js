/*
 * Copyright (C) 2020 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import React from 'react'
import {Text} from '@instructure/ui-text'
import {DateTime} from '@instructure/ui-i18n'
import I18n from 'i18n!trophy_case'

export default function DateCell(props) {
  return DateTime.isValid(props.unlocked_at) ? (
    <Text size="medium" color="primary">
      {I18n.t('Earned %{earnDate}', {
        // TODO: need proper locale, tz, and display format
        earnDate: DateTime.toLocaleString(
          props.unlocked_at,
          window.navigator.language,
          DateTime.browserTimeZone(),
          'LL'
        )
      })}
    </Text>
  ) : null
}
