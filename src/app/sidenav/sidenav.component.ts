import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';

import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';


import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';


@Component({
  selector: 'app-sidenav',
  imports: [MatSidenavModule,MatSidenavModule, MatCheckboxModule, FormsModule,
     MatSidenavModule, MatCheckboxModule, FormsModule, MatButtonModule,MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})



export class SidenavComponent {
events: string[] = [];
  opened: boolean=true;

}
