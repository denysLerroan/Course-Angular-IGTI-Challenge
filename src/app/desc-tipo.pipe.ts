import { Pipe, PipeTransform } from '@angular/core';
import { SenatorsService } from './senators.service';

@Pipe({
  name: 'descTipo',
})
export class DescTipoPipe implements PipeTransform {
  constructor(private despesasService: SenatorsService) {}

  transform(value: number): unknown {
    return this.despesasService.formataTipo(value);
  }
}
