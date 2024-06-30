/**
 * Represents a unit of time for elapsed time calculations.
 */
interface TimeUnit {
    threshold: number; // The maximum value (in seconds) for this unit to be used
    unit: string;      // The abbreviation for the unit (e.g., "s", "m", "h")
}

/**
 * Calculates a human-readable representation of the time elapsed since a given date.
 *
 * N/B: To keep the dependency graph lean, calculateElapsedTime is implemented
 * without external libraries. Should the need for a more accurate representation of
 * the time difference arise, consider: https://www.npmjs.com/package/date-fns
 *
 * This function determines the most appropriate unit of time
 * to express the difference between the current time and the provided `joinedAt` date.
 * If the difference is zero, "now" is returned.
 *
 * @param joinedAt - The date from which to calculate the elapsed time.
 * @returns A string indicating the elapsed time in a human-readable format (e.g., "5m", "3h", "1y", or "now").
 */
export function calculateElapsedTime(joinedAt: number): string {
    const now = new Date();
    const diffInSeconds = Math.round((now.getTime() - new Date().setTime(joinedAt)) / 1000);

    if (diffInSeconds === 0) {
        return "now";
    }

    const timeUnits: TimeUnit[] = [
        { threshold: 60, unit: 's' },        // 60 seconds in a minute
        { threshold: 3600, unit: 'm' },      // 60 minutes in an hour
        { threshold: 86400, unit: 'h' },     // 24 hours in a day
        { threshold: 2592000, unit: 'd' },   // 30 days in a month
        { threshold: 31536000, unit: 'y' }   // 365 days in a year
    ];

    for (let i = 0; i < timeUnits.length; i++) {
        const { threshold, unit } = timeUnits[i]!;
        if (diffInSeconds < threshold) {
            // For the first unit (seconds), return the diff directly
            if (i === 0) {
                return `for ${diffInSeconds}${unit}`;
            }
            // For subsequent units, calculate the amount in the previous unit
            const prevUnit = timeUnits[i - 1]!;
            return `${Math.round(diffInSeconds / prevUnit.threshold)}${prevUnit.unit}`;
        }
    }

    // If it exceeds the largest threshold, calculate in years
    const lastUnit = timeUnits[timeUnits.length - 1]!;
    return `${Math.round(diffInSeconds / lastUnit.threshold)}${lastUnit.unit}`;
}

