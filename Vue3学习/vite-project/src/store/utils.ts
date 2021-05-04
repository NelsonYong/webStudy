import modules from "./modules";

type GetGetter<Module> = Module extends { getters: infer G } ? G : unknown;
type GetGetters<Modules> = {
  [K in keyof Modules]: GetGetter<Modules[K]>;
};
// 对象为 {xxx:{xxx:...}}
// 遍历到modules里面的对象
type PGetters = GetGetters<typeof modules>;
// 拼接类型
type AddPrefix<P, K> = `${P & string}/${K & string}`;
// 拼接第一层与第二层
type GetSpliceKey<P, Module> = AddPrefix<P, keyof Module>;
// 获取元组形式
type GetSpliceKeys<Modules> = {
  [K in keyof Modules]: GetSpliceKey<K, Modules[K]>;
}[keyof Modules];
// 获取泛型T中的第一层以及属于第一层的第二层类型
type GetFunc<T, A, B> = T[A & keyof T][B & keyof T[A & keyof T]];
// 如果传入结构是 xxx:{xxx:...}则执行GetFunc
type GettersObj<T> = {
  [K in GetSpliceKeys<T>]: K extends `${infer A}/${infer B}`
    ? GetFunc<T, A, B>
    : unknown;
};
// 传入PGetters泛型，结构为 {xxx:{xxx:..}}
type GettersModule = GettersObj<PGetters>;
// 获取每个对象类型
type Getters = {
  [K in keyof GettersModule]: ReturnType<GettersModule[K]>;
};
export { Getters };
