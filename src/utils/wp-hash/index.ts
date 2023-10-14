import crypto from "crypto";

function md5(string: string, raw: boolean): string {
  const hash = crypto.createHash("md5");
  hash.update(string, "binary");
  if (raw) return hash.digest("binary");
  else return hash.digest("hex");
}

function sixCharRandom(): string {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 6; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
const itoa64 =
  "./0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const iteration_count_log2 = 8;

function crypt_private(password: string, setting: string): string {
  let output = "*0";
  if (setting.substring(0, 2) === output) output = "*1";

  if (setting.substring(0, 3) !== "$P$") return output;

  const count_log2 = itoa64.indexOf(setting[3]);
  if (count_log2 < 7 || count_log2 > 30) return output;

  let count = 1 << count_log2;

  const salt = setting.substring(4, 12);
  if (salt.length !== 8) return output;

  let hash = md5(salt + password, true);
  do {
    hash = md5(hash + password, true);
  } while (--count);

  output = setting.substring(0, 12) + encode64(hash, 16);
  return output;
}

function gensalt_private(input: string): string {
  let output = "$P$";
  output += itoa64[Math.min(iteration_count_log2 + 5, 30)];
  output += encode64(input, 6);
  return output;
}

function encode64(input: string, count: number): string {
  let output = "";
  let i = 0;
  do {
    let value = input.charCodeAt(i++);
    output += itoa64[value & 0x3f];
    if (i < count) value |= input.charCodeAt(i) << 8;
    output += itoa64[(value >> 6) & 0x3f];

    if (i++ >= count) break;
    if (i < count) value |= input.charCodeAt(i) << 16;
    output += itoa64[(value >> 12) & 0x3f];
    if (i++ >= count) break;

    output += itoa64[(value >> 18) & 0x3f];
  } while (i < count);

  return output;
}

function WPHashPassword(password: string): string {
  const salt = gensalt_private(sixCharRandom());
  const hash = crypt_private(password, salt);
  return hash;
}

function CheckPassword(password: string, stored_hash: string): boolean {
  const hash = crypt_private(password, stored_hash);
  return hash === stored_hash;
}

export { WPHashPassword, CheckPassword };
