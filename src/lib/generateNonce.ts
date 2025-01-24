import crypto from "crypto";

export const generateNonce = (): string => {
  return crypto.randomBytes(16).toString("base64"); // Generate a base64 nonce
};
