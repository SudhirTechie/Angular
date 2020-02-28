import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  displayData: any;
  

  public setDisplayData(displayData: any) {
    this.displayData = displayData;
}

public getDisplayData() {
    return this.displayData;
}

}
