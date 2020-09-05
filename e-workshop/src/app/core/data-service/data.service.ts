import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class DataService {
  dataObservable = new BehaviorSubject<any>([]);
  data = this.dataObservable.asObservable()

  setData(data: any) {
    // console.log(data)
    this.dataObservable.next(data)
  }
}