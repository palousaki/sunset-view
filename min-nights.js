// Minimum nights required for a booking.
// Edit MIN_NIGHTS_OVERRIDES to set a different minimum for specific date
// ranges (e.g. a longer minimum during high season). Ranges are [start, end)
// and are checked against the check-in date. Edit freely - unlike
// blocked-dates.js, this file is not auto-generated.
const DEFAULT_MIN_NIGHTS = 2;
const MIN_NIGHTS_OVERRIDES = [
  // { start: "2026-07-01", end: "2026-09-01", nights: 3 },
];

function getMinNights(dateStr) {
  const override = MIN_NIGHTS_OVERRIDES.find(
    ({ start, end }) => dateStr >= start && dateStr < end
  );
  return override ? override.nights : DEFAULT_MIN_NIGHTS;
}
