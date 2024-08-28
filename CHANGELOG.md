# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.2.0] - 2024-08-28
### Added
- Loading indicators for each chart to provide visual feedback during data fetching.
- Custom tooltips for all charts, offering detailed information on hover.
- Data labels on chart elements for at-a-glance information.
- Chart.js DataLabels plugin integration for enhanced data visualization.
- Expanded mock datasets (set1, set2, set3) to demonstrate varied data scenarios.
- Simulated API delay in fetchData() function to showcase loading indicators.
- External tooltip handler function for custom tooltip rendering.
- Responsive design improvements for better display across device sizes.

### Changed
- Updated HTML structure to include loading indicator and tooltip elements.
- Enhanced CSS styles for new UI elements (loading indicators, tooltips).
- Refactored JavaScript code for improved modularity and readability.
- Modified chart configurations to use consistent styling and options.
- Updated chart initialization to include new plugin options and styling.

### Fixed
- Improved error handling in data fetching and chart updating processes.

## [0.1.0] - 2024-08-27
### Added
- Initial project setup with basic HTML, CSS, and JavaScript structure.
- Three chart types: Line Chart, Bar Chart, and Pie Chart using Chart.js.
- Basic data fetching mechanism with mock data.
- Simple UI controls for refreshing data and selecting datasets.
- Responsive layout for various screen sizes.
- README.md with project description, features, and setup instructions.

[Unreleased]: https://github.com/johnalpha74/interactive-data-viz-dashboard/compare/v0.2.0...HEAD
[0.2.0]: https://github.com/johnalpha74/interactive-data-viz-dashboard/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/johnalpha74/interactive-data-viz-dashboard/releases/tag/v0.1.0