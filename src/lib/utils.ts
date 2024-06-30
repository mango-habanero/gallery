import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"
import {type Metadata} from "next";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const metadata = {
  authors: [{ name: 'Mango Habanero', url: 'https://mango-habanero.dev/' }],
  title: "Gallery",
  description: "A gallery application.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
} satisfies Metadata;