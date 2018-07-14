import more from 'highcharts/highcharts-more.src';
import stock from 'highcharts/modules/stock.src';

export function highchartsModules(): any[] {
    // apply Highcharts Modules to this array
    return [stock, more];
}
