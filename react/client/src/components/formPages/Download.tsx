import React from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

import { Wrapper } from '../../styles/Download';

const Download: React.FC<StepProps> = ({ inputs, setInputs, goToPage }) => {
  const savePDF = () => {
    html2canvas(document.getElementById('personalStatementElement') as HTMLElement )
      .then((canvas) => {
        const imgdata = canvas.toDataURL('image/png');
        const doc = new jsPDF();
        //@ts-ignore
        doc.addImage(imgdata, 'PNG', 10, 10);
        setInputs({ ...inputs, pdf: doc})
    });
  }

  const downloadPDF = () => {
    //@ts-ignore
    if (inputs.pdf) {
      //@ts-ignore
      inputs.pdf.save("PS.pdf");
    }
  }

  return (
    <div className='Download'>
      <p>Previewing Final Statement</p>
      <Wrapper id="personalStatementElement">
        <p>October 26th, 2020
        <br></br>
        To Whom It May Concern,

        Thank you so much for taking the time to read my personal statement. My name is Jenna Smith, and I am 27 years old. Recently, I have been working as a security guard for United Federal Credit Union. I have also been attending my local AA meetings regularly.

        Since my last conviction, my life has changed for the better. I am focussing on my sobriety, and being a better parent and partner. I want to make my daughter proud.

        I have been really involved in community service. In particular, I’ve been working with Pauly’s Project. I lead the outreach team, and distribute food to unhoused neighbors throughout the LA area. Also I have been participating in LA Youth Soccer. I mentor young soccer players and provide valuable coaching.

        I am working towards going back to school, so that I can become a social worker. I have been taking night classes at Rosedale Community Center, and I have been shadowing a social worker on Fridays.

        I want to clear my record because I am a different person from who I was when I was convicted. I want to make the world a better place. Clearing my record will help me gain access to better opportunities and set an example for my daughter.

        Sincerely,

        Jenna Smith

        </p>
      </Wrapper>
      <button onClick={savePDF}>Save PDF</button>
      <button onClick={downloadPDF}>Download PDF</button>
      <button onClick={() => goToPage(14)}>BACK</button>
    </div>
  )
}

export default Download;