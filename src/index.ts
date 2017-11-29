function hello(divName: string, compiler: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello ${compiler}`;
}

hello("box", "Drag");
