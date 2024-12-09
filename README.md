# QR Code Converter

The QR Code Converter is a web application designed to generate and download QR codes based on user-provided links. It offers an intuitive interface where users can input a link, select an error correction level, and obtain a corresponding QR code that can be used for various purposes.

## Features

### index.html

- **Input Field**: Users can enter the link they want to convert.
- **Error Correction Dropdown**: Select the desired error correction level (L, M, Q, H), which determines how much damage the QR code can sustain while still being readable.
- **Generate QR Code Button**: Triggers the QR code generation.
- **Download QR Code Button**: Allows users to download the generated QR code.
- **QR Code Display Container**: Where the generated QR code is displayed.

### script.js

- **Event Listeners**: Adds event listeners to the "Generate QR Code" and "Download QR Code" buttons.
- **QR Code Generation**: Validates the input link and generates a QR code using the internal `QRCode` library, following the organization's best practices.
- **QR Code Display**: Displays the generated QR code in the designated container, and enables the "Download" button.
- **QR Code Download**: Creates a temporary link to the QR code image and programmatically triggers a download of the image as `qr_code.png`.

## Usage

This application is used to quickly convert links into QR codes, which can be shared digitally or printed for scanning with mobile devices. It's a practical tool for creating scannable codes for websites, promotional materials, event information, and more. By utilizing standard web technologies and adhering to internal code patterns, it ensures reliability and consistency across different use cases.
