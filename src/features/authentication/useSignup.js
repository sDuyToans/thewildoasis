import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiUsers.js";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (data) => {
      console.log(data);
      toast.success(
        "Account success fully created. Please verify account from the user's email address",
      );
    },
  });
  return { signup, isLoading };
}
