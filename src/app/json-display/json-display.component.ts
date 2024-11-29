import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-display',
  templateUrl: './json-display.component.html',
  styleUrl: './json-display.component.css'
})
export class JsonDisplayComponent implements OnInit {
  jsonData: any;
  firebaseService: any;
  searchText: string= '';
  jsonDataArray: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
      this.http.get('https:/assets/data.json').subscribe(data => {
        this.jsonData = data;
      });
  }
  loadData() {
    this.firebaseService.getData(this.dataPath, this.jsonData).then(() => {
      alert('Data saved successfully.');
    });
  }
  dataPath(dataPath: any, jsonData: any) {
    throw new Error('Method not implemented.');
  }
  deleteData(): void {
    if (confirm('Are you sure you want to delete this data?')) {
      this.firebaseService.deleteData(this.dataPath).then(() => {
        alert('Data deleted successfully.');
        this.jsonData = null;
      })
  }
  }
}
