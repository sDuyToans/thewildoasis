import Button from "../../ui/Button.jsx";
import { useCheckout } from "./useCheckout.js";

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingOut } = useCheckout();
  function handleCheckout() {
    checkout(bookingId);
  }
  return (
    <Button
      variation="primary"
      size="small"
      onClick={handleCheckout}
      disabled={isCheckingOut}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
