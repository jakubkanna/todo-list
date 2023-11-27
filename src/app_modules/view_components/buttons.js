class TabButton {
  constructor(tag, ...classNames) {
    this.element = document.createElement(tag);
    classNames.forEach((className) => this.element.classList.add(className));
  }
  getElement() {
    return this.element;
  }
}
class CheckButton extends TabButton {
  constructor() {
    super("button", "check-btn", "bi", "bi-check-lg");
  }
}

class EditButton extends TabButton {
  constructor() {
    super("button", "edit-btn", "bi", "bi-pencil");
  }
}
class CloseButton extends TabButton {
  constructor() {
    super("button", "close-btn", "bi", "bi-x-lg");
  }
}
class ExclamationButton extends TabButton {
  constructor() {
    super("button", "important-btn", "bi", "bi-exclamation-lg");
  }
}
function createTabBtnSet() {
  return [
    new ExclamationButton(),
    new CheckButton(),
    new EditButton(),
    new CloseButton(),
  ];
}
function createProjectLIBtnSet() {
  return [new CloseButton()];
}
class ToggleVisibilityBtn {
  constructor(button, box) {
    this.button = document.querySelector(button);
    this.box = document.body.querySelector(box);
    this.isVisible = true;
    this.hideWindow(); //hide by default
    this.button.addEventListener("click", () => {
      this.toggleWindow();
    });
  }
  toggleWindow() {
    if (this.isVisible) {
      this.hideWindow();
    } else {
      this.showWindow();
    }
  }
  showWindow() {
    this.box.style.display = "block";
    this.isVisible = true;
  }
  hideWindow() {
    this.box.style.display = "none";
    this.isVisible = false;
  }
}
export { createTabBtnSet, createProjectLIBtnSet, ToggleVisibilityBtn };
