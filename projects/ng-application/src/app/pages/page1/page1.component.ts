import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
})
export class Page1Component implements OnInit {
  characters = [
    {
      id: '488c27fa-d2b9-5c51-b543-6dc7daba26b7',
      name: 'Christian Wheeler',
      country: 'GB',
      phoneNumber: '(522) 847-7742',
    },
    {
      id: 'bbf698bf-d015-54f5-8b85-bb1107a829cb',
      name: 'Ian Schmidt',
      country: 'TH',
      phoneNumber: '(722) 585-2962',
    },
    {
      id: 'd47b672b-edea-5bb7-b75c-014c3814f6c5',
      name: 'Lillie Baldwin',
      country: 'PM',
      phoneNumber: '(478) 380-3319',
    },
    {
      id: 'b3f9c511-be2c-5793-849c-a73297418aa2',
      name: 'Lydia Hubbard',
      country: 'TF',
      phoneNumber: '(555) 295-4416',
    },
    {
      id: '4d7bfbb3-acba-56a8-b063-e6c56311f2c7',
      name: 'Violet Arnold',
      country: 'BI',
      phoneNumber: '(933) 968-5571',
    },
    {
      id: 'c94ba293-627f-57b3-aa17-e16a50a75dd3',
      name: 'Nettie Joseph',
      country: 'ZW',
      phoneNumber: '(268) 576-5076',
    },
    {
      id: '5f76a17a-4436-5391-884c-408affdae115',
      name: 'Timothy Logan',
      country: 'AD',
      phoneNumber: '(853) 794-4582',
    },
    {
      id: '56cb9014-6e57-52f4-9868-284d102294a9',
      name: 'Mildred Ortiz',
      country: 'ER',
      phoneNumber: '(812) 763-4802',
    },
    {
      id: '6a236fb7-2691-585c-8c6b-317f52ccad48',
      name: 'Leona Cohen',
      country: 'PL',
      phoneNumber: '(240) 658-8375',
    },
    {
      id: 'd4184be1-3ad0-54da-9876-8c1d17391017',
      name: 'Phoebe Underwood',
      country: 'EG',
      phoneNumber: '(858) 425-4005',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
