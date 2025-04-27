import { InputEventInterface, EventInterface } from "../interface";
import { BaseRepository } from "./baseRepository";

export class EventRepository extends BaseRepository<InputEventInterface, EventInterface>{
  constructor() {
    super("events");
  }
}