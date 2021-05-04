declare module "*.vue" {
  import { defineComponent, FunctionalComponent } from "vue";
  const comment: ReturnType<typeof defineComponent> | FunctionalComponent;
  export default comment;
}
