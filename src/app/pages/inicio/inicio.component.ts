import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{

  menuItems?:any[];
  id!:string;

  constructor(private router:Router,private route:ActivatedRoute, private servicios:DataService){
    this.menuItems=this.servicios.data;
  }

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
  }

  gotoUser (id:number){
    this.router.navigate(['/detalle',id])
  }
}

