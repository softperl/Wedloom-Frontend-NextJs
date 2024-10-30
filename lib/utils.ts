import { type ClassValue, clsx } from "clsx";
import { getCookie } from "cookies-next";
import {
  addMonths,
  addYears,
  differenceInDays,
  differenceInMonths,
  differenceInYears,
  formatDistanceToNow,
  parseISO,
} from "date-fns";
import { formatDate } from "date-fns/format";
import { convertFromRaw } from "draft-js";
import toast from "react-hot-toast";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const NumberWithCommas = (x: any) => {
  return x?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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

// Function to extract video ID from various YouTube URL formats
export const extractVideoId = (url: string): string | null => {
  const regex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

// Function to check if the URL is a valid YouTube URL
export const isYouTubeUrl = (url: string) => {
  const regex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
  return regex.test(url);
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

export const uploadFiles = async (files: any[], dir: string = "others") => {
  if (!files) {
    return false;
  }
  const formData = new FormData();
  files.forEach((file: string | Blob) => {
    formData.append("files", file);
  });
  formData.append("dir", dir);
  const accessToken = getCookie("accessToken");
  const refreshToken = getCookie("refreshToken");
  const requestOptions: any = {
    method: "POST",
    body: formData,
    redirect: "follow",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "x-refresh-token": refreshToken,
    },
  };
  try {
    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/upload`,
      requestOptions
    );
    const data = await resp.json();
    const { files } = data;
    return files;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const formNow = (date: any) => {
  const value = formatDistanceToNow(date, {
    addSuffix: true,
  }).replace(/^about /, "");
  return value;
};

export const draftJsToMarkdown = (rawContent: any) => {
  const contentState = convertFromRaw(rawContent);
  let markdown = "";

  contentState.getBlocksAsArray().forEach((block) => {
    const text = block.getText();
    switch (block.getType()) {
      case "header-one":
        markdown += `# ${text}\n\n`;
        break;
      case "header-two":
        markdown += `## ${text}\n\n`;
        break;
      case "unordered-list-item":
        markdown += `- ${text}\n`;
        break;
      case "ordered-list-item":
        markdown += `1. ${text}\n`;
        break;
      default:
        markdown += `${text}\n\n`;
        break;
    }
  });
  return markdown;
};
