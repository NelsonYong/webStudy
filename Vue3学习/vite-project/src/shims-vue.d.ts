declare module "*.vue" {
  import { DefineComponent, FunctionalComponent } from "vue";
  const component: DefineComponent<{}, {}, any> & FunctionalComponent;
  export default component;
}
