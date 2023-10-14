class MD5 {
  private static readonly S: number[] = [
    0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476,
  ];

  private static F(X: number, Y: number, Z: number): number {
    return (X & Y) | (~X & Z);
  }

  private static G(X: number, Y: number, Z: number): number {
    return (X & Z) | (Y & ~Z);
  }

  private static H(X: number, Y: number, Z: number): number {
    return X ^ Y ^ Z;
  }

  private static I(X: number, Y: number, Z: number): number {
    return Y ^ (X | ~Z);
  }

  private static ROTATE_LEFT(x: number, n: number): number {
    return (x << n) | (x >>> (32 - n));
  }

  private static FF(
    a: number,
    b: number,
    c: number,
    d: number,
    x: number,
    s: number,
    ac: number
  ): number {
    a += MD5.F(b, c, d) + x + ac;
    a = MD5.ROTATE_LEFT(a, s);
    return a + b;
  }

  private static GG(
    a: number,
    b: number,
    c: number,
    d: number,
    x: number,
    s: number,
    ac: number
  ): number {
    a += MD5.G(b, c, d) + x + ac;
    a = MD5.ROTATE_LEFT(a, s);
    return a + b;
  }

  private static HH(
    a: number,
    b: number,
    c: number,
    d: number,
    x: number,
    s: number,
    ac: number
  ): number {
    a += MD5.H(b, c, d) + x + ac;
    a = MD5.ROTATE_LEFT(a, s);
    return a + b;
  }

  private static II(
    a: number,
    b: number,
    c: number,
    d: number,
    x: number,
    s: number,
    ac: number
  ): number {
    a += MD5.I(b, c, d) + x + ac;
    a = MD5.ROTATE_LEFT(a, s);
    return a + b;
  }

  private static padding(message: string): Uint8Array {
    const bitLength = message.length * 8;
    const bufferLength = ((bitLength + 64) >>> 9) << 4;
    const buffer = new Uint8Array(bufferLength);
    for (let i = 0; i < message.length; i++) {
      buffer[i] = message.charCodeAt(i) & 0xff;
    }
    buffer[bitLength >>> 5] |= 0x80 << bitLength % 32;
    buffer[(((bitLength + 64) >>> 9) << 4) - 14] = bitLength;
    return buffer;
  }

  public static hash(message: string): string {
    const buffer = MD5.padding(message);
    const words = new Uint32Array(buffer.buffer);

    let a = MD5.S[0];
    let b = MD5.S[1];
    let c = MD5.S[2];
    let d = MD5.S[3];

    for (let i = 0; i < words.length; i += 16) {
      const oldA = a;
      const oldB = b;
      const oldC = c;
      const oldD = d;

      a = MD5.FF(a, b, c, d, words[i], 7, 0xd76aa478);
      d = MD5.FF(d, a, b, c, words[i + 1], 12, 0xe8c7b756);
      c = MD5.FF(c, d, a, b, words[i + 2], 17, 0x242070db);
      b = MD5.FF(b, c, d, a, words[i + 3], 22, 0xc1bdceee);
      a = MD5.FF(a, b, c, d, words[i + 4], 7, 0xf57c0faf);
      d = MD5.FF(d, a, b, c, words[i + 5], 12, 0x4787c62a);
      c = MD5.FF(c, d, a, b, words[i + 6], 17, 0xa8304613);
      b = MD5.FF(b, c, d, a, words[i + 7], 22, 0xfd469501);
      a = MD5.FF(a, b, c, d, words[i + 8], 7, 0x698098d8);
      d = MD5.FF(d, a, b, c, words[i + 9], 12, 0x8b44f7af);
      c = MD5.FF(c, d, a, b, words[i + 10], 17, 0xffff5bb1);
      b = MD5.FF(b, c, d, a, words[i + 11], 22, 0x895cd7be);
      a = MD5.FF(a, b, c, d, words[i + 12], 7, 0x6b901122);
      d = MD5.FF(d, a, b, c, words[i + 13], 12, 0xfd987193);
      c = MD5.FF(c, d, a, b, words[i + 14], 17, 0xa679438e);
      b = MD5.FF(b, c, d, a, words[i + 15], 22, 0x49b40821);

      a = MD5.GG(a, b, c, d, words[i + 1], 5, 0xf61e2562);
      d = MD5.GG(d, a, b, c, words[i + 6], 9, 0xc040b340);
      c = MD5.GG(c, d, a, b, words[i + 11], 14, 0x265e5a51);
      b = MD5.GG(b, c, d, a, words[i], 20, 0xe9b6c7aa);
      a = MD5.GG(a, b, c, d, words[i + 5], 5, 0xd62f105d);
      d = MD5.GG(d, a, b, c, words[i + 10], 9, 0x02441453);
      c = MD5.GG(c, d, a, b, words[i + 15], 14, 0xd8a1e681);
      b = MD5.GG(b, c, d, a, words[i + 4], 20, 0xe7d3fbc8);
      a = MD5.GG(a, b, c, d, words[i + 9], 5, 0x21e1cde6);
      d = MD5.GG(d, a, b, c, words[i + 14], 9, 0xc33707d6);
      c = MD5.GG(c, d, a, b, words[i + 3], 14, 0xf4d50d87);
      b = MD5.GG(b, c, d, a, words[i + 8], 20, 0x455a14ed);
      a = MD5.GG(a, b, c, d, words[i + 13], 5, 0xa9e3e905);
      d = MD5.GG(d, a, b, c, words[i + 2], 9, 0xfcefa3f8);
      c = MD5.GG(c, d, a, b, words[i + 7], 14, 0x676f02d9);
      b = MD5.GG(b, c, d, a, words[i + 12], 20, 0x8d2a4c8a);

      a = MD5.HH(a, b, c, d, words[i + 5], 4, 0xfffa3942);
      d = MD5.HH(d, a, b, c, words[i + 8], 11, 0x8771f681);
      c = MD5.HH(c, d, a, b, words[i + 11], 16, 0x6d9d6122);
      b = MD5.HH(b, c, d, a, words[i + 14], 23, 0xfde5380c);
      a = MD5.HH(a, b, c, d, words[i + 1], 4, 0xa4beea44);
      d = MD5.HH(d, a, b, c, words[i + 4], 11, 0x4bdecfa9);
      c = MD5.HH(c, d, a, b, words[i + 7], 16, 0xf6bb4b60);
      b = MD5.HH(b, c, d, a, words[i + 10], 23, 0xbebfbc70);
      a = MD5.HH(a, b, c, d, words[i + 13], 4, 0x289b7ec6);
      d = MD5.HH(d, a, b, c, words[i], 11, 0xeaa127fa);
      c = MD5.HH(c, d, a, b, words[i + 3], 16, 0xd4ef3085);
      b = MD5.HH(b, c, d, a, words[i + 6], 23, 0x04881d05);
      a = MD5.HH(a, b, c, d, words[i + 9], 4, 0xd9d4d039);
      d = MD5.HH(d, a, b, c, words[i + 12], 11, 0xe6db99e5);
      c = MD5.HH(c, d, a, b, words[i + 15], 16, 0x1fa27cf8);
      b = MD5.HH(b, c, d, a, words[i + 2], 23, 0xc4ac5665);

      a = MD5.II(a, b, c, d, words[i], 6, 0xf4292244);
      d = MD5.II(d, a, b, c, words[i + 7], 10, 0x432aff97);
      c = MD5.II(c, d, a, b, words[i + 14], 15, 0xab9423a7);
      b = MD5.II(b, c, d, a, words[i + 5], 21, 0xfc93a039);
      a = MD5.II(a, b, c, d, words[i + 12], 6, 0x655b59c3);
      d = MD5.II(d, a, b, c, words[i + 3], 10, 0x8f0ccc92);
      c = MD5.II(c, d, a, b, words[i + 10], 15, 0xffeff47d);
      b = MD5.II(b, c, d, a, words[i + 1], 21, 0x85845dd1);
      a = MD5.II(a, b, c, d, words[i + 8], 6, 0x6fa87e4f);
      d = MD5.II(d, a, b, c, words[i + 15], 10, 0xfe2ce6e0);
      c = MD5.II(c, d, a, b, words[i + 6], 15, 0xa3014314);
      b = MD5.II(b, c, d, a, words[i + 13], 21, 0x4e0811a1);
      a = MD5.II(a, b, c, d, words[i + 4], 6, 0xf7537e82);
      d = MD5.II(d, a, b, c, words[i + 11], 10, 0xbd3af235);
      c = MD5.II(c, d, a, b, words[i + 2], 15, 0x2ad7d2bb);
      b = MD5.II(b, c, d, a, words[i + 9], 21, 0xeb86d391);

      a += oldA;
      b += oldB;
      c += oldC;
      d += oldD;
    }

    const md5 = [a, b, c, d].map((v) => {
      return ((v < 0 ? 0x100000000 + v : v) >>> 0).toString(16);
    });

    return md5.join("");
  }
}

export default MD5;
