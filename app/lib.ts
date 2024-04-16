import { SessionOptions } from "iron-session";

export interface SessionData {
  user : Object
  account : Object
}

export const defaultSession: SessionData = {
    user : {},
    account : {}
};

export const sessionOptions: SessionOptions = {
  password: "fjeiwqopfhdiosapf4839pyhf8eid9paophfg48iu319poyhfdi8s9oappfhy4328i2u9qopfhyds8iq9oprffewa",
  cookieName: "jobify-session",
    cookieOptions: {
        secure: false,
    },
};

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getUserID() {
    return await fetch("/api/getUserID", {
        method: "GET",
    }).then((res) => {
        if (res.ok) {
            return res.json();
        }
        throw new Error("Error getting user id");
    });
}