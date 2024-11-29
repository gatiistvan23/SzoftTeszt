import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string, key: string): any[] {
    if (!items) return[];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter(it => {
      const value = item[key]?.toString().toLowerCase();
      return value?.includes(searchText);
  });
}

}
