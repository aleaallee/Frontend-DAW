import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroFabricante',
})
export class FabricantePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value) return null;
    if (!args) return value;

    return value.filter(function (data: any) {
      // console.log(data, ' - ', args);
      return args != '' ? data.fabricante == args : true;
    });
  }
}
