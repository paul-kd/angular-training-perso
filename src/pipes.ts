import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
  name: 'formatDate',
})
export class FormatDate implements PipeTransform {
  transform(date: Date, locale: string='en') {
    return date.toLocaleDateString(locale)
  }
}


@Pipe({
  name: 'currencypipe'
})
export class CurrencyPipe implements PipeTransform {

  transform(num: Number, value: string = 'usd') {
    return num.toLocaleString(value)
  }

}