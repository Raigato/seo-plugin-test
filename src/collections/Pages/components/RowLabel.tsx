'use client'

import { useRowLabel } from '@payloadcms/ui'

const RowLabel = () => {
  const { data, rowNumber } = useRowLabel<{ label?: string }>()

  const customLabel = data?.label || `CTA ${String(rowNumber).padStart(2, '0')}`

  return <div>{customLabel}</div>
}

export default RowLabel
