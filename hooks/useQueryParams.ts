import { useSearchParams } from 'next/navigation'

export default function useQueryParams() {
	const query = useSearchParams()
	const params = {
		returnUrl: query.get('returnUrl'),
	}

	return params
}
