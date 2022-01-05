import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular & Tailwind';

  Verduras: string[] = [`Lechuga`, `Tomate`, `Papa`, `Morron`, `Frutillas`];

  remove(id: number) {
    this.Verduras.splice(id, 1);
  }

  new(verdura: any) {
    this.Verduras.push(verdura.value);
  }
}
