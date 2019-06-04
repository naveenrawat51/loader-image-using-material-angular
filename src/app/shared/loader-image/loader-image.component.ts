import { Component } from '@angular/core';
import { LoaderService } from 'src/app/core/loader.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-loader-image',
  templateUrl: './loader-image.component.html',
  styleUrls: ['./loader-image.component.css']
})
export class LoaderImageComponent {

  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  isLoading: Subject<boolean> = this.loaderService.isLoading;
  
  constructor( private loaderService: LoaderService){}

}
