import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  items = [];
  constructor() {}

  ngOnInit() {}

  addNewItem(element: HTMLInputElement) {
    console.log(element);
    let value = element.value;
    if (!value || value === "") return;
    this.items.push(this.newItem(value));
    element.value = "";
  }

  newItem(text) {
    return {
      created_date: new Date(),
      text: text
    };
  }
}
