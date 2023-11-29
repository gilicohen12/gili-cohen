import React from 'react';

const DownloadButton = () => {
  const handleDownload = () => {
    // Adjust the path to your PDF file

    // Create a link element
    const pdfPath = '/Resume_Gili_Cohen_2023.pdf';

    const link = document.createElement('a');
    link.href = pdfPath;
    link.target = '_blank';
    link.download = 'Resume-Gili-Cohen-2023.pdf'; // Set the desired file name

    // Dispatch a click event on the link
    document.body.appendChild(link);
    link.click();

    // Remove the link from the DOM
    document.body.removeChild(link);
  };

  return (
    <button className="download-button" onClick={handleDownload}>
      Download PDF
    </button>
  );
};

export default DownloadButton;
