import MainLayout from "../../layouts/MainLayout";
import ContentLayout from "../../layouts/ContentLayout";
import { BiScan } from "react-icons/bi";
import { useState } from "react";
import { useZxing } from "react-zxing";

const ScanQR = () => {
  const [result, setResult] = useState("");

  const { ref } = useZxing({
    onResult(result) {
      setResult(result.getText());
    },
  });
  return (
    <MainLayout>
      <ContentLayout>
        <video ref={ref} />
        <p>
          <span>Last result:</span>
          <span>{result}</span>
        </p>
      </ContentLayout>
    </MainLayout>
  );
};
export default ScanQR;
