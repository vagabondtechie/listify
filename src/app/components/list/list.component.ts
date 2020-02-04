import { Component, OnInit } from "@angular/core";

const TAG_PATTERN = /#[a-zA-Z0-9_]+[\s,\.\?\!]?/g;
const TAG_TEXT_PATTERN = /#([a-zA-Z0-9_]+)[\s,\.\?\!]?/;

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  items = [];
  allTags = [];
  constructor() {}

  ngOnInit() {}

  addNewItem(element: HTMLInputElement) {
    let value = element.value;
    if (!value || value === "") return;
    let newItem = this.createNewItem(value);
    this.updateTagMasterList(newItem.tags);
    this.items.push(newItem);
    element.value = "";
  }

  createNewItem(text) {
    return {
      created_date: new Date(),
      text: this.stripTags(text),
      tags: this.extractTags(text)
    };
  }

  updateTagMasterList(newTags: string[]) {
    this.allTags.push(
      ...(newTags || []).filter(newTag => this.allTags.indexOf(newTag) === -1)
    );
  }

  stripTags(text: string) {
    return text.replace(TAG_PATTERN, "");
  }

  extractTags(text: string) {
    let tags = text.match(TAG_PATTERN) || [];
    return tags.map(tag => tag.match(TAG_TEXT_PATTERN)[1].toLowerCase());
  }
}
