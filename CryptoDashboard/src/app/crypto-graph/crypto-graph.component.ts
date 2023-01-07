import { Component, OnDestroy, OnInit, Input, ViewChild } from '@angular/core';
import { SingleCryptoGraphService } from '../single-crypto-graph.service';
import { Subscription } from 'rxjs';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-crypto-graph',
  templateUrl: './crypto-graph.component.html',
  styleUrls: ['./crypto-graph.component.css']
})
export class CryptoGraphComponent implements OnInit, OnDestroy {

  subscription3: Subscription

  chartInfoTabs: any = {
    date: Array<string>(),
    price: Array<number>(),
  }

  @Input() id = ''

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [{
        data: this.chartInfoTabs.price,
        label: this.id,
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#66FCF1',
        pointHoverBackgroundColor: '#66FCF1',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      }],
      labels: this.chartInfoTabs.date,
    }

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      y:{
          position: 'left',
        },
    },
  };

  public lineChartType: ChartType = 'line';

  constructor(private SingleCryptoGraphService:SingleCryptoGraphService) {
    this.subscription3 = Subscription.EMPTY;
    this.id = "none";
  }

  ngOnInit(): void {
    this.subscription3.unsubscribe()

    this.subscription3 = this.SingleCryptoGraphService.HistoricalChart(this.id,"eur",30).subscribe(
      (data) => {
        this.chartInfoTabs.date = data.date;
        this.chartInfoTabs.price = data.price;
        this.lineChartData = {
          datasets: [{
            data: this.chartInfoTabs.price,
            label: this.id,
            backgroundColor: 'rgba(102,252,241,0.2)',
            borderColor: '#45A29E',
            pointBackgroundColor: '#66FCF1',
            pointBorderColor: '#45A29E',
            pointHoverBackgroundColor: '#66FCF1',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)',
            fill: 'origin',
          }],
          labels: this.chartInfoTabs.date,
        }
      }
    );
  }

  ngOnDestroy() {
    this.subscription3.unsubscribe()

    this.chartInfoTabs.date.length = 0;
    this.chartInfoTabs.price.length = 0;
  }

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }
}
