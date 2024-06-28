# Job Scraper and Excel Writer

This project is a simple web scraping tool that fetches job listings from a specified URL and writes the data into an Excel file.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [License](#license)

## Installation

To run this project, you need to have Node.js installed on your system. 

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/job-scraper.git
    cd job-scraper
    ```

2. Install the necessary dependencies:
    ```sh
    npm install
    ```

## Usage

To scrape job listings from a given URL and write the data into an Excel file, you can use the provided functions.

1. Update the URL in the `writeToExcel` function call at the end of the script to the desired job listings page:
    ```javascript
    writeToExcel("https://www.workindia.in/work-from-home-jobs-in-sector-62-+-noida-delhi/")
    ```

2. Run the script:
    ```sh
    node index.js
    ```

This will generate an `jobs_data.xlsx` file in the project directory containing the scraped job listings.

## Project Structure

- `index.js`: The main script that performs web scraping and writes data to an Excel file.

## Dependencies

- `axios`: Promise-based HTTP client for making requests to the job listings page.
- `cheerio`: Fast, flexible, and lean implementation of core jQuery for the server to parse and manipulate HTML.
- `xlsx`: Library to create, modify, and read Excel files.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Feel free to contribute to this project by opening issues or submitting pull requests.

