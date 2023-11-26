import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Person } from 'src/app/models/Person';
import { SquadServiceService } from 'src/app/services/squad-service.service';

@Component({
  selector: 'app-squad-list',
  templateUrl: './squad-list.component.html',
  styleUrls: ['./squad-list.component.scss']
})
export class SquadListComponent implements OnInit {

  squad: Person[] = [];
  public member: any = {
    nome: '',
    email: ''
  }
  public member1: any = {
    nome: '',
    email: ''
  }

  mostrar: Boolean = false
  buttonValue = ''
  id: number = 0
  update: Boolean = false

  momentForm!: FormGroup


  constructor(private squadService: SquadServiceService) { }

  ngOnInit(): void {
    this.attSquadList()

    this.momentForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
    })
  }

  public attSquadList() {
    this.squadService.getAllMembers().subscribe(
      res => {
        this.squad = res
      },
      erro => {
        console.log(erro)
      }
    )
  }

  public deleteMember(id: any) {
    this.squadService.remove(id).subscribe(
      res => {
        this.attSquadList()
      }
    )
  }


  toggle() {
    this.mostrar = !this.mostrar
  }

  addMember() {
    if (this.momentForm.invalid) {
      return;
    }

    this.squadService.post({ nome: this.momentForm.value.title, email: this.momentForm.value.email }).subscribe(
      res => {
        this.attSquadList()
        this.clearInput()
      }
    )
  }

  clearInput() {
    this.momentForm.controls['title'].setValue('');
    this.momentForm.controls['email'].setValue('');
  }

  public editMember(id: any) {
    this.squadService.updateMember({ id: id, nome: this.member1.nome, email: this.member1.email }).subscribe({
      next: (res: any) => {
        this.attSquadList()
        this.update = false
      }
    })
  }

  public openModal(id: any, nome: string, email: string) {
    this.id = id;
    this.member1 = {
      nome: nome,
      email: email
    }
    this.update = true
  }

  public closeModal() {
    this.update = false
  }

  get title() {
    return this.momentForm.get('title')!
  }
  get email() {

    return this.momentForm.get('email')!
  }

}
