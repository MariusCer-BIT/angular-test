import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
    // Cia galetubutimodalinis langas pasirinkti kaip sharinti: facebook, twiter, email

    // Facebook share URL dokumentacija, kokia turi buti nuoroda:
    // https://developers.facebook.com/docs/sharing/reference/share-dialog/
    let url = 
    'https://facebook.com/sharer.php?display=popup&u=' + window.location.href;
    window.open(url, 'share');
  }

  shareTvitter() {
    window.alert('Padaryti tviterio sarinima');

    let url = 
    'https://twitter.com/intent/tweet' + window.location.href;
    window.open(url, 'share');
  
  }

}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/