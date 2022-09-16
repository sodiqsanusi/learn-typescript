//* The DOM & Type Casting

/*
  We can access DOM nodes in Typescript just like in vanilla JS, although
  there might be some things we have to take note of.
*/

const form = document.querySelector('form')!;
const sloan = document.querySelector('.gan') as HTMLAnchorElement;