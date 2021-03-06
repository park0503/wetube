import routes from "./routes";
import multer from "multer";

const multerVideo = multer({ dest: "uploads/videos/" });

export const localsMiddleWare = (req, res, next) => {
  res.locals.siteName = "Wetube";
  res.locals.routes = routes;
  res.locals.user = req.user || {};
  next();
};

export const uploadVideo = multerVideo.single("videoFile");
