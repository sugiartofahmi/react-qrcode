import MainLayout from "../../layouts/MainLayout";
import ContentLayout from "../../layouts/ContentLayout";
import { useState } from "react";
import QRcode from "react-qr-code";
import { BsDownload } from "react-icons/bs";
const GenerateQR = () => {
  const [qr, setQr] = useState("Fahmi Sugiarto");
  const inputQrContent = (e) => {
    setQr(e.target.value);
  };
  const downloadQR = () => {
    const svg = document.getElementById("QRCode");
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = `${qr}`;
      downloadLink.href = `${pngFile}`;
      downloadLink.click();
    };
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  };
  return (
    <MainLayout>
      <ContentLayout>
        <div className="flex flex-col gap-y-3 mb-10">
          <label className="block text-sm font-medium">QR Content</label>

          <input
            onChange={inputQrContent}
            value={qr}
            type="text"
            placeholder="Input To Generate QR Code"
            className="p-2 w-full rounded-md ion-200 border-2 border-gray-200 focus:outline-2 outline-blue-600 shadow-sm sm:text-sm"
          />
        </div>
        {qr ? (
          <div className=" flex flex-col justify-center items-center gap-y-10">
            <QRcode id="QRCode" value={qr} size={150} />
            <BsDownload
              onClick={downloadQR}
              className="cursor-pointer"
              size={30}
            />
          </div>
        ) : (
          <h1>Input QR Content</h1>
        )}
      </ContentLayout>
    </MainLayout>
  );
};
export default GenerateQR;
