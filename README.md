# PDF Download Library with Korean Support

## Overview

A comprehensive library for generating PDF downloads with built-in Korean language support. The library leverages **html2canvas** for HTML-to-image conversion and integrates seamlessly with PDF generation. Features the **Nanum Gothic** font for optimal Korean text rendering.

## Features

- **Korean Language Support**: Optimized Korean character rendering using Nanum Gothic font
- **HTML to PDF Conversion**: Reliable HTML element conversion via **html2canvas**
- **Customizable UI Components**: Flexible button components with various styling options
- **Storybook Integration**: Built-in component testing and visualization

## Installation

```bash
npm install pdf-korean-download
```

## Usage

Import the library:

```javascript
import PdfDownloadButton from 'pdf-korean-download';
```

Example implementation:

```javascript
import React from 'react';
import PdfDownloadButton from 'pdf-korean-download';

const App = () => {
  const content = '<h1>안녕하세요! 한글 PDF 테스트입니다.</h1>';

  return (
    <PdfDownloadButton
      text="PDF 다운로드"
      fileName="example.pdf"
      content={content}
      style={{
        fontSize: 12,
        lineHeight: 1.5,
        margin: 20
      }}
      variant="primary"
      size="md"
    />
  );
};

export default App;
```

## Storybook Integration

Run Storybook for component testing:

```bash
npm run storybook
```

## Dependencies

- **html2canvas**: HTML-to-image conversion
- **jspdf**: PDF generation

## License

MIT License

## Contributing

We welcome contributions! Please submit pull requests or report issues through our GitHub repository.

## Author

Developed by 9bfish8 (Godeungeo)
