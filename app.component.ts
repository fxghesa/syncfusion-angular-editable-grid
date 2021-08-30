import { Component, OnInit } from '@angular/core';
import { orderDetails } from './data';
import { EditService, ToolbarService, PageService, SaveEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    providers: [ToolbarService, EditService, PageService]
})
export class AppComponent {
    public data: Object[];
    public editSettings: Object;
    public toolbar: string[];
    public orderidrules: Object;
    public customeridrules: Object;
    public freightrules: Object;
    public pageSettings: Object;
    public editparams: Object;
    data2 = [
        {
           "OrderID":10248,
           "CustomerID":"VINET",
           "OrderDate":"1996-07-04T00:00:00.000Z",
           "ShippedDate":"1996-07-16T00:00:00.000Z",
           "Freight":32.38,
           "ShipName":"Vins et alcools Chevalier",
           "ShipAddress":"59 rue de l'Abbaye",
           "ShipCity":"Reims",
           "ShipRegion":null,
           "ShipCountryId":"game1",
           "ShipCountryDesc":"Badminton"
        },
        {
           "OrderID":10249,
           "CustomerID":"TOMSP",
           "OrderDate":"1996-07-05T00:00:00.000Z",
           "ShippedDate":"1996-07-10T00:00:00.000Z",
           "Freight":11.61,
           "ShipName":"Toms Spezialitäten",
           "ShipAddress":"Luisenstr. 48",
           "ShipCity":"Münster",
           "ShipRegion":null,
           "ShipCountryId":"game2",
           "ShipCountryDesc":"Football"
        },
    ];
    public dldata: any[] = [ { Id: 'game1', Game: 'Badminton' },
             { Id: 'game2', Game: 'Football' }, { Id: 'game3', Game: 'Tennis' }];
    public fields: Object = { text: 'Game', value: 'Id' };
    selected: string = '';

    public ngOnInit(): void {
        this.data = this.data2;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal'};
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.orderidrules = { required: true, number: true };
        this.customeridrules = { required: false };
        this.freightrules =  { required: true };
        this.editparams = { params: { popupHeight: '150px' }};
    }

    actionBegin(args: SaveEventArgs) {
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {

        }
        if (args.requestType === 'save') {
            const ShipCountryDesc = 'ShipCountryDesc';
            args.data[ShipCountryDesc] = this.dldata.find(x => x.Id === this.selected).Game;
            console.log(this.selected);
            
            console.log(this.dldata);
            console.log(this.dldata.find(x => x.Id === this.selected).Game);
            console.log(args);
        }
    }
}
