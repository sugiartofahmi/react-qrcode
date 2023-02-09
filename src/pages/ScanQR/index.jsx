import MainLayout from "../../layouts/MainLayout";
import ContentLayout from "../../layouts/ContentLayout";
import { BiScan } from "react-icons/bi";
import { QrReader } from "react-qr-reader";
import { useState, useRef } from "react";
const ScanQR = () => {
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [scanResultFile, setScanResultFile] = useState("");
  const [scanResultWebCam, setScanResultWebCam] = useState("");

  const qrRef = useRef(null);

  const generateQrCode = async () => {
    try {
      const response = await QRCode.toDataURL(text);
      setImageUrl(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleErrorFile = (error) => {
    console.log(error);
  };
  const handleScanFile = (result) => {
    if (result) {
      setScanResultFile(result);
    }
  };
  const onScanFile = () => {
    qrRef.current.openImageDialog();
  };
  const handleErrorWebCam = (error) => {
    console.log(error);
  };
  const handleScanWebCam = (result) => {
    if (result) {
      setScanResultWebCam(result);
    }
  };
  return (
    <MainLayout>
      <ContentLayout>
        <div className="flex flex-col gap-y-7 justify-center items-center">
          <BiScan onClick={onScanFile} size={70} />
          <QrReader
            ref={qrRef}
            delay={300}
            style={{ width: "100%" }}
            onError={handleErrorFile}
            onScan={handleScanFile}
            legacyMode
          />
          <h3>Scanned Code: {scanResultFile}</h3>
          <QrReader
            delay={300}
            style={{ width: "100%" }}
            onError={handleErrorWebCam}
            onScan={handleScanWebCam}
          />
          <h3>Scanned By WebCam Code: {scanResultWebCam}</h3>
        </div>
      </ContentLayout>
    </MainLayout>
  );
};
export default ScanQR;
