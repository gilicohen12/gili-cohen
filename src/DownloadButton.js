import React from 'react';

const DownloadButton = () => {
  const handleDownload = () => {
    // Adjust the path to your PDF file using PUBLIC_URL
    const pdfPath = `${process.env.PUBLIC_URL}/GiliCohenResumeF2024.pdf`;

    // Create a link element
    const link = document.createElement('a');
    link.href = pdfPath;
    link.target = '_blank';
    link.download = 'GiliCohenResumeF2024.pdf'; // Set the desired file name

    // Dispatch a click event on the link
    document.body.appendChild(link);
    link.click();

    // Remove the link from the DOM
    document.body.removeChild(link);
  };

  return (
    <button className="download-button" onClick={handleDownload}>
      Download Resume
    </button>
  );
};

export default DownloadButton;
