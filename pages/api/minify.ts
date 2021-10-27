import { minify } from "terser";
import { NextApiRequest, NextApiResponse } from "next";
import * as ts from "typescript";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body ? JSON.parse(req.body) : null;

  // ...

  if (body) {
    const transpiled = ts.transpileModule(body, {}).outputText;
    const minifed = await minify(transpiled);
    res.status(200).json(minifed);
  }

  // ...

  res.status(404).end();
}
