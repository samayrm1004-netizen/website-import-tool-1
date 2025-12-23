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
