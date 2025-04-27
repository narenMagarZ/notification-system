import { ObjectSchema, ValidationOptions } from "joi";
import { NextFunction, Request, Response } from "express";

class Validator {
  private static instance: Validator;
  private static validationOptions: ValidationOptions;
  private constructor() {
    Validator.validationOptions = {
      abortEarly: true,
      allowUnknown: false,
      stripUnknown: false
    }
  }

  static get() {
    if(!Validator.instance) {
      Validator.instance = new Validator();
    }
    return Validator.instance;
  }

  public validate(schema: ObjectSchema, input: object) {
    return (req: Request, res: Response, next: NextFunction) => {
      const { error } = schema.validate(input, Validator.validationOptions);
      if(error) throw error;
      next();
    }
  }

}

const validator = Validator.get();
export { validator as Validator };