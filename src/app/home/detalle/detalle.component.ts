import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({ selector: 'ngbd-modal-component', templateUrl: './detalle.component.html' })
export class DetalleComponent {
  @Input() character: any;

  constructor(public activeModal: NgbActiveModal) {}
}