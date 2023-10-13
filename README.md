# convert50
#### Video Demo:  <https://youtu.be/mjVQVbAoZAQ>
#### Description:
Convert50 is a web extension , which can be used to convert currencies from one to another.
As a part of cs50 the introduction to computer science course of Harvard University, this convert50 is created.


#### purpose of the project:
The purpose of the currency conversion extension "CONVERT50"is to provide a convenient and efficient way for internet users to perform currency conversions without the need for manual searches in their browser. The extension aims to simplify the process and save time by offering quick access to currency conversion functionality with just a few clicks.

With the extension installed, users can simply input the desired amount, select the source currency (e.g., the currency of the product they want to purchase), and choose their target currency (e.g., their local currency) using the provided dropdown menus. The extension will then fetch the latest exchange rates from a reliable source or API and calculate the converted amount automatically.

By eliminating the need to manually search for currency conversion rates and perform calculations, the extension streamlines the process for online shoppers and individuals dealing with foreign currencies. It provides a seamless user experience by integrating the conversion functionality directly into the browser, making it easily accessible and reducing the time and effort required for each conversion.

The extension can be designed to have a user-friendly interface, allowing users to input values and select currencies within a popup window that appears when the extension icon is clicked. The converted amount can be displayed instantly within the same popup, providing immediate feedback to the user.

By simplifying the currency conversion process, the extension can enhance the online shopping experience for users who frequently deal with international currencies. It can also be a useful tool for individuals applying to foreign universities, enabling them to quickly convert tuition fees, living expenses, and other financial figures to their local currency.

Overall, the currency conversion extension aims to provide convenience, efficiency, and time-saving benefits to users, making it a valuable tool for those who frequently engage in international transactions and currency conversions while browsing the internet.

#### creation:

The "CONVERT 50" extension you've created using HTML, CSS, JavaScript, and additional files like icons and JSON files is a custom browser extension that focuses on currency conversion functionality. Let's elaborate on each component:

<li>HTML: The HTML file (currency-converter.html) defines the structure and content of the extension's popup window. It contains elements like input, select, and label to capture user input and display the conversion result. It also includes a script tag to link the JavaScript file and handle user interactions.</li>

<li>CSS: The CSS file (currency-converter.css) styles the appearance and layout of the extension's popup window. It provides rules to customize the font, colors, dimensions, alignment, and other visual aspects of the HTML elements. It ensures a visually appealing and user-friendly interface.</li>

<li>JavaScript: The JavaScript file (currency-converter.js) contains the logic and functionality of the extension. It handles events like button clicks and user input retrieval. It interacts with external APIs or performs calculations to convert currencies based on the user's input. It updates the DOM to display the conversion result dynamically.</li>

<li>Icon Files: The icon files (typically in formats like PNG or SVG) represent the visual identity of the extension. These icons are used to identify the extension in the browser's toolbar or extension management page. They provide a visual cue for users to recognize and access the extension easily.</li>

<li>JSON Files: JSON files can be used to store data, such as exchange rates or currency symbols, which are necessary for currency conversion. These files can be loaded by the JavaScript code to retrieve the required data during the conversion process.</li>

When all these components come together, the extension functions as follows:

<li>The user clicks on the extension's icon in the browser toolbar, triggering the extension's popup window to appear.</li>
<li>The HTML, CSS, and JavaScript files are loaded, rendering the user interface within the popup window.</li>
<li>The user enters an amount to convert and selects the source and target currencies from the provided dropdown menus.</li>
<li>The JavaScript code retrieves the user input and triggers the currency conversion process.</li>
<li>The conversion logic, which may involve fetching exchange rates from an API or using data stored in a JSON file, calculates the converted amount.</li>
<li>The JavaScript code updates the DOM, displaying the converted amount in the designated label or other appropriate element.</li>
<li>The user can view the conversion result within the popup window and perform additional conversions if needed.</li>
By combining these technologies and files, we've created a custom currency conversion extension that simplifies the process of converting currencies, making it more convenient and efficient for users engaging in online shopping or dealing with foreign currencies.

#### usage:
Enter the amount and select the unit (eg: USD) and select the unit to be cnverted, then click "convert".

#### How to install:
<li>Download the files</li>
<li>Open a browser</li>
<li>Open Extensions from more tools</li>
<li>Enable developer mode</li>
<li>Select load unpacked </li>
<li>Select the downloaded folder</li>
<li>Extension is added to your browser </li>
<li>Use it whenever you need to check exchange rates!!!!!!</li>
