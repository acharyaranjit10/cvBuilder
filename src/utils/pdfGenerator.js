// src/utils/pdfGenerator.js
import html2pdf from 'html2pdf.js';

export const generatePDF = (cvData) => {
  // Create a temporary element to hold the CV content
  const element = document.createElement('div');
  element.innerHTML = document.querySelector('#cv-preview').innerHTML;
  
  // Set the element to be invisible
  element.style.position = 'absolute';
  element.style.left = '-9999px';
  document.body.appendChild(element);

  // Options for PDF generation
  const opt = {
    margin: 10,
    filename: `${cvData.personalInfo.firstName}_${cvData.personalInfo.lastName}_CV.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
  };

  // Generate PDF
  html2pdf().from(element).set(opt).save().then(() => {
    // Remove the temporary element
    document.body.removeChild(element);
  });
};