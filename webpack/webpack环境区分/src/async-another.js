async function getComponents() {
  const { default: _ } = await import("lodash");
  const elment = document.createElement("div");
  elment.innerHTML = _.join(["hello", "import"], " ");
  return elment;
}

const elment = await getComponents();
document.body.appendChild(elment);
