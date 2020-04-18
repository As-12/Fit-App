import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-license-dialog",
  template: `
    <!-- Button trigger modal -->
    <span
      data-toggle="modal"
      data-target="#exampleModalLong"
      data-backdrop="false"
    >
      License
    </span>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModalLong"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-black-50" id="exampleModalLongTitle">
              License Agreement
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body text-black-50">
            <strong>
              Copyright {{ today | date: "yyyy" }} Thanaphon Chavengsaksongkram
            </strong>
            <p>
              Permission is hereby granted, free of charge, to any person
              obtaining a copy of this software and associated documentation
              files (the "Software"), to deal in the Software without
              restriction, including without limitation the rights to use, copy,
              modify, merge, publish, distribute, sublicense, and/or sell copies
              of the Software, and to permit persons to whom the Software is
              furnished to do so, subject to the following conditions:
            </p>
            <p>
              The above copyright notice and this permission notice shall be
              included in all copies or substantial portions of the Software.
            </p>
            <p>
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
              EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
              NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
              HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
              WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
              DEALINGS IN THE SOFTWARE.
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class LicenseComponent implements OnInit {
  constructor() {}
  today: Date = new Date();
  ngOnInit(): void {}
}
