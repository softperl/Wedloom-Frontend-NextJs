import { type ClassValue, clsx } from "clsx";
import {
  addMonths,
  addYears,
  differenceInDays,
  differenceInMonths,
  differenceInYears,
  parseISO,
} from "date-fns";
import toast from "react-hot-toast";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const NumberWithCommas = (x: any) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export function handelError(error: any) {
  console.log(error);
  toast.error(
    error.response?.data?.message ||
      error.response?.data?.msg ||
      error.message ||
      "Something went wrong"
  );
}

export const slugify = (title: string): string => {
  return title
    .toLowerCase() // Convert to lowercase
    .trim() // Remove leading and trailing whitespace
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-"); // Replace multiple hyphens with a single hyphen
};

export const removeHyphen = (value: string | undefined) => {
  return value?.replace(/-/g, " ").toLowerCase();
};

export const calculateTimeRemaining = (eventDateString: any) => {
  // Parse the event date string to a Date object
  const eventDate = parseISO(eventDateString);
  const today = new Date();

  // Calculate the differences
  const years = differenceInYears(eventDate, today);
  const months = differenceInMonths(eventDate, addYears(today, years));
  const days = differenceInDays(
    eventDate,
    addYears(addMonths(today, months), years)
  );

  return {
    years,
    months,
    days,
  };
};
