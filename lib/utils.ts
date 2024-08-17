import { type ClassValue, clsx } from "clsx";
import {
  addMonths,
  addYears,
  differenceInDays,
  differenceInMonths,
  differenceInYears,
  parseISO,
} from "date-fns";
import { formatDate } from "date-fns/format";
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

export const timeFormat = (createdAt: any) => {
  let formattedDate = "";
  if (createdAt) {
    const now = new Date();
    const messageDate = new Date(createdAt);
    const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);

    if (messageDate > oneHourAgo) {
      formattedDate = formatDate(createdAt, "p");
    } else if (messageDate.toDateString() === now.toDateString()) {
      formattedDate = formatDate(createdAt, "K a");
    } else {
      formattedDate = formatDate(createdAt, "d MMM");
    }
  }
  return formattedDate;
};

export const calculateProfileProgress = (
  forms: any[]
): {
  individualPercentages: { [key: string]: number };
  overallPercentage: number;
} => {
  const individualPercentages: { [key: string]: number } = {};

  forms.forEach((form, index) => {
    const fields = Object.values(form);
    const filledFields = fields.filter((field) => field !== "").length;
    const totalFields = fields.length;
    individualPercentages[`form${index + 1}`] =
      (filledFields / totalFields) * 100;
  });

  const overallFilledFields = forms.reduce(
    (acc, form) =>
      acc + Object.values(form).filter((field) => field !== "").length,
    0
  );
  const overallTotalFields = forms.reduce(
    (acc, form) => acc + Object.values(form).length,
    0
  );
  const overallPercentage = (overallFilledFields / overallTotalFields) * 100;

  return { individualPercentages, overallPercentage };
};
