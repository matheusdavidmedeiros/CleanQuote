# CleanQuote - Interactive Cleaning Service Price Calculator

This is a simple, interactive price calculator for cleaning services that estimates the cost based on various parameters. It is built using HTML, CSS, and JavaScript and is designed to be easy to use and integrate into any website.

The calculator fetches pricing information from a CSV file, which can be easily edited to reflect the pricing structure of any cleaning company. This makes it customizable to fit any company's pricing model, ensuring that the calculator stays up-to-date with the company's needs.

## Features:
- **Price Calculation**: The calculator uses data from a CSV file to estimate cleaning prices based on user input.
- **Interactive Interface**: Users can input their requirements (e.g., cleaning type, size of the area, etc.), and the price is updated dynamically.
- **Customizable**: You can easily update the pricing model by editing the CSV file to reflect your company's specific charges.
- **Responsive**: The design is responsive, meaning it works well on both desktop and mobile devices.
- **Easy Integration**: The structure of the calculator is flexible and adaptable, allowing it to be seamlessly integrated into any website's CSS and pricing structure.

## Tech Stack:
- **HTML5**: Structure of the webpage.
- **CSS3**: Styling and layout.
- **JavaScript (jQuery)**: Interactivity and dynamic price calculations.
- **CSV Data**: The calculator fetches pricing data from a CSV file, making it easy to update prices.

## Installation:

### Prerequisites:
- A modern web browser (e.g., Chrome, Firefox, Safari).
- A local web server for testing (you can use VS Code with the "Live Server" extension or any local server setup).

### Steps to Run Locally:
1. Clone this repository to your local machine:
    ```bash
    git clone https://github.com/matheusdavidmedeiros/CleanQuote.git
    ```
2. Open the `index.html` file in your browser or set up a local server to run it (using "Live Server" in VS Code is a simple way to do this).

3. The price calculator is ready to use. It fetches the prices from the `Price-Chat-Cleaning-Services.csv` file.

## How to Customize:
1. Open the `Price-Chat-Cleaning-Services.csv` file to edit the pricing structure. This file contains the price data used by the calculator.
2. Adjust the prices, categories, and any other parameters as needed to match your company's offerings.
3. Once the CSV file is updated, the calculator will automatically reflect the new prices without requiring any changes to the code.

## How to Use:
- The calculator can be implemented into any website by copying the `index.html`, `script.js`, and `companylogo.png` files to the desired location on your website.
- You can adjust the CSS or the structure of the calculator to fit your website's design and layout.

## License:
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
