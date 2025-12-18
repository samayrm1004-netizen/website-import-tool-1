# Website Import Tool - Engineering Changelog

All notable changes and updates are documented here.


## [2025-12-17 13:21] - fix(fetcher): handle TLS handshake timeout gracefully on slow remote hosts
- Added 15s retry timeout and specific connection error categorization.

## [2025-12-17 19:42] - refactor(store): migrate import status state to atomic zustand slice
- Eliminated redundant root re-renders when progress updates arrive.

## [2025-12-18 10:15] - feat(crawler): implement link extractor with depth-level control
- Added recursive link scraper with configurable maximum depth limits.
