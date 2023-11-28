// // DownloadButton.js
// import React from 'react';

// const DownloadButton = () => {
//   const handleDownload = () => {
//     const pdfPath = '/Resume.pdf'; // Adjust the path to your PDF file

//     // Create a link element
//     const link = document.createElement('a');
//     link.href = process.env.PUBLIC_URL + pdfPath;
//     link.target = '_blank';
//     link.download = 'Resume.pdf';

//     // Dispatch a click event on the link
//     document.body.appendChild(link);
//     link.click();

//     // Remove the link from the DOM
//     document.body.removeChild(link);
//   };

//   return (
//     <button onClick={handleDownload}>
//       Download PDF
//     </button>
//   );
// };

// export default DownloadButton;
