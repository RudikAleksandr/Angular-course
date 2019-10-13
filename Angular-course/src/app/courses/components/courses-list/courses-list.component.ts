import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  public coursesList: any[] = [
    {
      id: 1,
      title: 'Courses 1. Name tag',
      creationDate: new Date().toString(),
      duration: 50,
      description: 'fdgdfg dfg f gsf gfsg dsjf dsljh fjkhsd fdjkh lfkh jkah fkjldhdsljh fjkhsd fdjkh lfkh jkah fkjldhdsljh fjkhsd fdjkh lfkh jkah fkjldhdsljh fjkhsd fdjkh lfkh jkah fkjldhdsljh fjkhsd fdjkh lfkh jkah fkjldh dsljh fjkhsd fdjkh lfkh jkah fkjldhdsljh fjkhsd fdjkh lfkh jkah fkjldhdsljh fjkhsd fdjkh lfkh jkah fkjldh flksh fsh klsdhfkh skh lskdhf skd fksd hfjkhs jkfh skdhfkjdhs fkh sdkfh skdh fskjh flkshf lkjsdh fjsh fjdsh  sdf gfd gfsd g kjdh fjh ljhd sakjlhajhlfdlkh aileh liewuh liuewh hew lkjah kjweh fjah fjah l'
    },
    {
      id: 1,
      title: 'Courses 1. Name tag',
      creationDate: new Date().toString(),
      duration: 50,
      description: 'fdgdfg dfg f gsf gfsg dsjf dsljh fjkhsd fdjkh lfkh jkah fkjldhdsljh fjkhsd fdjkh lfkh jkah fkjldhdsljh fjkhsd fdjkh lfkh jkah fkjldhdsljh fjkhsd fdjkh lfkh jkah fkjldhdsljh fjkhsd fdjkh lfkh jkah fkjldh dsljh fjkhsd fdjkh lfkh jkah fkjldhdsljh fjkhsd fdjkh lfkh jkah fkjldhdsljh fjkhsd fdjkh lfkh jkah fkjldh flksh fsh klsdhfkh skh lskdhf skd fksd hfjkhs jkfh skdhfkjdhs fkh sdkfh skdh fskjh flkshf lkjsdh fjsh fjdsh  sdf gfd gfsd g kjdh fjh ljhd sakjlhajhlfdlkh aileh liewuh liuewh hew lkjah kjweh fjah fjah l'
    },
    {
      id: 1,
      title: 'Courses 1. Name tag',
      creationDate: new Date().toString(),
      duration: 50,
      description: 'fdgdfg dfg f gsf gfsg dsjf dsljh fjkhsd fdjkh lfkh jkah fkjldhdsljh fjkhsd fdjkh lfkh jkah fkjldhdsljh fjkhsd fdjkh lfkh jkah fkjldhdsljh fjkhsd fdjkh lfkh jkah fkjldhdsljh fjkhsd fdjkh lfkh jkah fkjldh dsljh fjkhsd fdjkh lfkh jkah fkjldhdsljh fjkhsd fdjkh lfkh jkah fkjldhdsljh fjkhsd fdjkh lfkh jkah fkjldh flksh fsh klsdhfkh skh lskdhf skd fksd hfjkhs jkfh skdhfkjdhs fkh sdkfh skdh fskjh flkshf lkjsdh fjsh fjdsh  sdf gfd gfsd g kjdh fjh ljhd sakjlhajhlfdlkh aileh liewuh liuewh hew lkjah kjweh fjah fjah l'
    },
    {
      id: 1,
      title: 'Courses 1. Name tag',
      creationDate: new Date().toString(),
      duration: 50,
      description: 'fdgdfg dfg f gsf gfsg dsjf dsljh fjkhsd fdjkh lfkh jkah fkjldhdsljh fjkhsd fdjkh lfkh jkah fkjldhdsljh fjkhsd fdjkh lfkh jkah fkjldhdsljh fjkhsd fdjkh lfkh jkah fkjldhdsljh fjkhsd fdjkh lfkh jkah fkjldh dsljh fjkhsd fdjkh lfkh jkah fkjldhdsljh fjkhsd fdjkh lfkh jkah fkjldhdsljh fjkhsd fdjkh lfkh jkah fkjldh flksh fsh klsdhfkh skh lskdhf skd fksd hfjkhs jkfh skdhfkjdhs fkh sdkfh skdh fskjh flkshf lkjsdh fjsh fjdsh  sdf gfd gfsd g kjdh fjh ljhd sakjlhajhlfdlkh aileh liewuh liuewh hew lkjah kjweh fjah fjah l'
    },
    {
      id: 1,
      title: 'Courses 1. Name tag',
      creationDate: new Date().toString(),
      duration: 50,
      description: 'fdgdfg dfg f gsf gfsg dsjf dsljh fjkhsd fdjkh lfkh jkah fkjldhdsljh fjkhsd fdjkh lfkh jkah fkjldhdsljh fjkhsd fdjkh lfkh jkah fkjldhdsljh fjkhsd fdjkh lfkh jkah fkjldhdsljh fjkhsd fdjkh lfkh jkah fkjldh dsljh fjkhsd fdjkh lfkh jkah fkjldhdsljh fjkhsd fdjkh lfkh jkah fkjldhdsljh fjkhsd fdjkh lfkh jkah fkjldh flksh fsh klsdhfkh skh lskdhf skd fksd hfjkhs jkfh skdhfkjdhs fkh sdkfh skdh fskjh flkshf lkjsdh fjsh fjdsh  sdf gfd gfsd g kjdh fjh ljhd sakjlhajhlfdlkh aileh liewuh liuewh hew lkjah kjweh fjah fjah l'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
