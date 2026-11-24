const ACCOUNTS_KEY = "pet-care-website:accounts:v1";
const SESSION_KEY = "pet-care-website:session:v1";
const PASSWORD_ITERATIONS = 150_000;

export const DEMO_ACCOUNT = {
  name: "Demo User",
  email: "demo@petcare.local",
  password: "PetCare123!",
};

function getLocalStorage() {
  if (typeof window === "undefined") {
    throw new Error("Sign-in is only available in a browser.");
  }

  return window.localStorage;
}

function normalizeEmail(email) {
  return email.trim().toLowerCase();
}

function readAccounts() {
  const rawAccounts = getLocalStorage().getItem(ACCOUNTS_KEY);

  if (rawAccounts === null) {
    return [];
  }

  let accounts;
  try {
    accounts = JSON.parse(rawAccounts);
  } catch {
    throw new Error(
      "Saved account data is invalid. Clear this site's browser data and register again."
    );
  }

  if (
    !Array.isArray(accounts) ||
    accounts.some(
      (account) =>
        !account ||
        typeof account.name !== "string" ||
        typeof account.email !== "string" ||
        typeof account.salt !== "string" ||
        typeof account.passwordHash !== "string"
    )
  ) {
    throw new Error(
      "Saved account data is invalid. Clear this site's browser data and register again."
    );
  }

  return accounts;
}

function toHex(bytes) {
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

function fromHex(value) {
  if (!/^(?:[0-9a-f]{2})+$/i.test(value)) {
    throw new Error("Saved account data is invalid. Please register again.");
  }

  return Uint8Array.from(
    value.match(/.{2}/g),
    (byte) => Number.parseInt(byte, 16)
  );
}

async function hashPassword(password, salt) {
  if (!globalThis.crypto?.subtle) {
    throw new Error(
      "Secure browser storage is unavailable. Use HTTPS or localhost."
    );
  }

  const key = await globalThis.crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveBits"]
  );
  const hash = await globalThis.crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt,
      iterations: PASSWORD_ITERATIONS,
      hash: "SHA-256",
    },
    key,
    256
  );

  return toHex(new Uint8Array(hash));
}

function createSalt() {
  const salt = globalThis.crypto.getRandomValues(new Uint8Array(16));
  return { bytes: salt, encoded: toHex(salt) };
}

function hashesMatch(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  let difference = 0;
  for (let index = 0; index < first.length; index += 1) {
    difference |= first.charCodeAt(index) ^ second.charCodeAt(index);
  }

  return difference === 0;
}

function saveSession(user) {
  try {
    getLocalStorage().setItem(
      SESSION_KEY,
      JSON.stringify({ name: user.name, email: user.email })
    );
  } catch {
    throw new Error(
      "The browser could not save your sign-in. Check its storage settings and try again."
    );
  }
}

export async function signInLocalUser(email, password) {
  const normalizedEmail = normalizeEmail(email);

  if (
    normalizedEmail === DEMO_ACCOUNT.email &&
    password === DEMO_ACCOUNT.password
  ) {
    const user = { name: DEMO_ACCOUNT.name, email: DEMO_ACCOUNT.email };
    saveSession(user);
    return user;
  }

  const account = readAccounts().find(
    (savedAccount) => savedAccount.email === normalizedEmail
  );

  if (!account) {
    throw new Error("Email or password is incorrect.");
  }

  const passwordHash = await hashPassword(password, fromHex(account.salt));
  if (!hashesMatch(passwordHash, account.passwordHash)) {
    throw new Error("Email or password is incorrect.");
  }

  const user = { name: account.name, email: account.email };
  saveSession(user);
  return user;
}

export async function registerLocalUser({ name, email, password }) {
  const normalizedEmail = normalizeEmail(email);
  const accounts = readAccounts();

  if (
    normalizedEmail === DEMO_ACCOUNT.email ||
    accounts.some((account) => account.email === normalizedEmail)
  ) {
    throw new Error("An account with this email already exists.");
  }

  const { bytes: salt, encoded: encodedSalt } = createSalt();
  const account = {
    name: name.trim(),
    email: normalizedEmail,
    salt: encodedSalt,
    passwordHash: await hashPassword(password, salt),
  };

  try {
    getLocalStorage().setItem(
      ACCOUNTS_KEY,
      JSON.stringify([...accounts, account])
    );
  } catch {
    throw new Error(
      "The browser could not save this account. Check its storage settings and try again."
    );
  }

  const user = { name: account.name, email: account.email };
  saveSession(user);
  return user;
}

export function getLocalSession() {
  const rawSession = getLocalStorage().getItem(SESSION_KEY);
  if (rawSession === null) {
    return null;
  }

  let session;
  try {
    session = JSON.parse(rawSession);
  } catch {
    throw new Error(
      "Saved sign-in data is invalid. Sign out by clearing this site's browser data."
    );
  }

  if (
    !session ||
    typeof session.name !== "string" ||
    typeof session.email !== "string"
  ) {
    throw new Error(
      "Saved sign-in data is invalid. Sign out by clearing this site's browser data."
    );
  }

  return session;
}

export function signOutLocalUser() {
  try {
    getLocalStorage().removeItem(SESSION_KEY);
  } catch {
    throw new Error(
      "The browser could not clear your sign-in. Check its storage settings and try again."
    );
  }
}
