import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[] ): string {

    if(!images){
      return "https://cdn.shopify.com/s/files/1/1155/5150/t/22/assets/default-image.jpg?202";
    }

    if(images.length > 0 ){
      return images[0].url;
    }else{
      return "https://cdn.shopify.com/s/files/1/1155/5150/t/22/assets/default-image.jpg?202";
    }

  }

}
