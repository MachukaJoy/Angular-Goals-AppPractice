export class Goal {
  // id: number | undefined;
  // name: String | undefined;
  // description: String | undefined;

  
  // showDescription: boolean;
  public showDescription:boolean;
  constructor(public id: number, public name:string, public description: string, public completeDate: Date){
    this.showDescription=false;
  }
}
