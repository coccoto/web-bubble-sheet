import { ROUTES } from '@/constants'

export const isGradingMode = (pathname: string): boolean => {
    return pathname === ROUTES.GRADING
}
