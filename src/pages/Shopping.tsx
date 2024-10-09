import { useState, useEffect, useRef } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";

const SAVE_TRANSACTION = gql`
  mutation SaveTransaction(
    $qr_code: String!
    $rf_id: String!
    $price: Float!
    $total_price: Float!
  ) {
    saveTransaction(
      qr_code: $qr_code
      rf_id: $rf_id
      price: $price
      total_price: $total_price
    )
  }
`;

const Shopping = () => {
  const [qrData, setQrData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const qrCodeRegionRef = useRef<HTMLDivElement | null>(null);
  const scannerRef = useRef<Html5QrcodeScanner | null>(null);
  const navigate = useNavigate();

  const [saveTransaction, { loading, error: mutationError }] =
    useMutation(SAVE_TRANSACTION);

  useEffect(() => {
    if (qrCodeRegionRef.current && !scannerRef.current) {
      const scanner = new Html5QrcodeScanner(
        qrCodeRegionRef.current.id,
        {
          fps: 10,
          qrbox: { width: 250, height: 250 },
        },
        false
      );
      scannerRef.current = scanner;

      scanner.render(
        (decodedText) => {
          setQrData(decodedText);
          setError(null);
          scanner.clear();
          scannerRef.current = null;
        },
        () => {
          setError("QR scanning failed. Please try again.");
        }
      );

      return () => {
        if (scannerRef.current) {
          scannerRef.current.clear();
          scannerRef.current = null;
        }
      };
    }
  }, []);

  const handleCheckout = async () => {
    if (!qrData) {
      toast.error("Please scan a QR code before proceeding!");
      return;
    }

    try {
      const { data } = await saveTransaction({
        variables: {
          qr_code: "C001",
          rf_id: "P001",
          price: 1250.0,
          total_price: 1250.0,
        },
      });

      toast.success(data.saveTransaction, {
        position: "top-center",
      });

      navigate("/");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      toast.error("Failed to complete the transaction. Please try again.");
    }
  };

  return (
    <div className="mx-auto mt-8 mb-40">
      <div>
        <h1 className="font-laonoto mt-4 text-center text-xl font-bold">
          Adi Munawar
        </h1>
        <p className="mt-1 text-center text-xl font-medium text-blue-500">
          040-12-00-01166166-001
        </p>
      </div>

      {/* QR Code Scanner */}
      <div className="mt-8 text-center">
        <h2 className="text-lg font-semibold mb-4">Scan QR for Payment</h2>
        <div id="qr-reader" ref={qrCodeRegionRef} />
        {qrData ? (
          <p className="mt-2 text-green-500">QR Data: {qrData}</p>
        ) : (
          <p className="mt-2 text-gray-500">No QR code detected yet</p>
        )}
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>

      <button
        onClick={handleCheckout}
        className="rounded w-full mt-4 px-2 py-3 border border-yellow-400 hover:border-yellow-700 bg-gradient-to-b from-yellow-300 to-yellow-500 hover:from-yellow-400 hover:to-yellow-600"
        disabled={loading}
      >
        {loading ? "Processing..." : "Checkout"}
      </button>

      {mutationError && (
        <p className="text-red-500 mt-2">{mutationError.message}</p>
      )}
    </div>
  );
};

export default Shopping;
