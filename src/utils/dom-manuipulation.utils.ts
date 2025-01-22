export const assertNonNull = (
  element: HTMLElement | null,
  name: string,
): HTMLElement => {
  if (!element) {
    throw new Error(`Element not found: ${name}`);
  }

  return element;
};

export const assertElement = <T extends HTMLElement>(
  element: HTMLElement | null,
  assertion: (element: HTMLElement) => element is T,
  name: string,
): T => {
  const nonNullElement = assertNonNull(element, name);

  if (!assertion(nonNullElement)) {
    throw new Error(
      `Expected element of particular type, found incorrect element: ${element}. Expected element name: ${name}`,
    );
  }

  return nonNullElement;
};

export const updateClass = (element: HTMLElement, classNames: string[]) => {
  element.className = "";
  classNames.forEach((className) => {
    if (className) {
      element.classList.add(className);
    }
  });
};
