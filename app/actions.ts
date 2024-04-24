import { SessionData } from "./lib";
import { defaultSession, sessionOptions, sleep } from "./lib";
import { getIronSession, IronSession } from "iron-session";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export async function getSession(shouldSleep = true) {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  return session;
}


export async function logout() {
  "use server";

  const session = await getSession(false);
  session.destroy();
  await session.save();
  console.log('Successfully logged out')
  revalidatePath("/");
}

export async function getUserID() {
  "use server"
  const session = await getSession();
  return session.user.id;
}

export async function login(user : Object, account : Object) {
  "use server";
  const session = await getSession();
  session.user = user;
  session.account = account
  await session.save();
  return session;
}

export async function updateBalance(amount : number) {
  "use server";

  const session = await getSession();
  session.user.balance -= amount;
  await session.save();
}