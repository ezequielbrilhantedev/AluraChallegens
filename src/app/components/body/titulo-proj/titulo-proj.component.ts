import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo-proj',
  templateUrl: './titulo-proj.component.html',
  styleUrls: ['./titulo-proj.component.scss'],
})
export class TituloProjComponent implements OnInit {
  linguagens = ['JavaScript', 'Python', 'HTML', 'CSS', 'C', 'C++'];

  constructor() {}

  ngOnInit(): void {}
}
