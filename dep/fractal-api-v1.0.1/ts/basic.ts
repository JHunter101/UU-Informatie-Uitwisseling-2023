function spoiler(element: HTMLElement): void {
  element.classList.toggle('blur');
}

function toggle_elem(elem: string): void {
  const element = document.getElementById(elem) as HTMLInputElement;
  const classesToCheck = ['hidden', 'desktop-only', 'mobile-only'];
  const hasAnyClass = classesToCheck.some((className) =>
    element.classList.contains(className),
  );
  if (hasAnyClass) {
    unhide_elem(elem);
  } else {
    hide_elem(elem);
  }
}

function unhide_elem(elem: string): void {
  const element = document.getElementById(elem) as HTMLInputElement;
  element.classList.remove('hidden');
  element.classList.remove('desktop-only');
  element.classList.remove('mobile-only');
}

function hide_elem(elem: string): void {
  const element = document.getElementById(elem) as HTMLInputElement;
  element.classList.add('hidden');
}

function clearBox(elem: string): void {
  (document.getElementById(elem) as HTMLInputElement).innerHTML = '';
}

function getInputElementValue(id: string): string {
  const inputElement = document.getElementById(id) as HTMLInputElement;
  return inputElement.value;
}
