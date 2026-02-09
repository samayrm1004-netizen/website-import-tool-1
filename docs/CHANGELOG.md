# Website Import Tool - Engineering Changelog

All notable changes and updates are documented here.


## [2025-12-17 13:21] - fix(fetcher): handle TLS handshake timeout gracefully on slow remote hosts
- Added 15s retry timeout and specific connection error categorization.

## [2025-12-17 19:42] - refactor(store): migrate import status state to atomic zustand slice
- Eliminated redundant root re-renders when progress updates arrive.

## [2025-12-18 10:15] - feat(crawler): implement link extractor with depth-level control
- Added recursive link scraper with configurable maximum depth limits.

## [2025-12-18 13:37] - feat(filter): support regex-based URL filtering rules for page crawl
- Allowed users to define ignore patterns before kicking off batch imports.

## [2025-12-18 14:11] - fix(hydration): resolve SSR mismatch on initial page theme render
- Ensured theme provider initializes state only after mounting.

## [2025-12-18 18:54] - feat(export): add JSON and Markdown export options for scraped content
- Allowed users to download structured schemas alongside raw HTML.

## [2025-12-23 12:08] - perf(dom): optimize tree traversal using depth-first search index
- Reduced AST construction time by 34% on pages with over 5,000 DOM nodes.

## [2025-12-23 19:52] - fix(parser): preserve relative image paths during asset extraction
- Corrected URL resolution against base href tag when present.

## [2025-12-24 13:01] - docs(readme): add troubleshooting section for CORS preflight errors
- Documented local proxy fallback options for cross-origin scraping.

## [2025-12-24 18:51] - feat(ui): add visual progress bar for active batch downloads
- Connected WebSockets event stream to animated status indicator.

## [2025-12-24 22:48] - feat(export): add JSON and Markdown export options for scraped content
- Allowed users to download structured schemas alongside raw HTML.

## [2026-01-06 11:34] - style(theme): polish dark mode contrasts on import progress card
- Adjusted border opacity and accent highlights for better readability.

## [2026-01-06 18:49] - perf(memory): stream large response bodies directly to disk cache
- Avoided buffering full responses in memory to prevent allocation spikes.

## [2026-01-06 22:03] - fix(fetcher): handle TLS handshake timeout gracefully on slow remote hosts
- Added 15s retry timeout and specific connection error categorization.

## [2026-01-08 17:30] - refactor(ui): extract reusable modal component for URL input and validation
- Separated dialog logic from page container into modular component.

## [2026-01-08 20:33] - feat(filter): support regex-based URL filtering rules for page crawl
- Allowed users to define ignore patterns before kicking off batch imports.

## [2026-01-09 12:53] - test(parser): add unit tests for malformed HTML structure sanitization
- Covered unclosed div tags and stray script injection cases.

## [2026-01-21 18:27] - docs(api): document endpoint payload schemas for import webhook
- Included sample request and response JSON payloads in docs.

## [2026-01-21 21:14] - refactor(utils): consolidate URL normalization and sanitization helpers
- Merged duplicate protocol prepend logic into single pure function.

## [2026-01-22 13:55] - fix(parser): preserve relative image paths during asset extraction
- Corrected URL resolution against base href tag when present.

## [2026-01-22 19:20] - fix(fetcher): handle TLS handshake timeout gracefully on slow remote hosts
- Added 15s retry timeout and specific connection error categorization.

## [2026-01-23 11:41] - fix(api): prevent duplicate import job dispatch on rapid button clicks
- Added client-side debouncing and optimistic disabled state.

## [2026-01-23 12:38] - docs(readme): add troubleshooting section for CORS preflight errors
- Documented local proxy fallback options for cross-origin scraping.

## [2026-01-26 13:35] - feat(preview): render live sanitized iframe preview of imported site
- Implemented sandboxed iframe with restricted script permissions.

## [2026-01-26 18:37] - style(theme): polish dark mode contrasts on import progress card
- Adjusted border opacity and accent highlights for better readability.

## [2026-01-27 11:41] - refactor(ui): extract reusable modal component for URL input and validation
- Separated dialog logic from page container into modular component.

## [2026-01-27 20:40] - feat(crawler): implement link extractor with depth-level control
- Added recursive link scraper with configurable maximum depth limits.

## [2026-01-29 14:15] - perf(importer): add batching queue to prevent memory spikes on large sitemaps
- Chunked concurrent URL fetching to max 4 parallel streams.

## [2026-02-04 18:46] - feat(parser): add support for selective node exclusion during site extraction
- Enhanced DOM traversal to skip elements marked with data-skip-import attributes.

## [2026-02-09 11:49] - feat(export): add JSON and Markdown export options for scraped content
- Allowed users to download structured schemas alongside raw HTML.
