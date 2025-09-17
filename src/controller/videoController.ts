import type { Request, Response, NextFunction } from "express";

export const video = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  const videoPath = req.file.path;
  res.status(200).json({
    success: true,
    videoPath: videoPath,
    fileName: req.file.filename,
    message: "Video uploaded successfully"
  });
};
