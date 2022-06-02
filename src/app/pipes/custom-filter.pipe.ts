import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {

  transform(objs:any,x:string) {
    //console.log("here my ");

//     for (let i = 0; i < objs.length; i++) {
//       if ((objs[i].teamOne == x)  ||
//       (objs[i].teamTwo == x) ) {
//         this.findedMatches.push(objs[i]);
//       }
// return this.findedMatches.push();
//     } ///meth1

if(x === undefined){
  return objs;
}
///objs: tableu l kbir
//obj: lobjet ml tab
return(objs.filter(obj =>{
  return (obj.teamOne.toLowerCase().includes(x.toLowerCase()))
   || (obj.teamTwo.toLowerCase().includes(x.toLowerCase()))
}
))
}

}
