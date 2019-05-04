import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  items: Array<string>;

  ngOnInit() {
    this.setItems();
  }

  setItems() {
    this.items = ['Petani', 'Lahan', 'Padi', 'Traktor', 'Hortikultura', 'Harga', 'Panen', 'Pupuk', 'Air', 'Hujan', 'Sawah'];
  }

  filterItems(ev: any) {
    this.setItems();
    let val = ev.target.value;

    if (val && val.trim() !== '') {
      this.items = this.items.filter(function(item) {
        return item.toLowerCase().includes(val.toLowerCase());
      });
    }
  }
}
