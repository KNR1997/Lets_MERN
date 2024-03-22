import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../../api-client";
import { useAppContext } from "../../contexts/AppContext";
import Modal from "../Modal";
import { useState } from "react";

const SignOutButton = () => {
  const [open, setOpen] = useState(false)
  const queryClient = useQueryClient();
  const { showToast } = useAppContext();

  const mutation = useMutation(apiClient.signOut, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
      showToast({ message: "Signed Out!", type: "SUCCESS" });
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const handleClick = () => {
    mutation.mutate();
  };

  const openDeleteModel = () => {
    setOpen(true);
  }

  return (
    <div>
      <button
        // onClick={handleClick}
        onClick={openDeleteModel}
        className="bg-red-800 text-white  px-6 py-2 rounded-full"
      >
        Sign Out
      </button>
      <Modal open={open} onConfirm={handleClick} onClose={() => setOpen(false)} />
    </div>
  );
};

export default SignOutButton;
