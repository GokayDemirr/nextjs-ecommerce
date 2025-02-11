import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import UndoIcon from "@mui/icons-material/Undo";
import ShieldIcon from "@mui/icons-material/Shield";

const TrustBadges = () => {
  return (
    <div className="max-w-screen-xl pt-20 w-full">
      <div className="flex  justify-between gap-4">
        <div className="flex flex-col items-center text-center gap-2 w-1/4">
          <LocalShippingIcon fontSize="large" className="text-gray-600" />
          <div className="font-semibold text-md">FREE SHIPPING</div>
          <div className="text-md break-words">
            Free shipping on all Turkey orders
          </div>
        </div>
        <div className="flex flex-col items-center text-center gap-2 w-1/4">
          <SupportAgentIcon fontSize="large" className="text-gray-600" />
          <div className="font-semibold text-md">SUPPORT 24/7</div>
          <div className="text-md break-words">
            Contact us 24 hours a day, 7 days a week
          </div>
        </div>
        <div className="flex flex-col items-center text-center gap-2 w-1/4">
          <UndoIcon fontSize="large" className="text-gray-600" />
          <div className="font-semibold text-md">30 DAYS RETURN</div>
          <div className="text-md break-words">
            Return it within 30 days for an exchange.
          </div>
        </div>
        <div className="flex flex-col items-center text-center gap-2 w-1/4">
          <ShieldIcon fontSize="large" className="text-gray-600" />
          <div className="font-semibold text-md">100% PAYMENT SECURE</div>
          <div className="text-md break-words">We ensure secure payment</div>
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;
