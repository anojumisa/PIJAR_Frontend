import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"


const parseCookies = (cookie: string): Record<string, string> => {
	return cookie.split(";").reduce((res, c) => {
		const [key, val] = c.trim().split("=");
		try {
			return Object.assign(res, { [key]: JSON.parse(val) });
		} catch (e) {
			return Object.assign(res, { [key]: val });
		}
	}, {});
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function set_cookie(name: string, value: string) {
  document.cookie = name +'='+ value +'; Path=/;';
}
export function delete_cookie(name: string) {
  document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

export function get_cookie(cookie: string, name: string) {
  const cookies = parseCookies(cookie);
  return cookies[name];
}