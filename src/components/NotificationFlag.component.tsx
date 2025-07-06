import { toast } from "react-toastify";

interface CreateNotificationParams {
  type: "info" | "success" | "warning" | "error";
  message: string;
}

export const createNotification = ({
  type,
  message,
}: CreateNotificationParams) => {
  switch (type) {
    case "info":
      toast.info(message);
      break;
    case "success":
      toast.success(message);
      break;
    case "warning":
      toast.warning(message);
      break;
    case "error":
      toast.error(message);
      break;
  }
};
