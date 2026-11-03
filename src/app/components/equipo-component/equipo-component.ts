import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Equipo } from '../../models/equipo';
import { ServiceEquipos } from '../../services/serviceEquipos';

@Component({
  selector: 'app-equipo-component',
  standalone: false,
  styleUrl: './equipo-component.css',
  templateUrl: './equipo-component.html',
})
export class EquipoComponent implements OnInit{
  public equipos!: Array<Equipo>
  public readonly descriptionLimit = 140;
  private readonly expandedDescriptions = new Set<number>();

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServiceEquipos
  ){}

  async ngOnInit():Promise<void> {
    this.equipos = await this._service.getEquiposAsync()
    this._cdr.detectChanges()
  }

  isDescriptionExpanded(idEquipo: number): boolean {
    return this.expandedDescriptions.has(idEquipo);
  }

  toggleDescription(idEquipo: number): void {
    if (this.isDescriptionExpanded(idEquipo)) {
      this.expandedDescriptions.delete(idEquipo);
    } else {
      this.expandedDescriptions.add(idEquipo);
    }
  }
}
