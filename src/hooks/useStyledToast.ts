import { AlertStatus, useToast } from "@chakra-ui/react";
import { MSG_STATUS } from "../constants";
import { Metacode } from "../enum/enum-info";

const useStyledToast = () => {
  const toast = useToast();
  const toastMsg = (title: string, status: AlertStatus) => {
    toast({ title: title, status: status, position: "top-right", isClosable: true })
  }

  const handleToastError = (data: any) => {
    const errorStatus = [Metacode.BAD_REQUEST, Metacode.NOT_FOUND, Metacode.CONFLICT, Metacode.FORBIDDEN]
    if (errorStatus.includes(data?.error?.status)) {
      toastMsg(data?.error?.message, MSG_STATUS.ERROR);
    } else {
      toastMsg("Error", MSG_STATUS.ERROR);
    }
  };
  return { toastMsg, handleToastError };
}

export default useStyledToast;