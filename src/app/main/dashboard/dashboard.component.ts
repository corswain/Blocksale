import { StockChart } from 'angular-highcharts';
import * as _ from 'lodash';
import { Subject } from 'rxjs';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { highChartData2 as ohlcData } from './fake-db';
import { locale as english } from './i18n/en';
import { locale as filipino } from './i18n/ph';

@Component({
    selector: 'bok-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
    stock: StockChart;
    widgets: any;
    currencies: any;
    selectedCurrency: any;
    currentOhlc: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     */
    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService
    ) {
        this._fuseTranslationLoaderService.loadTranslations(english, filipino);

        // Set the defaults
        this.currencies = [
            {
                id: 'btc',
                title: 'Bitcoin',
                icon: 'btc'
            },
            {
                id: 'eth',
                title: 'Ethereum',
                icon: 'eth'
            },
            {
                id: 'bch',
                title: 'Bitcoin Cash',
                icon: 'bch'
            },
            {
                id: 'ltc',
                title: 'Litecoin',
                icon: 'ltc'
            },
            {
                id: 'xrp',
                title: 'XRP',
                icon: 'xrp'
            }
        ];

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    ngOnInit(): void {
        this.initHighchart();

        // Set the selected currency
        this.selectedCurrency = _.find(this.currencies, {
            id: 'btc'
        });
    }

    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public and Private Methods
    // -----------------------------------------------------------------------------------------------------

    private initHighchart(): void {
        const ohlc = [];
        const volume = [];
        const dataLength = ohlcData.length;
        const currentDataIndex = dataLength - 1;
        const groupingUnits = [['week', [1]], ['month', [1, 2, 3, 4, 6]]];

        for (let i = 0; i < dataLength; i++) {
            ohlc.push([
                ohlcData[i][0],
                ohlcData[i][1],
                ohlcData[i][2],
                ohlcData[i][3],
                ohlcData[i][4]
            ]);

            volume.push([ohlcData[i][0], ohlcData[i][5]]);
        }

        this.currentOhlc = {
            O: ohlcData[currentDataIndex][1],
            H: ohlcData[currentDataIndex][2],
            L: ohlcData[currentDataIndex][3],
            C: ohlcData[currentDataIndex][4]
        };

        this.stock = new StockChart(<any>{
            rangeSelector: {
                selected: 1
            },

            credits: {
                enabled: false
            },

            yAxis: [
                {
                    labels: {
                        align: 'right',
                        x: -3
                    },
                    title: {
                        text: 'OHLC'
                    },
                    height: '60%',
                    lineWidth: 2,
                    resize: {
                        enabled: true
                    }
                },
                {
                    labels: {
                        align: 'right',
                        x: -3
                    },
                    title: {
                        text: 'Volume'
                    },
                    top: '65%',
                    height: '35%',
                    offset: 0,
                    lineWidth: 2
                }
            ],

            tooltip: {
                split: true
            },

            series: [
                {
                    type: 'candlestick',
                    name: 'Currency',
                    data: ohlc,
                    dataGrouping: {
                        units: groupingUnits
                    }
                },
                {
                    type: 'column',
                    name: 'Volume',
                    data: volume,
                    yAxis: 1,
                    dataGrouping: {
                        units: groupingUnits
                    }
                }
            ]
        });
    }
}
