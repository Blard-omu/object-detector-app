import { AxiosError } from "axios";

interface BackendError {
  message?: string;
  error?: string;
}

export const extractBackendError = (error: unknown, fallback: string): string => {
  const err = error as AxiosError<BackendError>;
  return err?.response?.data?.message || err?.response?.data?.error || fallback;
};

export const formatTimestamp = (timestamp: string): string => {
  const now = new Date();
  const messageDate = new Date(timestamp);

  // If the message was sent today
  if (now.toDateString() === messageDate.toDateString()) {
    return `Today, ${messageDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
  }

  // If the message was sent yesterday
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  if (yesterday.toDateString() === messageDate.toDateString()) {
    return `Yesterday, ${messageDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
  }

  // Return the full date and time
  return messageDate.toLocaleString([], { dateStyle: "short", timeStyle: "short" });
};



