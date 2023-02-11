import express, { Express, Router } from "express";
import { Response, NextFunction } from "express";
import { expressjwt, Request } from "express-jwt";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import response from "../../ultilities/response";
import common from "./common";
export default (app: Express) => {
  app.use(helmet());
  app.use(cors());
  app.use(express.json());
  app.use(morgan("tiny"));
  const privateRoute = express.Router();

  // privateRoute.use(
  //   expressjwt({ secret: process.env.SECRET_JWT || "", algorithms: ["HS256"] }),
  //   (err: Error, req: Request, res: Response, next: NextFunction) => {
  //     if (err.name === "UnauthorizedError") {
  //       req.auth = undefined;
  //     }
  //     next();
  //   }
  // );

  common(privateRoute);
  app.use("/", privateRoute);

  app.use("*", (req: Request, res: Response) => {
    return response.r404(res, "The route not found");
  });
};
