import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Person } from 'src/app/models/Person';
import { SquadServiceService } from 'src/app/services/squad-service.service';

@Component({
  selector: 'app-squad-card',
  templateUrl: './squad-card.component.html',
  styleUrls: ['./squad-card.component.scss']
})
export class SquadCardComponent implements OnInit {

  squad: Person[] = []
  workingList: any = []
  vacationList: any = []

  constructor(private squadService: SquadServiceService) { }

  ngOnInit(): void {
    this.attSquadList()
  }

  public attSquadList() {
    this.squadService.getAllMembers().subscribe(
      res => {
        this.squad = res
        this.squad.map((person) => {
          if (person.status == true) {
            this.workingList.push(person)
          } else {
            this.vacationList.push(person)
          }
        })
        console.log(this.workingList)
      },
      erro => {
        console.log(erro)
      }
    )
  }

}
